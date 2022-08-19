import { AppProps } from 'next/app';
import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, from, split, NormalizedCacheObject } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { concatPagination, getMainDefinition } from '@apollo/client/utilities';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import fetch from 'isomorphic-unfetch';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';
const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT + '/v1/graphql';
const SUBSCRIPTION_ENDPOINT = GRAPHQL_ENDPOINT.replace('http', 'ws');

let apolloClient: ApolloClient<NormalizedCacheObject>;

const getHeader = (accessToken: string) => {
  if (accessToken)
    return {
      authorization: `Bearer ${accessToken ?? ''}`,
    };
};

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) graphQLErrors.forEach(({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// set query context header and default headers
const authLink = setContext((_, { headers }) => {
  return {
    headers,
  };
});

const createHttpLink = (headers) => {
  const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    credentials: 'include',
    headers,
    fetch,
  });
  return httpLink;
};

const createWSLink = (headers) => {
  return new GraphQLWsLink(
    createClient({
      url: SUBSCRIPTION_ENDPOINT,
      connectionParams: async () => {
        return headers;
      },
    })
  );
};

function createApolloClient(headers) {
  const ssrMode = typeof window === 'undefined';
  const link = !ssrMode
    ? split(
        //only create the split in the browser
        // split based on operation type
        ({ query }) => {
          const definition = getMainDefinition(query);
          return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
        },
        createWSLink(headers),
        createHttpLink(headers)
      )
    : createHttpLink(headers);

  return new ApolloClient({
    ssrMode: ssrMode,
    link: from([errorLink, authLink.concat(link)]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(),
          },
        },
      },
    }),
  });
}

export const initializeApollo = ({ initialState = null, accessToken = null }): ApolloClient<NormalizedCacheObject> => {
  const _apolloClient = apolloClient ?? createApolloClient(getHeader(accessToken));

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    const data = merge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [...sourceArray, ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s)))],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const addApolloState = (client, pageProps) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }
  return pageProps;
};

export const useApollo = (pageProps: AppProps['pageProps'], accessToken?: string) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo({ initialState: state, accessToken }), [state]);
  return store;
};
