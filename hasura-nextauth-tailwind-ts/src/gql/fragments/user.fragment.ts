import { gql } from '@apollo/client';

export const ACCOUNT_FRAGMENT = gql`
  fragment account_freagment on user_accounts {
    key: id
    id
    access_token
    id_token
    refresh_token
    oauth_token
    oauth_token_secret
    provider
    providerAccountId
    scope
    session_state
    token_type
    type
    expires_at
    userId
  }
`;
export const SESSION_FRAGMENT = gql`
  fragment session_freagment on user_sessions {
    key: id
    id
    sessionToken
    expires
    userId
  }
`;

export const PROFILE_FRAGMENT = gql`
  fragment profile_freagment on user_profile {
    key: id
    id
    firstname
    lastname
    mobile_number
    userId
  }
`;
export const ROLE_FRAGMENT = gql`
  fragment role_freagment on user_roles {
    key: id
    id
    role_name
    role_priority
  }
`;

export const USER_FRAGMENT = gql`
  ${ACCOUNT_FRAGMENT}
  ${SESSION_FRAGMENT}
  ${PROFILE_FRAGMENT}
  ${ROLE_FRAGMENT}
  fragment user_freagment on user_users {
    key: id
    id
    email
    emailVerified
    name
    image
    roles(order_by: { role: { role_priority: asc } }) {
      role {
        ...role_freagment
      }
    }
    profile {
      ...profile_freagment
    }
    accounts {
      ...account_freagment
    }
    sessions {
      ...session_freagment
    }
  }
`;
