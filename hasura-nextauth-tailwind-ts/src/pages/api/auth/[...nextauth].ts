import NextAuth, { NextAuthOptions } from 'next-auth';

import EmailProvider from 'next-auth/providers/email';

import jwt, { Algorithm } from 'jsonwebtoken';
import { HasuraAdapter } from '~/lib/hasuraAdapter';
import { JWT } from 'next-auth/jwt';

const jwtSecret: { type: string; key: string } = JSON.parse(process.env.NEXT_PUBLIC_JWT_SECRET);

export const authOptions: NextAuthOptions = {
  adapter: HasuraAdapter(),
  providers: [
    EmailProvider({
      server: process.env.NEXT_PUBLIC_EMAIL_SERVER,
      from: process.env.NEXT_PUBLIC_EMAIL_FROM,
    }),
  ],
  secret: jwtSecret.key,

  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    encode: async ({ token, secret }) => {
      const highLeverRoleName = token?.user?.roles[0]?.role?.role_name;
      const rolesList = token?.user?.roles?.map(({ role }) => role.role_name);
      const tokenContents = {
        id: token.id,
        user: token?.user,
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        sub: token.id,
        'https://hasura.io/jwt/claims': {
          'x-hasura-default-role': highLeverRoleName,
          'x-hasura-allowed-roles': rolesList,
          'x-hasura-user-id': token?.user?.id,
        },
      };

      const encodedToken = jwt.sign(tokenContents, secret, {
        algorithm: jwtSecret.type as Algorithm,
      });
      return encodedToken;
    },
    decode: async ({ token, secret }) => {
      const decodedToken = jwt.verify(token, secret, {
        algorithms: [jwtSecret.type] as Algorithm[],
      });
      return decodedToken as JWT;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    jwt: ({ token, user }) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.id = user.id;
        token.user = user;
      }
      return token;
    },
    session: ({ session, token }) => {
      const encodedToken = jwt.sign(token, jwtSecret.key, {
        algorithm: jwtSecret.type as Algorithm,
      });
      if (token) {
        session.token = encodedToken;
        if (token.user) {
          session.user = token.user;
        }
      }
      return session;
    },
  },
  debug: true,
};
export default NextAuth(authOptions);
