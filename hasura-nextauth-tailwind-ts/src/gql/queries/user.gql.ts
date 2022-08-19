import { gql } from '@apollo/client';
import { SESSION_FRAGMENT, USER_FRAGMENT } from '~/gql/fragments/user.fragment';

export const GET_USERS = gql`
  ${USER_FRAGMENT}
  query GET_USERS($where: user_users_bool_exp, $limit: Int, $offset: Int) {
    user_users(where: $where, limit: $limit, offset: $offset, order_by: { id: desc }) {
      ...user_freagment
    }
  }
`;

export const GET_SESSION_USER = gql`
  ${USER_FRAGMENT}
  ${SESSION_FRAGMENT}
  query GET_SESSION_USER($sessionToken: String) {
    user_sessions(where: { sessionToken: { _eq: $sessionToken } }) {
      ...session_freagment
      user {
        ...user_freagment
      }
    }
  }
`;

export const GET_USER_ROLES = gql`
  query GET_USER_ROLES($where: user_roles_bool_exp) {
    user_roles(where: $where) {
      id
      role_name
      role_priority
    }
  }
`;
