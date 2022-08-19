import { ACCOUNT_FRAGMENT, SESSION_FRAGMENT, USER_FRAGMENT } from '~/gql/fragments/user.fragment';
import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  ${USER_FRAGMENT}
  mutation CREATE_USER($user: user_users_insert_input!) {
    insert_user_users_one(object: $user) {
      ...user_freagment
    }
  }
`;

export const UPDATE_USERS = gql`
  ${USER_FRAGMENT}
  mutation UPDATE_USERS($where: user_users_bool_exp!, $set: user_users_set_input) {
    update_user_users(where: $where, _set: $set) {
      returning {
        ...user_freagment
      }
    }
  }
`;

export const INSERT_ACCOUNT = gql`
  ${ACCOUNT_FRAGMENT}
  mutation INSERT_ACCOUNT($data: user_accounts_insert_input!) {
    insert_user_accounts_one(object: $data) {
      ...account_freagment
    }
  }
`;

export const DELETE_ACCOUNTS = gql`
  ${ACCOUNT_FRAGMENT}
  mutation DELETE_ACCOUNTS($where: user_accounts_bool_exp!) {
    delete_user_accounts(where: $where) {
      returning {
        ...account_freagment
      }
    }
  }
`;

export const CREATE_SESSION = gql`
  ${USER_FRAGMENT}
  ${SESSION_FRAGMENT}
  mutation CREATE_SESSION($data: user_sessions_insert_input!) {
    insert_user_sessions_one(object: $data) {
      ...session_freagment
      user {
        ...user_freagment
      }
    }
  }
`;

export const DELETE_SESSION = gql`
  ${SESSION_FRAGMENT}
  mutation DELETE_SESSION($sessionToken: String) {
    delete_user_sessions(where: { sessionToken: { _eq: $sessionToken } }) {
      returning {
        ...session_freagment
      }
    }
  }
`;

export const UPDATE_SESSION = gql`
  ${SESSION_FRAGMENT}
  mutation UPDATE_SESSION($sessionToken: String, $set: user_sessions_set_input!) {
    update_user_sessions(where: { sessionToken: { _eq: $sessionToken } }, _set: $set) {
      returning {
        ...session_freagment
      }
    }
  }
`;

export const CREATE_VERIFICATION_TOKEN = gql`
  mutation CREATE_VERIFICATION_TOKEN($data: [user_verification_tokens_insert_input!]!) {
    insert_user_verification_tokens(objects: $data) {
      returning {
        expires
        identifier
        token
      }
    }
  }
`;

export const DELETE_VERIFICATION_TOKEN = gql`
  mutation DELETE_VERIFICATION_TOKEN($identifier: String!, $token: String!) {
    delete_user_verification_tokens(where: { token: { _eq: $token }, identifier: { _eq: $identifier } }) {
      returning {
        expires
        identifier
        token
      }
    }
  }
`;
