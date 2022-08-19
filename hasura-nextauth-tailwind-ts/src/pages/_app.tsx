import '~/styles/vars.css';
import '~/styles/globals.css';
import { SessionProvider, useSession } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import Layout from '~/hoc/Layout';
import { useApollo } from '~/lib/apolloClient';
import { ApolloProvider } from '@apollo/client';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <SessionProvider session={session} refetchInterval={0}>
        <Layout>
          {Component.isAuth ? (
            <Auth requiredRoles={Component.requiredRoles}>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
        </Layout>
      </SessionProvider>
    </ApolloProvider>
  );
};

const Auth = ({ requiredRoles, children }) => {
  const { data: session } = useSession({ required: true });
  const isUser = !!session?.user;
  if (isUser) {
    if (requiredRoles?.length > 0) {
      if (requiredRoles.includes(session?.user?.roles)) return children;
      return <div className="flex h-screen w-full items-center justify-center">Хандах эрх хүрэхгүй байна</div>;
    }
    return children;
  }
  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
};

export default appWithTranslation(MyApp);
