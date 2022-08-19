import type { NextComponentType, NextPageContext } from 'next';
import type { Session } from 'next-auth';
import type { Router } from 'next/router';

declare module 'next/app' {
  interface AppProps<P = Record<string, unknown>> {
    Component: NextComponentType<NextPageContext, any, P> & {
      isAuth?: boolean;
      requiredRoles?: string[];
      ssr?: boolean;
    };
    router: Router;
    pageProps: P & {
      /** Initial session passed in from `getServerSideProps` or `getInitialProps` */
      session?: Session;
    };
  }
}
