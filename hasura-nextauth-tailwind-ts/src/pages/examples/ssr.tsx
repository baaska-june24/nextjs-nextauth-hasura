import { initializeApollo, addApolloState } from '~/lib/apolloClient';
import { GET_USER_PROFILE } from '~/gql/queries/user.gql';
import { Get_User_ProfileQuery, Get_User_ProfileQueryVariables } from '~/gql/generated/graphql';
import { getSession } from 'next-auth/react';

const SSRPage = () => <div>THIS IS SSR PAGE</div>;

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const apolloClient = initializeApollo({ accessToken: session?.token });

  await apolloClient.query<Get_User_ProfileQuery, Get_User_ProfileQueryVariables>({
    query: GET_USER_PROFILE,
    variables: {},
  });

  return addApolloState(apolloClient, {
    props: {
      session,
    },
  });
};

export default SSRPage;
