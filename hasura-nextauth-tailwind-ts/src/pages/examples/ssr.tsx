import { initializeApollo, addApolloState } from '~/lib/apolloClient';

const SSRPage = () => <div>THIS IS SSR PAGE</div>;

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: {},
    variables: {},
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default SSRPage;
