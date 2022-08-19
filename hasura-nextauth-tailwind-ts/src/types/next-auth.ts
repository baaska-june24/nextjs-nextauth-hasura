import { DefaultSession, User } from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    roles: {
      role: {
        id: number;
        role_name: string;
        role_priority: number;
      };
    }[] &
      DefaultSession['user'];
  }
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession {
    user: User;
    token: string;
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    user: User;
  }
}
