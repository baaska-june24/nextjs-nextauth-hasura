import { AdapterUser } from './../../node_modules/next-auth/adapters.d';
import { Adapter, AdapterSession, VerificationToken } from 'next-auth/adapters';
import {
  Create_SessionMutation,
  Create_SessionMutationVariables,
  Create_UserMutation,
  Create_UserMutationVariables,
  Create_Verification_TokenMutation,
  Create_Verification_TokenMutationVariables,
  Delete_AccountsMutation,
  Delete_AccountsMutationVariables,
  Delete_SessionMutation,
  Delete_SessionMutationVariables,
  Delete_Verification_TokenMutation,
  Delete_Verification_TokenMutationVariables,
  Get_Session_UserQuery,
  Get_Session_UserQueryVariables,
  Get_UsersQuery,
  Get_UsersQueryVariables,
  Get_User_RolesQuery,
  Get_User_RolesQueryVariables,
  Insert_AccountMutation,
  Insert_AccountMutationVariables,
  Update_SessionMutation,
  Update_SessionMutationVariables,
  Update_UsersMutation,
  Update_UsersMutationVariables,
} from '~/gql/generated/graphql';
import {
  CREATE_SESSION,
  CREATE_USER,
  CREATE_VERIFICATION_TOKEN,
  DELETE_ACCOUNTS,
  DELETE_SESSION,
  DELETE_VERIFICATION_TOKEN,
  INSERT_ACCOUNT,
  UPDATE_SESSION,
  UPDATE_USERS,
} from '~/gql/mutations/user.gql';
import { GET_SESSION_USER, GET_USERS, GET_USER_ROLES } from '~/gql/queries/user.gql';
import { initializeApollo } from './apolloClient';
import { Account } from 'next-auth';

export const HasuraAdapter = (): Adapter => {
  const client = initializeApollo();
  const context = {
    headers: {
      'x-hasura-admin-secret': process.env.NEXT_PUBLIC_GRAPHQL_SECRET,
    },
  };
  return {
    createUser: async (userData) => {
      const userRole = await client.query<Get_User_RolesQuery, Get_User_RolesQueryVariables>({
        context,
        query: GET_USER_ROLES,
        variables: {
          where: {
            role_name: { _eq: 'user' },
          },
        },
      });
      const [role] = userRole?.data?.user_roles;
      const createdUser = await client.mutate<Create_UserMutation, Create_UserMutationVariables>({
        context,
        mutation: CREATE_USER,
        variables: {
          user: {
            ...userData,
            roles: {
              data: [{ role_id: role.id }],
            },
          },
        },
      });
      return createdUser?.data?.insert_user_users_one as AdapterUser;
    },
    getUser: async (id) => {
      const { data } = await client.query<Get_UsersQuery, Get_UsersQueryVariables>({
        context,
        query: GET_USERS,
        variables: {
          where: {
            id: { _eq: id },
          },
        },
      });
      const [user] = data?.user_users;
      if (!user) return null;
      return user as AdapterUser;
    },

    getUserByEmail: async (email) => {
      const { data } = await client.query<Get_UsersQuery, Get_UsersQueryVariables>({
        context,
        query: GET_USERS,
        variables: {
          where: {
            email: { _eq: email },
          },
        },
      });
      const [user] = data?.user_users;
      if (!user) return null;
      return user as AdapterUser;
    },

    getUserByAccount: async ({ providerAccountId, provider }) => {
      const { data } = await client.query<Get_UsersQuery, Get_UsersQueryVariables>({
        context,
        query: GET_USERS,
        variables: {
          where: {
            accounts: {
              providerAccountId: { _eq: providerAccountId },
              provider: { _eq: provider },
            },
          },
        },
      });

      const [user] = data?.user_users;

      if (!user) return null;
      return user as AdapterUser;
    },

    updateUser: async (userData) => {
      const result = await client.mutate<Update_UsersMutation, Update_UsersMutationVariables>({
        context,
        mutation: UPDATE_USERS,
        variables: {
          where: {
            id: { _eq: userData.id },
          },
          set: userData,
        },
      });

      const [user] = result?.data?.update_user_users?.returning;

      return user as AdapterUser;
    },
    deleteUser: async (userId) => {
      return;
    },
    linkAccount: async (account) => {
      const result = await client.mutate<Insert_AccountMutation, Insert_AccountMutationVariables>({
        context,
        mutation: INSERT_ACCOUNT,
        variables: {
          data: account,
        },
      });
      return result?.data?.insert_user_accounts_one as Account;
    },
    unlinkAccount: async ({ providerAccountId, provider }) => {
      const result = await client.mutate<Delete_AccountsMutation, Delete_AccountsMutationVariables>({
        context,
        mutation: DELETE_ACCOUNTS,
        variables: {
          where: {
            provider: { _eq: provider },
            providerAccountId: { _eq: providerAccountId },
          },
        },
      });

      const [account] = result.data?.delete_user_accounts?.returning;
      if (!account) return null;
      return account as Account;
    },
    createSession: async ({ sessionToken, userId, expires }) => {
      const result = await client.mutate<Create_SessionMutation, Create_SessionMutationVariables>({
        context,
        mutation: CREATE_SESSION,
        variables: {
          data: {
            sessionToken,
            userId,
            expires,
          },
        },
      });
      const session = result?.data?.insert_user_sessions_one!;
      return session as AdapterSession;
    },
    getSessionAndUser: async (sessionToken) => {
      const { data } = await client.query<Get_Session_UserQuery, Get_Session_UserQueryVariables>({
        context,
        query: GET_SESSION_USER,
        variables: {
          sessionToken,
        },
      });

      const [sessionUser] = data?.user_sessions;

      if (!sessionUser) return null;

      return {
        session: sessionUser as AdapterSession,
        user: sessionUser.user as AdapterUser,
      };
    },
    updateSession: async ({ sessionToken, expires }) => {
      const result = await client.mutate<Update_SessionMutation, Update_SessionMutationVariables>({
        context,
        mutation: UPDATE_SESSION,
        variables: {
          sessionToken: sessionToken,
          set: {
            expires: expires,
          },
        },
      });

      const [session] = result?.data?.update_user_sessions?.returning;
      if (!session) return null;

      return session as AdapterSession;
    },
    deleteSession: async (sessionToken) => {
      const result = await client.mutate<Delete_SessionMutation, Delete_SessionMutationVariables>({
        context,
        mutation: DELETE_SESSION,
        variables: {
          sessionToken,
        },
      });
      const [session] = result?.data?.delete_user_sessions?.returning;
      if (!session) return null;

      return session as AdapterSession;
    },
    createVerificationToken: async ({ identifier, expires, token }) => {
      const result = await client.mutate<Create_Verification_TokenMutation, Create_Verification_TokenMutationVariables>({
        context,
        mutation: CREATE_VERIFICATION_TOKEN,
        variables: {
          data: [
            {
              identifier,
              expires,
              token,
            },
          ],
        },
      });
      const [verificationToken] = result?.data?.insert_user_verification_tokens?.returning;
      if (!verificationToken) return null;

      return verificationToken as VerificationToken;
    },
    useVerificationToken: async ({ identifier, token }) => {
      const result = await client.mutate<Delete_Verification_TokenMutation, Delete_Verification_TokenMutationVariables>({
        context,
        mutation: DELETE_VERIFICATION_TOKEN,
        variables: {
          identifier,
          token,
        },
      });
      const [deletedToken] = result?.data?.delete_user_verification_tokens?.returning;

      if (!deletedToken) return null;

      return deletedToken as VerificationToken;
    },
  };
};
