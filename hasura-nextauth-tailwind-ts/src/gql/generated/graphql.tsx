import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "user.accounts" */
  delete_user_accounts?: Maybe<User_Accounts_Mutation_Response>;
  /** delete single row from the table: "user.accounts" */
  delete_user_accounts_by_pk?: Maybe<User_Accounts>;
  /** delete data from the table: "user.map_user_roles" */
  delete_user_map_user_roles?: Maybe<User_Map_User_Roles_Mutation_Response>;
  /** delete single row from the table: "user.map_user_roles" */
  delete_user_map_user_roles_by_pk?: Maybe<User_Map_User_Roles>;
  /** delete data from the table: "user.profile" */
  delete_user_profile?: Maybe<User_Profile_Mutation_Response>;
  /** delete single row from the table: "user.profile" */
  delete_user_profile_by_pk?: Maybe<User_Profile>;
  /** delete data from the table: "user.roles" */
  delete_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** delete single row from the table: "user.roles" */
  delete_user_roles_by_pk?: Maybe<User_Roles>;
  /** delete data from the table: "user.sessions" */
  delete_user_sessions?: Maybe<User_Sessions_Mutation_Response>;
  /** delete single row from the table: "user.sessions" */
  delete_user_sessions_by_pk?: Maybe<User_Sessions>;
  /** delete data from the table: "user.users" */
  delete_user_users?: Maybe<User_Users_Mutation_Response>;
  /** delete single row from the table: "user.users" */
  delete_user_users_by_pk?: Maybe<User_Users>;
  /** delete data from the table: "user.verification_tokens" */
  delete_user_verification_tokens?: Maybe<User_Verification_Tokens_Mutation_Response>;
  /** insert data into the table: "user.accounts" */
  insert_user_accounts?: Maybe<User_Accounts_Mutation_Response>;
  /** insert a single row into the table: "user.accounts" */
  insert_user_accounts_one?: Maybe<User_Accounts>;
  /** insert data into the table: "user.map_user_roles" */
  insert_user_map_user_roles?: Maybe<User_Map_User_Roles_Mutation_Response>;
  /** insert a single row into the table: "user.map_user_roles" */
  insert_user_map_user_roles_one?: Maybe<User_Map_User_Roles>;
  /** insert data into the table: "user.profile" */
  insert_user_profile?: Maybe<User_Profile_Mutation_Response>;
  /** insert a single row into the table: "user.profile" */
  insert_user_profile_one?: Maybe<User_Profile>;
  /** insert data into the table: "user.roles" */
  insert_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** insert a single row into the table: "user.roles" */
  insert_user_roles_one?: Maybe<User_Roles>;
  /** insert data into the table: "user.sessions" */
  insert_user_sessions?: Maybe<User_Sessions_Mutation_Response>;
  /** insert a single row into the table: "user.sessions" */
  insert_user_sessions_one?: Maybe<User_Sessions>;
  /** insert data into the table: "user.users" */
  insert_user_users?: Maybe<User_Users_Mutation_Response>;
  /** insert a single row into the table: "user.users" */
  insert_user_users_one?: Maybe<User_Users>;
  /** insert data into the table: "user.verification_tokens" */
  insert_user_verification_tokens?: Maybe<User_Verification_Tokens_Mutation_Response>;
  /** insert a single row into the table: "user.verification_tokens" */
  insert_user_verification_tokens_one?: Maybe<User_Verification_Tokens>;
  /** update data of the table: "user.accounts" */
  update_user_accounts?: Maybe<User_Accounts_Mutation_Response>;
  /** update single row of the table: "user.accounts" */
  update_user_accounts_by_pk?: Maybe<User_Accounts>;
  /** update multiples rows of table: "user.accounts" */
  update_user_accounts_many?: Maybe<Array<Maybe<User_Accounts_Mutation_Response>>>;
  /** update data of the table: "user.map_user_roles" */
  update_user_map_user_roles?: Maybe<User_Map_User_Roles_Mutation_Response>;
  /** update single row of the table: "user.map_user_roles" */
  update_user_map_user_roles_by_pk?: Maybe<User_Map_User_Roles>;
  /** update multiples rows of table: "user.map_user_roles" */
  update_user_map_user_roles_many?: Maybe<Array<Maybe<User_Map_User_Roles_Mutation_Response>>>;
  /** update data of the table: "user.profile" */
  update_user_profile?: Maybe<User_Profile_Mutation_Response>;
  /** update single row of the table: "user.profile" */
  update_user_profile_by_pk?: Maybe<User_Profile>;
  /** update multiples rows of table: "user.profile" */
  update_user_profile_many?: Maybe<Array<Maybe<User_Profile_Mutation_Response>>>;
  /** update data of the table: "user.roles" */
  update_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** update single row of the table: "user.roles" */
  update_user_roles_by_pk?: Maybe<User_Roles>;
  /** update multiples rows of table: "user.roles" */
  update_user_roles_many?: Maybe<Array<Maybe<User_Roles_Mutation_Response>>>;
  /** update data of the table: "user.sessions" */
  update_user_sessions?: Maybe<User_Sessions_Mutation_Response>;
  /** update single row of the table: "user.sessions" */
  update_user_sessions_by_pk?: Maybe<User_Sessions>;
  /** update multiples rows of table: "user.sessions" */
  update_user_sessions_many?: Maybe<Array<Maybe<User_Sessions_Mutation_Response>>>;
  /** update data of the table: "user.users" */
  update_user_users?: Maybe<User_Users_Mutation_Response>;
  /** update single row of the table: "user.users" */
  update_user_users_by_pk?: Maybe<User_Users>;
  /** update multiples rows of table: "user.users" */
  update_user_users_many?: Maybe<Array<Maybe<User_Users_Mutation_Response>>>;
  /** update data of the table: "user.verification_tokens" */
  update_user_verification_tokens?: Maybe<User_Verification_Tokens_Mutation_Response>;
  /** update multiples rows of table: "user.verification_tokens" */
  update_user_verification_tokens_many?: Maybe<Array<Maybe<User_Verification_Tokens_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_User_AccountsArgs = {
  where: User_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Accounts_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_Map_User_RolesArgs = {
  where: User_Map_User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Map_User_Roles_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_ProfileArgs = {
  where: User_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Profile_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_RolesArgs = {
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Roles_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_SessionsArgs = {
  where: User_Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_UsersArgs = {
  where: User_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_Verification_TokensArgs = {
  where: User_Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_User_AccountsArgs = {
  objects: Array<User_Accounts_Insert_Input>;
  on_conflict?: InputMaybe<User_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Accounts_OneArgs = {
  object: User_Accounts_Insert_Input;
  on_conflict?: InputMaybe<User_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Map_User_RolesArgs = {
  objects: Array<User_Map_User_Roles_Insert_Input>;
  on_conflict?: InputMaybe<User_Map_User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Map_User_Roles_OneArgs = {
  object: User_Map_User_Roles_Insert_Input;
  on_conflict?: InputMaybe<User_Map_User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_ProfileArgs = {
  objects: Array<User_Profile_Insert_Input>;
  on_conflict?: InputMaybe<User_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Profile_OneArgs = {
  object: User_Profile_Insert_Input;
  on_conflict?: InputMaybe<User_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RolesArgs = {
  objects: Array<User_Roles_Insert_Input>;
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Roles_OneArgs = {
  object: User_Roles_Insert_Input;
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_SessionsArgs = {
  objects: Array<User_Sessions_Insert_Input>;
  on_conflict?: InputMaybe<User_Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Sessions_OneArgs = {
  object: User_Sessions_Insert_Input;
  on_conflict?: InputMaybe<User_Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_UsersArgs = {
  objects: Array<User_Users_Insert_Input>;
  on_conflict?: InputMaybe<User_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Users_OneArgs = {
  object: User_Users_Insert_Input;
  on_conflict?: InputMaybe<User_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Verification_TokensArgs = {
  objects: Array<User_Verification_Tokens_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_Verification_Tokens_OneArgs = {
  object: User_Verification_Tokens_Insert_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_AccountsArgs = {
  _inc?: InputMaybe<User_Accounts_Inc_Input>;
  _set?: InputMaybe<User_Accounts_Set_Input>;
  where: User_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Accounts_By_PkArgs = {
  _inc?: InputMaybe<User_Accounts_Inc_Input>;
  _set?: InputMaybe<User_Accounts_Set_Input>;
  pk_columns: User_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Accounts_ManyArgs = {
  updates: Array<User_Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Map_User_RolesArgs = {
  _inc?: InputMaybe<User_Map_User_Roles_Inc_Input>;
  _set?: InputMaybe<User_Map_User_Roles_Set_Input>;
  where: User_Map_User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Map_User_Roles_By_PkArgs = {
  _inc?: InputMaybe<User_Map_User_Roles_Inc_Input>;
  _set?: InputMaybe<User_Map_User_Roles_Set_Input>;
  pk_columns: User_Map_User_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Map_User_Roles_ManyArgs = {
  updates: Array<User_Map_User_Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_ProfileArgs = {
  _inc?: InputMaybe<User_Profile_Inc_Input>;
  _set?: InputMaybe<User_Profile_Set_Input>;
  where: User_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Profile_By_PkArgs = {
  _inc?: InputMaybe<User_Profile_Inc_Input>;
  _set?: InputMaybe<User_Profile_Set_Input>;
  pk_columns: User_Profile_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Profile_ManyArgs = {
  updates: Array<User_Profile_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_RolesArgs = {
  _inc?: InputMaybe<User_Roles_Inc_Input>;
  _set?: InputMaybe<User_Roles_Set_Input>;
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Roles_By_PkArgs = {
  _inc?: InputMaybe<User_Roles_Inc_Input>;
  _set?: InputMaybe<User_Roles_Set_Input>;
  pk_columns: User_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Roles_ManyArgs = {
  updates: Array<User_Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_SessionsArgs = {
  _set?: InputMaybe<User_Sessions_Set_Input>;
  where: User_Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Sessions_By_PkArgs = {
  _set?: InputMaybe<User_Sessions_Set_Input>;
  pk_columns: User_Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Sessions_ManyArgs = {
  updates: Array<User_Sessions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_UsersArgs = {
  _set?: InputMaybe<User_Users_Set_Input>;
  where: User_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Users_By_PkArgs = {
  _set?: InputMaybe<User_Users_Set_Input>;
  pk_columns: User_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Users_ManyArgs = {
  updates: Array<User_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Verification_TokensArgs = {
  _set?: InputMaybe<User_Verification_Tokens_Set_Input>;
  where: User_Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Verification_Tokens_ManyArgs = {
  updates: Array<User_Verification_Tokens_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "user.accounts" */
  user_accounts: Array<User_Accounts>;
  /** fetch aggregated fields from the table: "user.accounts" */
  user_accounts_aggregate: User_Accounts_Aggregate;
  /** fetch data from the table: "user.accounts" using primary key columns */
  user_accounts_by_pk?: Maybe<User_Accounts>;
  /** fetch data from the table: "user.map_user_roles" */
  user_map_user_roles: Array<User_Map_User_Roles>;
  /** fetch aggregated fields from the table: "user.map_user_roles" */
  user_map_user_roles_aggregate: User_Map_User_Roles_Aggregate;
  /** fetch data from the table: "user.map_user_roles" using primary key columns */
  user_map_user_roles_by_pk?: Maybe<User_Map_User_Roles>;
  /** fetch data from the table: "user.profile" */
  user_profile: Array<User_Profile>;
  /** fetch aggregated fields from the table: "user.profile" */
  user_profile_aggregate: User_Profile_Aggregate;
  /** fetch data from the table: "user.profile" using primary key columns */
  user_profile_by_pk?: Maybe<User_Profile>;
  /** fetch data from the table: "user.roles" */
  user_roles: Array<User_Roles>;
  /** fetch aggregated fields from the table: "user.roles" */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user.roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** fetch data from the table: "user.sessions" */
  user_sessions: Array<User_Sessions>;
  /** fetch aggregated fields from the table: "user.sessions" */
  user_sessions_aggregate: User_Sessions_Aggregate;
  /** fetch data from the table: "user.sessions" using primary key columns */
  user_sessions_by_pk?: Maybe<User_Sessions>;
  /** fetch data from the table: "user.users" */
  user_users: Array<User_Users>;
  /** fetch aggregated fields from the table: "user.users" */
  user_users_aggregate: User_Users_Aggregate;
  /** fetch data from the table: "user.users" using primary key columns */
  user_users_by_pk?: Maybe<User_Users>;
  /** fetch data from the table: "user.verification_tokens" */
  user_verification_tokens: Array<User_Verification_Tokens>;
  /** fetch aggregated fields from the table: "user.verification_tokens" */
  user_verification_tokens_aggregate: User_Verification_Tokens_Aggregate;
};


export type Query_RootUser_AccountsArgs = {
  distinct_on?: InputMaybe<Array<User_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Accounts_Order_By>>;
  where?: InputMaybe<User_Accounts_Bool_Exp>;
};


export type Query_RootUser_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Accounts_Order_By>>;
  where?: InputMaybe<User_Accounts_Bool_Exp>;
};


export type Query_RootUser_Accounts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_Map_User_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Map_User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Map_User_Roles_Order_By>>;
  where?: InputMaybe<User_Map_User_Roles_Bool_Exp>;
};


export type Query_RootUser_Map_User_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Map_User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Map_User_Roles_Order_By>>;
  where?: InputMaybe<User_Map_User_Roles_Bool_Exp>;
};


export type Query_RootUser_Map_User_Roles_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_ProfileArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


export type Query_RootUser_Profile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


export type Query_RootUser_Profile_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_SessionsArgs = {
  distinct_on?: InputMaybe<Array<User_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sessions_Order_By>>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};


export type Query_RootUser_Sessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sessions_Order_By>>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};


export type Query_RootUser_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_UsersArgs = {
  distinct_on?: InputMaybe<Array<User_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Users_Order_By>>;
  where?: InputMaybe<User_Users_Bool_Exp>;
};


export type Query_RootUser_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Users_Order_By>>;
  where?: InputMaybe<User_Users_Bool_Exp>;
};


export type Query_RootUser_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_Verification_TokensArgs = {
  distinct_on?: InputMaybe<Array<User_Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Verification_Tokens_Order_By>>;
  where?: InputMaybe<User_Verification_Tokens_Bool_Exp>;
};


export type Query_RootUser_Verification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Verification_Tokens_Order_By>>;
  where?: InputMaybe<User_Verification_Tokens_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "user.accounts" */
  user_accounts: Array<User_Accounts>;
  /** fetch aggregated fields from the table: "user.accounts" */
  user_accounts_aggregate: User_Accounts_Aggregate;
  /** fetch data from the table: "user.accounts" using primary key columns */
  user_accounts_by_pk?: Maybe<User_Accounts>;
  /** fetch data from the table: "user.map_user_roles" */
  user_map_user_roles: Array<User_Map_User_Roles>;
  /** fetch aggregated fields from the table: "user.map_user_roles" */
  user_map_user_roles_aggregate: User_Map_User_Roles_Aggregate;
  /** fetch data from the table: "user.map_user_roles" using primary key columns */
  user_map_user_roles_by_pk?: Maybe<User_Map_User_Roles>;
  /** fetch data from the table: "user.profile" */
  user_profile: Array<User_Profile>;
  /** fetch aggregated fields from the table: "user.profile" */
  user_profile_aggregate: User_Profile_Aggregate;
  /** fetch data from the table: "user.profile" using primary key columns */
  user_profile_by_pk?: Maybe<User_Profile>;
  /** fetch data from the table: "user.roles" */
  user_roles: Array<User_Roles>;
  /** fetch aggregated fields from the table: "user.roles" */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user.roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** fetch data from the table: "user.sessions" */
  user_sessions: Array<User_Sessions>;
  /** fetch aggregated fields from the table: "user.sessions" */
  user_sessions_aggregate: User_Sessions_Aggregate;
  /** fetch data from the table: "user.sessions" using primary key columns */
  user_sessions_by_pk?: Maybe<User_Sessions>;
  /** fetch data from the table: "user.users" */
  user_users: Array<User_Users>;
  /** fetch aggregated fields from the table: "user.users" */
  user_users_aggregate: User_Users_Aggregate;
  /** fetch data from the table: "user.users" using primary key columns */
  user_users_by_pk?: Maybe<User_Users>;
  /** fetch data from the table: "user.verification_tokens" */
  user_verification_tokens: Array<User_Verification_Tokens>;
  /** fetch aggregated fields from the table: "user.verification_tokens" */
  user_verification_tokens_aggregate: User_Verification_Tokens_Aggregate;
};


export type Subscription_RootUser_AccountsArgs = {
  distinct_on?: InputMaybe<Array<User_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Accounts_Order_By>>;
  where?: InputMaybe<User_Accounts_Bool_Exp>;
};


export type Subscription_RootUser_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Accounts_Order_By>>;
  where?: InputMaybe<User_Accounts_Bool_Exp>;
};


export type Subscription_RootUser_Accounts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_Map_User_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Map_User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Map_User_Roles_Order_By>>;
  where?: InputMaybe<User_Map_User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Map_User_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Map_User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Map_User_Roles_Order_By>>;
  where?: InputMaybe<User_Map_User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Map_User_Roles_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_ProfileArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


export type Subscription_RootUser_Profile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


export type Subscription_RootUser_Profile_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_SessionsArgs = {
  distinct_on?: InputMaybe<Array<User_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sessions_Order_By>>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};


export type Subscription_RootUser_Sessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sessions_Order_By>>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};


export type Subscription_RootUser_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_UsersArgs = {
  distinct_on?: InputMaybe<Array<User_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Users_Order_By>>;
  where?: InputMaybe<User_Users_Bool_Exp>;
};


export type Subscription_RootUser_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Users_Order_By>>;
  where?: InputMaybe<User_Users_Bool_Exp>;
};


export type Subscription_RootUser_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_Verification_TokensArgs = {
  distinct_on?: InputMaybe<Array<User_Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Verification_Tokens_Order_By>>;
  where?: InputMaybe<User_Verification_Tokens_Bool_Exp>;
};


export type Subscription_RootUser_Verification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Verification_Tokens_Order_By>>;
  where?: InputMaybe<User_Verification_Tokens_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user.accounts" */
export type User_Accounts = {
  __typename?: 'user_accounts';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['numeric']>;
  id: Scalars['Int'];
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<User_Users>;
  userId: Scalars['uuid'];
};

/** aggregated selection of "user.accounts" */
export type User_Accounts_Aggregate = {
  __typename?: 'user_accounts_aggregate';
  aggregate?: Maybe<User_Accounts_Aggregate_Fields>;
  nodes: Array<User_Accounts>;
};

/** aggregate fields of "user.accounts" */
export type User_Accounts_Aggregate_Fields = {
  __typename?: 'user_accounts_aggregate_fields';
  avg?: Maybe<User_Accounts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Accounts_Max_Fields>;
  min?: Maybe<User_Accounts_Min_Fields>;
  stddev?: Maybe<User_Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<User_Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<User_Accounts_Sum_Fields>;
  var_pop?: Maybe<User_Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<User_Accounts_Var_Samp_Fields>;
  variance?: Maybe<User_Accounts_Variance_Fields>;
};


/** aggregate fields of "user.accounts" */
export type User_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user.accounts" */
export type User_Accounts_Aggregate_Order_By = {
  avg?: InputMaybe<User_Accounts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Accounts_Max_Order_By>;
  min?: InputMaybe<User_Accounts_Min_Order_By>;
  stddev?: InputMaybe<User_Accounts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Accounts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Accounts_Sum_Order_By>;
  var_pop?: InputMaybe<User_Accounts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Accounts_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user.accounts" */
export type User_Accounts_Arr_Rel_Insert_Input = {
  data: Array<User_Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Accounts_Avg_Fields = {
  __typename?: 'user_accounts_avg_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user.accounts" */
export type User_Accounts_Avg_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user.accounts". All fields are combined with a logical 'AND'. */
export type User_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<User_Accounts_Bool_Exp>>;
  _not?: InputMaybe<User_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<User_Accounts_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  id_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token_secret?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  providerAccountId?: InputMaybe<String_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  session_state?: InputMaybe<String_Comparison_Exp>;
  token_type?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user.accounts" */
export enum User_Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey'
}

/** input type for incrementing numeric columns in table "user.accounts" */
export type User_Accounts_Inc_Input = {
  expires_at?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user.accounts" */
export type User_Accounts_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['Int']>;
  id_token?: InputMaybe<Scalars['String']>;
  oauth_token?: InputMaybe<Scalars['String']>;
  oauth_token_secret?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<User_Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Accounts_Max_Fields = {
  __typename?: 'user_accounts_max_fields';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user.accounts" */
export type User_Accounts_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Accounts_Min_Fields = {
  __typename?: 'user_accounts_min_fields';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user.accounts" */
export type User_Accounts_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user.accounts" */
export type User_Accounts_Mutation_Response = {
  __typename?: 'user_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Accounts>;
};

/** on_conflict condition type for table "user.accounts" */
export type User_Accounts_On_Conflict = {
  constraint: User_Accounts_Constraint;
  update_columns?: Array<User_Accounts_Update_Column>;
  where?: InputMaybe<User_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "user.accounts". */
export type User_Accounts_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_accounts */
export type User_Accounts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user.accounts" */
export enum User_Accounts_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  OauthToken = 'oauth_token',
  /** column name */
  OauthTokenSecret = 'oauth_token_secret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "user.accounts" */
export type User_Accounts_Set_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['Int']>;
  id_token?: InputMaybe<Scalars['String']>;
  oauth_token?: InputMaybe<Scalars['String']>;
  oauth_token_secret?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  providerAccountId?: InputMaybe<Scalars['String']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  session_state?: InputMaybe<Scalars['String']>;
  token_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Accounts_Stddev_Fields = {
  __typename?: 'user_accounts_stddev_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user.accounts" */
export type User_Accounts_Stddev_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Accounts_Stddev_Pop_Fields = {
  __typename?: 'user_accounts_stddev_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user.accounts" */
export type User_Accounts_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Accounts_Stddev_Samp_Fields = {
  __typename?: 'user_accounts_stddev_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user.accounts" */
export type User_Accounts_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Accounts_Sum_Fields = {
  __typename?: 'user_accounts_sum_fields';
  expires_at?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user.accounts" */
export type User_Accounts_Sum_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "user.accounts" */
export enum User_Accounts_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  OauthToken = 'oauth_token',
  /** column name */
  OauthTokenSecret = 'oauth_token_secret',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type User_Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Accounts_Set_Input>;
  where: User_Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Accounts_Var_Pop_Fields = {
  __typename?: 'user_accounts_var_pop_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user.accounts" */
export type User_Accounts_Var_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Accounts_Var_Samp_Fields = {
  __typename?: 'user_accounts_var_samp_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user.accounts" */
export type User_Accounts_Var_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Accounts_Variance_Fields = {
  __typename?: 'user_accounts_variance_fields';
  expires_at?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user.accounts" */
export type User_Accounts_Variance_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "user.map_user_roles" */
export type User_Map_User_Roles = {
  __typename?: 'user_map_user_roles';
  id: Scalars['Int'];
  /** An object relationship */
  role?: Maybe<User_Roles>;
  role_id: Scalars['Int'];
  userId: Scalars['uuid'];
};

/** aggregated selection of "user.map_user_roles" */
export type User_Map_User_Roles_Aggregate = {
  __typename?: 'user_map_user_roles_aggregate';
  aggregate?: Maybe<User_Map_User_Roles_Aggregate_Fields>;
  nodes: Array<User_Map_User_Roles>;
};

/** aggregate fields of "user.map_user_roles" */
export type User_Map_User_Roles_Aggregate_Fields = {
  __typename?: 'user_map_user_roles_aggregate_fields';
  avg?: Maybe<User_Map_User_Roles_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Map_User_Roles_Max_Fields>;
  min?: Maybe<User_Map_User_Roles_Min_Fields>;
  stddev?: Maybe<User_Map_User_Roles_Stddev_Fields>;
  stddev_pop?: Maybe<User_Map_User_Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Map_User_Roles_Stddev_Samp_Fields>;
  sum?: Maybe<User_Map_User_Roles_Sum_Fields>;
  var_pop?: Maybe<User_Map_User_Roles_Var_Pop_Fields>;
  var_samp?: Maybe<User_Map_User_Roles_Var_Samp_Fields>;
  variance?: Maybe<User_Map_User_Roles_Variance_Fields>;
};


/** aggregate fields of "user.map_user_roles" */
export type User_Map_User_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Map_User_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user.map_user_roles" */
export type User_Map_User_Roles_Aggregate_Order_By = {
  avg?: InputMaybe<User_Map_User_Roles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Map_User_Roles_Max_Order_By>;
  min?: InputMaybe<User_Map_User_Roles_Min_Order_By>;
  stddev?: InputMaybe<User_Map_User_Roles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Map_User_Roles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Map_User_Roles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Map_User_Roles_Sum_Order_By>;
  var_pop?: InputMaybe<User_Map_User_Roles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Map_User_Roles_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Map_User_Roles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user.map_user_roles" */
export type User_Map_User_Roles_Arr_Rel_Insert_Input = {
  data: Array<User_Map_User_Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Map_User_Roles_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Map_User_Roles_Avg_Fields = {
  __typename?: 'user_map_user_roles_avg_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user.map_user_roles" */
export type User_Map_User_Roles_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user.map_user_roles". All fields are combined with a logical 'AND'. */
export type User_Map_User_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<User_Map_User_Roles_Bool_Exp>>;
  _not?: InputMaybe<User_Map_User_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<User_Map_User_Roles_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  role?: InputMaybe<User_Roles_Bool_Exp>;
  role_id?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user.map_user_roles" */
export enum User_Map_User_Roles_Constraint {
  /** unique or primary key constraint on columns "id" */
  MapUserRolesPkey = 'map_user_roles_pkey'
}

/** input type for incrementing numeric columns in table "user.map_user_roles" */
export type User_Map_User_Roles_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  role_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user.map_user_roles" */
export type User_Map_User_Roles_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<User_Roles_Obj_Rel_Insert_Input>;
  role_id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Map_User_Roles_Max_Fields = {
  __typename?: 'user_map_user_roles_max_fields';
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user.map_user_roles" */
export type User_Map_User_Roles_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Map_User_Roles_Min_Fields = {
  __typename?: 'user_map_user_roles_min_fields';
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user.map_user_roles" */
export type User_Map_User_Roles_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user.map_user_roles" */
export type User_Map_User_Roles_Mutation_Response = {
  __typename?: 'user_map_user_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Map_User_Roles>;
};

/** on_conflict condition type for table "user.map_user_roles" */
export type User_Map_User_Roles_On_Conflict = {
  constraint: User_Map_User_Roles_Constraint;
  update_columns?: Array<User_Map_User_Roles_Update_Column>;
  where?: InputMaybe<User_Map_User_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "user.map_user_roles". */
export type User_Map_User_Roles_Order_By = {
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<User_Roles_Order_By>;
  role_id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_map_user_roles */
export type User_Map_User_Roles_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user.map_user_roles" */
export enum User_Map_User_Roles_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "user.map_user_roles" */
export type User_Map_User_Roles_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  role_id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Map_User_Roles_Stddev_Fields = {
  __typename?: 'user_map_user_roles_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user.map_user_roles" */
export type User_Map_User_Roles_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Map_User_Roles_Stddev_Pop_Fields = {
  __typename?: 'user_map_user_roles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user.map_user_roles" */
export type User_Map_User_Roles_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Map_User_Roles_Stddev_Samp_Fields = {
  __typename?: 'user_map_user_roles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user.map_user_roles" */
export type User_Map_User_Roles_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Map_User_Roles_Sum_Fields = {
  __typename?: 'user_map_user_roles_sum_fields';
  id?: Maybe<Scalars['Int']>;
  role_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user.map_user_roles" */
export type User_Map_User_Roles_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** update columns of table "user.map_user_roles" */
export enum User_Map_User_Roles_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserId = 'userId'
}

export type User_Map_User_Roles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Map_User_Roles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Map_User_Roles_Set_Input>;
  where: User_Map_User_Roles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Map_User_Roles_Var_Pop_Fields = {
  __typename?: 'user_map_user_roles_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user.map_user_roles" */
export type User_Map_User_Roles_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Map_User_Roles_Var_Samp_Fields = {
  __typename?: 'user_map_user_roles_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user.map_user_roles" */
export type User_Map_User_Roles_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Map_User_Roles_Variance_Fields = {
  __typename?: 'user_map_user_roles_variance_fields';
  id?: Maybe<Scalars['Float']>;
  role_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user.map_user_roles" */
export type User_Map_User_Roles_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "user.profile" */
export type User_Profile = {
  __typename?: 'user_profile';
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastname?: Maybe<Scalars['String']>;
  mobile_number?: Maybe<Scalars['numeric']>;
  userId: Scalars['uuid'];
};

/** aggregated selection of "user.profile" */
export type User_Profile_Aggregate = {
  __typename?: 'user_profile_aggregate';
  aggregate?: Maybe<User_Profile_Aggregate_Fields>;
  nodes: Array<User_Profile>;
};

/** aggregate fields of "user.profile" */
export type User_Profile_Aggregate_Fields = {
  __typename?: 'user_profile_aggregate_fields';
  avg?: Maybe<User_Profile_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Profile_Max_Fields>;
  min?: Maybe<User_Profile_Min_Fields>;
  stddev?: Maybe<User_Profile_Stddev_Fields>;
  stddev_pop?: Maybe<User_Profile_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Profile_Stddev_Samp_Fields>;
  sum?: Maybe<User_Profile_Sum_Fields>;
  var_pop?: Maybe<User_Profile_Var_Pop_Fields>;
  var_samp?: Maybe<User_Profile_Var_Samp_Fields>;
  variance?: Maybe<User_Profile_Variance_Fields>;
};


/** aggregate fields of "user.profile" */
export type User_Profile_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Profile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Profile_Avg_Fields = {
  __typename?: 'user_profile_avg_fields';
  id?: Maybe<Scalars['Float']>;
  mobile_number?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user.profile". All fields are combined with a logical 'AND'. */
export type User_Profile_Bool_Exp = {
  _and?: InputMaybe<Array<User_Profile_Bool_Exp>>;
  _not?: InputMaybe<User_Profile_Bool_Exp>;
  _or?: InputMaybe<Array<User_Profile_Bool_Exp>>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  mobile_number?: InputMaybe<Numeric_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user.profile" */
export enum User_Profile_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProfilePkey = 'profile_pkey'
}

/** input type for incrementing numeric columns in table "user.profile" */
export type User_Profile_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  mobile_number?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "user.profile" */
export type User_Profile_Insert_Input = {
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastname?: InputMaybe<Scalars['String']>;
  mobile_number?: InputMaybe<Scalars['numeric']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Profile_Max_Fields = {
  __typename?: 'user_profile_max_fields';
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['String']>;
  mobile_number?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Profile_Min_Fields = {
  __typename?: 'user_profile_min_fields';
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastname?: Maybe<Scalars['String']>;
  mobile_number?: Maybe<Scalars['numeric']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user.profile" */
export type User_Profile_Mutation_Response = {
  __typename?: 'user_profile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Profile>;
};

/** input type for inserting object relation for remote table "user.profile" */
export type User_Profile_Obj_Rel_Insert_Input = {
  data: User_Profile_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Profile_On_Conflict>;
};

/** on_conflict condition type for table "user.profile" */
export type User_Profile_On_Conflict = {
  constraint: User_Profile_Constraint;
  update_columns?: Array<User_Profile_Update_Column>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};

/** Ordering options when selecting data from "user.profile". */
export type User_Profile_Order_By = {
  firstname?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  mobile_number?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_profile */
export type User_Profile_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user.profile" */
export enum User_Profile_Select_Column {
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  MobileNumber = 'mobile_number',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "user.profile" */
export type User_Profile_Set_Input = {
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastname?: InputMaybe<Scalars['String']>;
  mobile_number?: InputMaybe<Scalars['numeric']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Profile_Stddev_Fields = {
  __typename?: 'user_profile_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  mobile_number?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Profile_Stddev_Pop_Fields = {
  __typename?: 'user_profile_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  mobile_number?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Profile_Stddev_Samp_Fields = {
  __typename?: 'user_profile_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  mobile_number?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Profile_Sum_Fields = {
  __typename?: 'user_profile_sum_fields';
  id?: Maybe<Scalars['Int']>;
  mobile_number?: Maybe<Scalars['numeric']>;
};

/** update columns of table "user.profile" */
export enum User_Profile_Update_Column {
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Id = 'id',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  MobileNumber = 'mobile_number',
  /** column name */
  UserId = 'userId'
}

export type User_Profile_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Profile_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Profile_Set_Input>;
  where: User_Profile_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Profile_Var_Pop_Fields = {
  __typename?: 'user_profile_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  mobile_number?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Profile_Var_Samp_Fields = {
  __typename?: 'user_profile_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  mobile_number?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Profile_Variance_Fields = {
  __typename?: 'user_profile_variance_fields';
  id?: Maybe<Scalars['Float']>;
  mobile_number?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "user.roles" */
export type User_Roles = {
  __typename?: 'user_roles';
  id: Scalars['Int'];
  role_name: Scalars['String'];
  role_priority: Scalars['Int'];
};

/** aggregated selection of "user.roles" */
export type User_Roles_Aggregate = {
  __typename?: 'user_roles_aggregate';
  aggregate?: Maybe<User_Roles_Aggregate_Fields>;
  nodes: Array<User_Roles>;
};

/** aggregate fields of "user.roles" */
export type User_Roles_Aggregate_Fields = {
  __typename?: 'user_roles_aggregate_fields';
  avg?: Maybe<User_Roles_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Roles_Max_Fields>;
  min?: Maybe<User_Roles_Min_Fields>;
  stddev?: Maybe<User_Roles_Stddev_Fields>;
  stddev_pop?: Maybe<User_Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Roles_Stddev_Samp_Fields>;
  sum?: Maybe<User_Roles_Sum_Fields>;
  var_pop?: Maybe<User_Roles_Var_Pop_Fields>;
  var_samp?: Maybe<User_Roles_Var_Samp_Fields>;
  variance?: Maybe<User_Roles_Variance_Fields>;
};


/** aggregate fields of "user.roles" */
export type User_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Roles_Avg_Fields = {
  __typename?: 'user_roles_avg_fields';
  id?: Maybe<Scalars['Float']>;
  role_priority?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user.roles". All fields are combined with a logical 'AND'. */
export type User_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<User_Roles_Bool_Exp>>;
  _not?: InputMaybe<User_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<User_Roles_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  role_name?: InputMaybe<String_Comparison_Exp>;
  role_priority?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user.roles" */
export enum User_Roles_Constraint {
  /** unique or primary key constraint on columns "id" */
  RolesPkey = 'roles_pkey'
}

/** input type for incrementing numeric columns in table "user.roles" */
export type User_Roles_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  role_priority?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user.roles" */
export type User_Roles_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  role_name?: InputMaybe<Scalars['String']>;
  role_priority?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type User_Roles_Max_Fields = {
  __typename?: 'user_roles_max_fields';
  id?: Maybe<Scalars['Int']>;
  role_name?: Maybe<Scalars['String']>;
  role_priority?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type User_Roles_Min_Fields = {
  __typename?: 'user_roles_min_fields';
  id?: Maybe<Scalars['Int']>;
  role_name?: Maybe<Scalars['String']>;
  role_priority?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "user.roles" */
export type User_Roles_Mutation_Response = {
  __typename?: 'user_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Roles>;
};

/** input type for inserting object relation for remote table "user.roles" */
export type User_Roles_Obj_Rel_Insert_Input = {
  data: User_Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};

/** on_conflict condition type for table "user.roles" */
export type User_Roles_On_Conflict = {
  constraint: User_Roles_Constraint;
  update_columns?: Array<User_Roles_Update_Column>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "user.roles". */
export type User_Roles_Order_By = {
  id?: InputMaybe<Order_By>;
  role_name?: InputMaybe<Order_By>;
  role_priority?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_roles */
export type User_Roles_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user.roles" */
export enum User_Roles_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoleName = 'role_name',
  /** column name */
  RolePriority = 'role_priority'
}

/** input type for updating data in table "user.roles" */
export type User_Roles_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  role_name?: InputMaybe<Scalars['String']>;
  role_priority?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type User_Roles_Stddev_Fields = {
  __typename?: 'user_roles_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  role_priority?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Roles_Stddev_Pop_Fields = {
  __typename?: 'user_roles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  role_priority?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Roles_Stddev_Samp_Fields = {
  __typename?: 'user_roles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  role_priority?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Roles_Sum_Fields = {
  __typename?: 'user_roles_sum_fields';
  id?: Maybe<Scalars['Int']>;
  role_priority?: Maybe<Scalars['Int']>;
};

/** update columns of table "user.roles" */
export enum User_Roles_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoleName = 'role_name',
  /** column name */
  RolePriority = 'role_priority'
}

export type User_Roles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Roles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Roles_Set_Input>;
  where: User_Roles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Roles_Var_Pop_Fields = {
  __typename?: 'user_roles_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  role_priority?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Roles_Var_Samp_Fields = {
  __typename?: 'user_roles_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  role_priority?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Roles_Variance_Fields = {
  __typename?: 'user_roles_variance_fields';
  id?: Maybe<Scalars['Float']>;
  role_priority?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "user.sessions" */
export type User_Sessions = {
  __typename?: 'user_sessions';
  expires: Scalars['timestamptz'];
  id: Scalars['uuid'];
  sessionToken: Scalars['String'];
  /** An object relationship */
  user?: Maybe<User_Users>;
  userId: Scalars['uuid'];
};

/** aggregated selection of "user.sessions" */
export type User_Sessions_Aggregate = {
  __typename?: 'user_sessions_aggregate';
  aggregate?: Maybe<User_Sessions_Aggregate_Fields>;
  nodes: Array<User_Sessions>;
};

/** aggregate fields of "user.sessions" */
export type User_Sessions_Aggregate_Fields = {
  __typename?: 'user_sessions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Sessions_Max_Fields>;
  min?: Maybe<User_Sessions_Min_Fields>;
};


/** aggregate fields of "user.sessions" */
export type User_Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user.sessions" */
export type User_Sessions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Sessions_Max_Order_By>;
  min?: InputMaybe<User_Sessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user.sessions" */
export type User_Sessions_Arr_Rel_Insert_Input = {
  data: Array<User_Sessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Sessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user.sessions". All fields are combined with a logical 'AND'. */
export type User_Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<User_Sessions_Bool_Exp>>;
  _not?: InputMaybe<User_Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<User_Sessions_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  sessionToken?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user.sessions" */
export enum User_Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionPkey = 'session_pkey'
}

/** input type for inserting data into table "user.sessions" */
export type User_Sessions_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<User_Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Sessions_Max_Fields = {
  __typename?: 'user_sessions_max_fields';
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user.sessions" */
export type User_Sessions_Max_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Sessions_Min_Fields = {
  __typename?: 'user_sessions_min_fields';
  expires?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user.sessions" */
export type User_Sessions_Min_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user.sessions" */
export type User_Sessions_Mutation_Response = {
  __typename?: 'user_sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Sessions>;
};

/** on_conflict condition type for table "user.sessions" */
export type User_Sessions_On_Conflict = {
  constraint: User_Sessions_Constraint;
  update_columns?: Array<User_Sessions_Update_Column>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "user.sessions". */
export type User_Sessions_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_sessions */
export type User_Sessions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user.sessions" */
export enum User_Sessions_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "user.sessions" */
export type User_Sessions_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  sessionToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user.sessions" */
export enum User_Sessions_Update_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

export type User_Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Sessions_Set_Input>;
  where: User_Sessions_Bool_Exp;
};

/** columns and relationships of "user.users" */
export type User_Users = {
  __typename?: 'user_users';
  /** An array relationship */
  accounts: Array<User_Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: User_Accounts_Aggregate;
  email: Scalars['String'];
  emailVerified: Scalars['timestamptz'];
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  profile?: Maybe<User_Profile>;
  /** An array relationship */
  roles: Array<User_Map_User_Roles>;
  /** An aggregate relationship */
  roles_aggregate: User_Map_User_Roles_Aggregate;
  /** An array relationship */
  sessions: Array<User_Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: User_Sessions_Aggregate;
};


/** columns and relationships of "user.users" */
export type User_UsersAccountsArgs = {
  distinct_on?: InputMaybe<Array<User_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Accounts_Order_By>>;
  where?: InputMaybe<User_Accounts_Bool_Exp>;
};


/** columns and relationships of "user.users" */
export type User_UsersAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Accounts_Order_By>>;
  where?: InputMaybe<User_Accounts_Bool_Exp>;
};


/** columns and relationships of "user.users" */
export type User_UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<User_Map_User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Map_User_Roles_Order_By>>;
  where?: InputMaybe<User_Map_User_Roles_Bool_Exp>;
};


/** columns and relationships of "user.users" */
export type User_UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Map_User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Map_User_Roles_Order_By>>;
  where?: InputMaybe<User_Map_User_Roles_Bool_Exp>;
};


/** columns and relationships of "user.users" */
export type User_UsersSessionsArgs = {
  distinct_on?: InputMaybe<Array<User_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sessions_Order_By>>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};


/** columns and relationships of "user.users" */
export type User_UsersSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sessions_Order_By>>;
  where?: InputMaybe<User_Sessions_Bool_Exp>;
};

/** aggregated selection of "user.users" */
export type User_Users_Aggregate = {
  __typename?: 'user_users_aggregate';
  aggregate?: Maybe<User_Users_Aggregate_Fields>;
  nodes: Array<User_Users>;
};

/** aggregate fields of "user.users" */
export type User_Users_Aggregate_Fields = {
  __typename?: 'user_users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Users_Max_Fields>;
  min?: Maybe<User_Users_Min_Fields>;
};


/** aggregate fields of "user.users" */
export type User_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user.users". All fields are combined with a logical 'AND'. */
export type User_Users_Bool_Exp = {
  _and?: InputMaybe<Array<User_Users_Bool_Exp>>;
  _not?: InputMaybe<User_Users_Bool_Exp>;
  _or?: InputMaybe<Array<User_Users_Bool_Exp>>;
  accounts?: InputMaybe<User_Accounts_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  profile?: InputMaybe<User_Profile_Bool_Exp>;
  roles?: InputMaybe<User_Map_User_Roles_Bool_Exp>;
  sessions?: InputMaybe<User_Sessions_Bool_Exp>;
};

/** unique or primary key constraints on table "user.users" */
export enum User_Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "user.users" */
export type User_Users_Insert_Input = {
  accounts?: InputMaybe<User_Accounts_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<User_Profile_Obj_Rel_Insert_Input>;
  roles?: InputMaybe<User_Map_User_Roles_Arr_Rel_Insert_Input>;
  sessions?: InputMaybe<User_Sessions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Users_Max_Fields = {
  __typename?: 'user_users_max_fields';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Users_Min_Fields = {
  __typename?: 'user_users_min_fields';
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user.users" */
export type User_Users_Mutation_Response = {
  __typename?: 'user_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Users>;
};

/** input type for inserting object relation for remote table "user.users" */
export type User_Users_Obj_Rel_Insert_Input = {
  data: User_Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Users_On_Conflict>;
};

/** on_conflict condition type for table "user.users" */
export type User_Users_On_Conflict = {
  constraint: User_Users_Constraint;
  update_columns?: Array<User_Users_Update_Column>;
  where?: InputMaybe<User_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "user.users". */
export type User_Users_Order_By = {
  accounts_aggregate?: InputMaybe<User_Accounts_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  profile?: InputMaybe<User_Profile_Order_By>;
  roles_aggregate?: InputMaybe<User_Map_User_Roles_Aggregate_Order_By>;
  sessions_aggregate?: InputMaybe<User_Sessions_Aggregate_Order_By>;
};

/** primary key columns input for table: user_users */
export type User_Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user.users" */
export enum User_Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "user.users" */
export type User_Users_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user.users" */
export enum User_Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name'
}

export type User_Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Users_Set_Input>;
  where: User_Users_Bool_Exp;
};

/** columns and relationships of "user.verification_tokens" */
export type User_Verification_Tokens = {
  __typename?: 'user_verification_tokens';
  expires: Scalars['timestamptz'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

/** aggregated selection of "user.verification_tokens" */
export type User_Verification_Tokens_Aggregate = {
  __typename?: 'user_verification_tokens_aggregate';
  aggregate?: Maybe<User_Verification_Tokens_Aggregate_Fields>;
  nodes: Array<User_Verification_Tokens>;
};

/** aggregate fields of "user.verification_tokens" */
export type User_Verification_Tokens_Aggregate_Fields = {
  __typename?: 'user_verification_tokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Verification_Tokens_Max_Fields>;
  min?: Maybe<User_Verification_Tokens_Min_Fields>;
};


/** aggregate fields of "user.verification_tokens" */
export type User_Verification_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Verification_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user.verification_tokens". All fields are combined with a logical 'AND'. */
export type User_Verification_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<User_Verification_Tokens_Bool_Exp>>;
  _not?: InputMaybe<User_Verification_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<User_Verification_Tokens_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  identifier?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "user.verification_tokens" */
export type User_Verification_Tokens_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Verification_Tokens_Max_Fields = {
  __typename?: 'user_verification_tokens_max_fields';
  expires?: Maybe<Scalars['timestamptz']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Verification_Tokens_Min_Fields = {
  __typename?: 'user_verification_tokens_min_fields';
  expires?: Maybe<Scalars['timestamptz']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user.verification_tokens" */
export type User_Verification_Tokens_Mutation_Response = {
  __typename?: 'user_verification_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Verification_Tokens>;
};

/** Ordering options when selecting data from "user.verification_tokens". */
export type User_Verification_Tokens_Order_By = {
  expires?: InputMaybe<Order_By>;
  identifier?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** select columns of table "user.verification_tokens" */
export enum User_Verification_Tokens_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token'
}

/** input type for updating data in table "user.verification_tokens" */
export type User_Verification_Tokens_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']>;
  identifier?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type User_Verification_Tokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Verification_Tokens_Set_Input>;
  where: User_Verification_Tokens_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type Account_FreagmentFragment = { __typename?: 'user_accounts', id: number, access_token?: string | null, id_token?: string | null, refresh_token?: string | null, oauth_token?: string | null, oauth_token_secret?: string | null, provider?: string | null, providerAccountId?: string | null, scope?: string | null, session_state?: string | null, token_type?: string | null, type?: string | null, expires_at?: any | null, userId: any, key: number };

export type Session_FreagmentFragment = { __typename?: 'user_sessions', id: any, sessionToken: string, expires: any, userId: any, key: any };

export type Profile_FreagmentFragment = { __typename?: 'user_profile', id: number, firstname?: string | null, lastname?: string | null, mobile_number?: any | null, userId: any, key: number };

export type Role_FreagmentFragment = { __typename?: 'user_roles', id: number, role_name: string, role_priority: number, key: number };

export type User_FreagmentFragment = { __typename?: 'user_users', id: any, email: string, emailVerified: any, name?: string | null, image?: string | null, key: any, roles: Array<{ __typename?: 'user_map_user_roles', role?: { __typename?: 'user_roles', id: number, role_name: string, role_priority: number, key: number } | null }>, profile?: { __typename?: 'user_profile', id: number, firstname?: string | null, lastname?: string | null, mobile_number?: any | null, userId: any, key: number } | null, accounts: Array<{ __typename?: 'user_accounts', id: number, access_token?: string | null, id_token?: string | null, refresh_token?: string | null, oauth_token?: string | null, oauth_token_secret?: string | null, provider?: string | null, providerAccountId?: string | null, scope?: string | null, session_state?: string | null, token_type?: string | null, type?: string | null, expires_at?: any | null, userId: any, key: number }>, sessions: Array<{ __typename?: 'user_sessions', id: any, sessionToken: string, expires: any, userId: any, key: any }> };

export type Create_UserMutationVariables = Exact<{
  user: User_Users_Insert_Input;
}>;


export type Create_UserMutation = { __typename?: 'mutation_root', insert_user_users_one?: { __typename?: 'user_users', id: any, email: string, emailVerified: any, name?: string | null, image?: string | null, key: any, roles: Array<{ __typename?: 'user_map_user_roles', role?: { __typename?: 'user_roles', id: number, role_name: string, role_priority: number, key: number } | null }>, profile?: { __typename?: 'user_profile', id: number, firstname?: string | null, lastname?: string | null, mobile_number?: any | null, userId: any, key: number } | null, accounts: Array<{ __typename?: 'user_accounts', id: number, access_token?: string | null, id_token?: string | null, refresh_token?: string | null, oauth_token?: string | null, oauth_token_secret?: string | null, provider?: string | null, providerAccountId?: string | null, scope?: string | null, session_state?: string | null, token_type?: string | null, type?: string | null, expires_at?: any | null, userId: any, key: number }>, sessions: Array<{ __typename?: 'user_sessions', id: any, sessionToken: string, expires: any, userId: any, key: any }> } | null };

export type Update_UsersMutationVariables = Exact<{
  where: User_Users_Bool_Exp;
  set?: InputMaybe<User_Users_Set_Input>;
}>;


export type Update_UsersMutation = { __typename?: 'mutation_root', update_user_users?: { __typename?: 'user_users_mutation_response', returning: Array<{ __typename?: 'user_users', id: any, email: string, emailVerified: any, name?: string | null, image?: string | null, key: any, roles: Array<{ __typename?: 'user_map_user_roles', role?: { __typename?: 'user_roles', id: number, role_name: string, role_priority: number, key: number } | null }>, profile?: { __typename?: 'user_profile', id: number, firstname?: string | null, lastname?: string | null, mobile_number?: any | null, userId: any, key: number } | null, accounts: Array<{ __typename?: 'user_accounts', id: number, access_token?: string | null, id_token?: string | null, refresh_token?: string | null, oauth_token?: string | null, oauth_token_secret?: string | null, provider?: string | null, providerAccountId?: string | null, scope?: string | null, session_state?: string | null, token_type?: string | null, type?: string | null, expires_at?: any | null, userId: any, key: number }>, sessions: Array<{ __typename?: 'user_sessions', id: any, sessionToken: string, expires: any, userId: any, key: any }> }> } | null };

export type Insert_AccountMutationVariables = Exact<{
  data: User_Accounts_Insert_Input;
}>;


export type Insert_AccountMutation = { __typename?: 'mutation_root', insert_user_accounts_one?: { __typename?: 'user_accounts', id: number, access_token?: string | null, id_token?: string | null, refresh_token?: string | null, oauth_token?: string | null, oauth_token_secret?: string | null, provider?: string | null, providerAccountId?: string | null, scope?: string | null, session_state?: string | null, token_type?: string | null, type?: string | null, expires_at?: any | null, userId: any, key: number } | null };

export type Delete_AccountsMutationVariables = Exact<{
  where: User_Accounts_Bool_Exp;
}>;


export type Delete_AccountsMutation = { __typename?: 'mutation_root', delete_user_accounts?: { __typename?: 'user_accounts_mutation_response', returning: Array<{ __typename?: 'user_accounts', id: number, access_token?: string | null, id_token?: string | null, refresh_token?: string | null, oauth_token?: string | null, oauth_token_secret?: string | null, provider?: string | null, providerAccountId?: string | null, scope?: string | null, session_state?: string | null, token_type?: string | null, type?: string | null, expires_at?: any | null, userId: any, key: number }> } | null };

export type Create_SessionMutationVariables = Exact<{
  data: User_Sessions_Insert_Input;
}>;


export type Create_SessionMutation = { __typename?: 'mutation_root', insert_user_sessions_one?: { __typename?: 'user_sessions', id: any, sessionToken: string, expires: any, userId: any, key: any, user?: { __typename?: 'user_users', id: any, email: string, emailVerified: any, name?: string | null, image?: string | null, key: any, roles: Array<{ __typename?: 'user_map_user_roles', role?: { __typename?: 'user_roles', id: number, role_name: string, role_priority: number, key: number } | null }>, profile?: { __typename?: 'user_profile', id: number, firstname?: string | null, lastname?: string | null, mobile_number?: any | null, userId: any, key: number } | null, accounts: Array<{ __typename?: 'user_accounts', id: number, access_token?: string | null, id_token?: string | null, refresh_token?: string | null, oauth_token?: string | null, oauth_token_secret?: string | null, provider?: string | null, providerAccountId?: string | null, scope?: string | null, session_state?: string | null, token_type?: string | null, type?: string | null, expires_at?: any | null, userId: any, key: number }>, sessions: Array<{ __typename?: 'user_sessions', id: any, sessionToken: string, expires: any, userId: any, key: any }> } | null } | null };

export type Delete_SessionMutationVariables = Exact<{
  sessionToken?: InputMaybe<Scalars['String']>;
}>;


export type Delete_SessionMutation = { __typename?: 'mutation_root', delete_user_sessions?: { __typename?: 'user_sessions_mutation_response', returning: Array<{ __typename?: 'user_sessions', id: any, sessionToken: string, expires: any, userId: any, key: any }> } | null };

export type Update_SessionMutationVariables = Exact<{
  sessionToken?: InputMaybe<Scalars['String']>;
  set: User_Sessions_Set_Input;
}>;


export type Update_SessionMutation = { __typename?: 'mutation_root', update_user_sessions?: { __typename?: 'user_sessions_mutation_response', returning: Array<{ __typename?: 'user_sessions', id: any, sessionToken: string, expires: any, userId: any, key: any }> } | null };

export type Create_Verification_TokenMutationVariables = Exact<{
  data: Array<User_Verification_Tokens_Insert_Input> | User_Verification_Tokens_Insert_Input;
}>;


export type Create_Verification_TokenMutation = { __typename?: 'mutation_root', insert_user_verification_tokens?: { __typename?: 'user_verification_tokens_mutation_response', returning: Array<{ __typename?: 'user_verification_tokens', expires: any, identifier: string, token: string }> } | null };

export type Delete_Verification_TokenMutationVariables = Exact<{
  identifier: Scalars['String'];
  token: Scalars['String'];
}>;


export type Delete_Verification_TokenMutation = { __typename?: 'mutation_root', delete_user_verification_tokens?: { __typename?: 'user_verification_tokens_mutation_response', returning: Array<{ __typename?: 'user_verification_tokens', expires: any, identifier: string, token: string }> } | null };

export type Get_UsersQueryVariables = Exact<{
  where?: InputMaybe<User_Users_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type Get_UsersQuery = { __typename?: 'query_root', user_users: Array<{ __typename?: 'user_users', id: any, email: string, emailVerified: any, name?: string | null, image?: string | null, key: any, roles: Array<{ __typename?: 'user_map_user_roles', role?: { __typename?: 'user_roles', id: number, role_name: string, role_priority: number, key: number } | null }>, profile?: { __typename?: 'user_profile', id: number, firstname?: string | null, lastname?: string | null, mobile_number?: any | null, userId: any, key: number } | null, accounts: Array<{ __typename?: 'user_accounts', id: number, access_token?: string | null, id_token?: string | null, refresh_token?: string | null, oauth_token?: string | null, oauth_token_secret?: string | null, provider?: string | null, providerAccountId?: string | null, scope?: string | null, session_state?: string | null, token_type?: string | null, type?: string | null, expires_at?: any | null, userId: any, key: number }>, sessions: Array<{ __typename?: 'user_sessions', id: any, sessionToken: string, expires: any, userId: any, key: any }> }> };

export type Get_Session_UserQueryVariables = Exact<{
  sessionToken?: InputMaybe<Scalars['String']>;
}>;


export type Get_Session_UserQuery = { __typename?: 'query_root', user_sessions: Array<{ __typename?: 'user_sessions', id: any, sessionToken: string, expires: any, userId: any, key: any, user?: { __typename?: 'user_users', id: any, email: string, emailVerified: any, name?: string | null, image?: string | null, key: any, roles: Array<{ __typename?: 'user_map_user_roles', role?: { __typename?: 'user_roles', id: number, role_name: string, role_priority: number, key: number } | null }>, profile?: { __typename?: 'user_profile', id: number, firstname?: string | null, lastname?: string | null, mobile_number?: any | null, userId: any, key: number } | null, accounts: Array<{ __typename?: 'user_accounts', id: number, access_token?: string | null, id_token?: string | null, refresh_token?: string | null, oauth_token?: string | null, oauth_token_secret?: string | null, provider?: string | null, providerAccountId?: string | null, scope?: string | null, session_state?: string | null, token_type?: string | null, type?: string | null, expires_at?: any | null, userId: any, key: number }>, sessions: Array<{ __typename?: 'user_sessions', id: any, sessionToken: string, expires: any, userId: any, key: any }> } | null }> };

export type Get_User_RolesQueryVariables = Exact<{
  where?: InputMaybe<User_Roles_Bool_Exp>;
}>;


export type Get_User_RolesQuery = { __typename?: 'query_root', user_roles: Array<{ __typename?: 'user_roles', id: number, role_name: string, role_priority: number }> };

export type Get_User_ProfileQueryVariables = Exact<{
  where?: InputMaybe<User_Profile_Bool_Exp>;
}>;


export type Get_User_ProfileQuery = { __typename?: 'query_root', user_profile: Array<{ __typename?: 'user_profile', id: number, firstname?: string | null, lastname?: string | null, mobile_number?: any | null }> };

export const Role_FreagmentFragmentDoc = gql`
    fragment role_freagment on user_roles {
  key: id
  id
  role_name
  role_priority
}
    `;
export const Profile_FreagmentFragmentDoc = gql`
    fragment profile_freagment on user_profile {
  key: id
  id
  firstname
  lastname
  mobile_number
  userId
}
    `;
export const Account_FreagmentFragmentDoc = gql`
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
export const Session_FreagmentFragmentDoc = gql`
    fragment session_freagment on user_sessions {
  key: id
  id
  sessionToken
  expires
  userId
}
    `;
export const User_FreagmentFragmentDoc = gql`
    fragment user_freagment on user_users {
  key: id
  id
  email
  emailVerified
  name
  image
  roles(order_by: {role: {role_priority: asc}}) {
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
    ${Role_FreagmentFragmentDoc}
${Profile_FreagmentFragmentDoc}
${Account_FreagmentFragmentDoc}
${Session_FreagmentFragmentDoc}`;
export const Create_UserDocument = gql`
    mutation CREATE_USER($user: user_users_insert_input!) {
  insert_user_users_one(object: $user) {
    ...user_freagment
  }
}
    ${User_FreagmentFragmentDoc}`;
export type Create_UserMutationFn = Apollo.MutationFunction<Create_UserMutation, Create_UserMutationVariables>;

/**
 * __useCreate_UserMutation__
 *
 * To run a mutation, you first call `useCreate_UserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_UserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreate_UserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreate_UserMutation(baseOptions?: Apollo.MutationHookOptions<Create_UserMutation, Create_UserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_UserMutation, Create_UserMutationVariables>(Create_UserDocument, options);
      }
export type Create_UserMutationHookResult = ReturnType<typeof useCreate_UserMutation>;
export type Create_UserMutationResult = Apollo.MutationResult<Create_UserMutation>;
export type Create_UserMutationOptions = Apollo.BaseMutationOptions<Create_UserMutation, Create_UserMutationVariables>;
export const Update_UsersDocument = gql`
    mutation UPDATE_USERS($where: user_users_bool_exp!, $set: user_users_set_input) {
  update_user_users(where: $where, _set: $set) {
    returning {
      ...user_freagment
    }
  }
}
    ${User_FreagmentFragmentDoc}`;
export type Update_UsersMutationFn = Apollo.MutationFunction<Update_UsersMutation, Update_UsersMutationVariables>;

/**
 * __useUpdate_UsersMutation__
 *
 * To run a mutation, you first call `useUpdate_UsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_UsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUsersMutation, { data, loading, error }] = useUpdate_UsersMutation({
 *   variables: {
 *      where: // value for 'where'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdate_UsersMutation(baseOptions?: Apollo.MutationHookOptions<Update_UsersMutation, Update_UsersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Update_UsersMutation, Update_UsersMutationVariables>(Update_UsersDocument, options);
      }
export type Update_UsersMutationHookResult = ReturnType<typeof useUpdate_UsersMutation>;
export type Update_UsersMutationResult = Apollo.MutationResult<Update_UsersMutation>;
export type Update_UsersMutationOptions = Apollo.BaseMutationOptions<Update_UsersMutation, Update_UsersMutationVariables>;
export const Insert_AccountDocument = gql`
    mutation INSERT_ACCOUNT($data: user_accounts_insert_input!) {
  insert_user_accounts_one(object: $data) {
    ...account_freagment
  }
}
    ${Account_FreagmentFragmentDoc}`;
export type Insert_AccountMutationFn = Apollo.MutationFunction<Insert_AccountMutation, Insert_AccountMutationVariables>;

/**
 * __useInsert_AccountMutation__
 *
 * To run a mutation, you first call `useInsert_AccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsert_AccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertAccountMutation, { data, loading, error }] = useInsert_AccountMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useInsert_AccountMutation(baseOptions?: Apollo.MutationHookOptions<Insert_AccountMutation, Insert_AccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Insert_AccountMutation, Insert_AccountMutationVariables>(Insert_AccountDocument, options);
      }
export type Insert_AccountMutationHookResult = ReturnType<typeof useInsert_AccountMutation>;
export type Insert_AccountMutationResult = Apollo.MutationResult<Insert_AccountMutation>;
export type Insert_AccountMutationOptions = Apollo.BaseMutationOptions<Insert_AccountMutation, Insert_AccountMutationVariables>;
export const Delete_AccountsDocument = gql`
    mutation DELETE_ACCOUNTS($where: user_accounts_bool_exp!) {
  delete_user_accounts(where: $where) {
    returning {
      ...account_freagment
    }
  }
}
    ${Account_FreagmentFragmentDoc}`;
export type Delete_AccountsMutationFn = Apollo.MutationFunction<Delete_AccountsMutation, Delete_AccountsMutationVariables>;

/**
 * __useDelete_AccountsMutation__
 *
 * To run a mutation, you first call `useDelete_AccountsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_AccountsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccountsMutation, { data, loading, error }] = useDelete_AccountsMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDelete_AccountsMutation(baseOptions?: Apollo.MutationHookOptions<Delete_AccountsMutation, Delete_AccountsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Delete_AccountsMutation, Delete_AccountsMutationVariables>(Delete_AccountsDocument, options);
      }
export type Delete_AccountsMutationHookResult = ReturnType<typeof useDelete_AccountsMutation>;
export type Delete_AccountsMutationResult = Apollo.MutationResult<Delete_AccountsMutation>;
export type Delete_AccountsMutationOptions = Apollo.BaseMutationOptions<Delete_AccountsMutation, Delete_AccountsMutationVariables>;
export const Create_SessionDocument = gql`
    mutation CREATE_SESSION($data: user_sessions_insert_input!) {
  insert_user_sessions_one(object: $data) {
    ...session_freagment
    user {
      ...user_freagment
    }
  }
}
    ${Session_FreagmentFragmentDoc}
${User_FreagmentFragmentDoc}`;
export type Create_SessionMutationFn = Apollo.MutationFunction<Create_SessionMutation, Create_SessionMutationVariables>;

/**
 * __useCreate_SessionMutation__
 *
 * To run a mutation, you first call `useCreate_SessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_SessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSessionMutation, { data, loading, error }] = useCreate_SessionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreate_SessionMutation(baseOptions?: Apollo.MutationHookOptions<Create_SessionMutation, Create_SessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_SessionMutation, Create_SessionMutationVariables>(Create_SessionDocument, options);
      }
export type Create_SessionMutationHookResult = ReturnType<typeof useCreate_SessionMutation>;
export type Create_SessionMutationResult = Apollo.MutationResult<Create_SessionMutation>;
export type Create_SessionMutationOptions = Apollo.BaseMutationOptions<Create_SessionMutation, Create_SessionMutationVariables>;
export const Delete_SessionDocument = gql`
    mutation DELETE_SESSION($sessionToken: String) {
  delete_user_sessions(where: {sessionToken: {_eq: $sessionToken}}) {
    returning {
      ...session_freagment
    }
  }
}
    ${Session_FreagmentFragmentDoc}`;
export type Delete_SessionMutationFn = Apollo.MutationFunction<Delete_SessionMutation, Delete_SessionMutationVariables>;

/**
 * __useDelete_SessionMutation__
 *
 * To run a mutation, you first call `useDelete_SessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_SessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSessionMutation, { data, loading, error }] = useDelete_SessionMutation({
 *   variables: {
 *      sessionToken: // value for 'sessionToken'
 *   },
 * });
 */
export function useDelete_SessionMutation(baseOptions?: Apollo.MutationHookOptions<Delete_SessionMutation, Delete_SessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Delete_SessionMutation, Delete_SessionMutationVariables>(Delete_SessionDocument, options);
      }
export type Delete_SessionMutationHookResult = ReturnType<typeof useDelete_SessionMutation>;
export type Delete_SessionMutationResult = Apollo.MutationResult<Delete_SessionMutation>;
export type Delete_SessionMutationOptions = Apollo.BaseMutationOptions<Delete_SessionMutation, Delete_SessionMutationVariables>;
export const Update_SessionDocument = gql`
    mutation UPDATE_SESSION($sessionToken: String, $set: user_sessions_set_input!) {
  update_user_sessions(where: {sessionToken: {_eq: $sessionToken}}, _set: $set) {
    returning {
      ...session_freagment
    }
  }
}
    ${Session_FreagmentFragmentDoc}`;
export type Update_SessionMutationFn = Apollo.MutationFunction<Update_SessionMutation, Update_SessionMutationVariables>;

/**
 * __useUpdate_SessionMutation__
 *
 * To run a mutation, you first call `useUpdate_SessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_SessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSessionMutation, { data, loading, error }] = useUpdate_SessionMutation({
 *   variables: {
 *      sessionToken: // value for 'sessionToken'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdate_SessionMutation(baseOptions?: Apollo.MutationHookOptions<Update_SessionMutation, Update_SessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Update_SessionMutation, Update_SessionMutationVariables>(Update_SessionDocument, options);
      }
export type Update_SessionMutationHookResult = ReturnType<typeof useUpdate_SessionMutation>;
export type Update_SessionMutationResult = Apollo.MutationResult<Update_SessionMutation>;
export type Update_SessionMutationOptions = Apollo.BaseMutationOptions<Update_SessionMutation, Update_SessionMutationVariables>;
export const Create_Verification_TokenDocument = gql`
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
export type Create_Verification_TokenMutationFn = Apollo.MutationFunction<Create_Verification_TokenMutation, Create_Verification_TokenMutationVariables>;

/**
 * __useCreate_Verification_TokenMutation__
 *
 * To run a mutation, you first call `useCreate_Verification_TokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_Verification_TokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVerificationTokenMutation, { data, loading, error }] = useCreate_Verification_TokenMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreate_Verification_TokenMutation(baseOptions?: Apollo.MutationHookOptions<Create_Verification_TokenMutation, Create_Verification_TokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_Verification_TokenMutation, Create_Verification_TokenMutationVariables>(Create_Verification_TokenDocument, options);
      }
export type Create_Verification_TokenMutationHookResult = ReturnType<typeof useCreate_Verification_TokenMutation>;
export type Create_Verification_TokenMutationResult = Apollo.MutationResult<Create_Verification_TokenMutation>;
export type Create_Verification_TokenMutationOptions = Apollo.BaseMutationOptions<Create_Verification_TokenMutation, Create_Verification_TokenMutationVariables>;
export const Delete_Verification_TokenDocument = gql`
    mutation DELETE_VERIFICATION_TOKEN($identifier: String!, $token: String!) {
  delete_user_verification_tokens(
    where: {token: {_eq: $token}, identifier: {_eq: $identifier}}
  ) {
    returning {
      expires
      identifier
      token
    }
  }
}
    `;
export type Delete_Verification_TokenMutationFn = Apollo.MutationFunction<Delete_Verification_TokenMutation, Delete_Verification_TokenMutationVariables>;

/**
 * __useDelete_Verification_TokenMutation__
 *
 * To run a mutation, you first call `useDelete_Verification_TokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelete_Verification_TokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVerificationTokenMutation, { data, loading, error }] = useDelete_Verification_TokenMutation({
 *   variables: {
 *      identifier: // value for 'identifier'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useDelete_Verification_TokenMutation(baseOptions?: Apollo.MutationHookOptions<Delete_Verification_TokenMutation, Delete_Verification_TokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Delete_Verification_TokenMutation, Delete_Verification_TokenMutationVariables>(Delete_Verification_TokenDocument, options);
      }
export type Delete_Verification_TokenMutationHookResult = ReturnType<typeof useDelete_Verification_TokenMutation>;
export type Delete_Verification_TokenMutationResult = Apollo.MutationResult<Delete_Verification_TokenMutation>;
export type Delete_Verification_TokenMutationOptions = Apollo.BaseMutationOptions<Delete_Verification_TokenMutation, Delete_Verification_TokenMutationVariables>;
export const Get_UsersDocument = gql`
    query GET_USERS($where: user_users_bool_exp, $limit: Int, $offset: Int) {
  user_users(where: $where, limit: $limit, offset: $offset, order_by: {id: desc}) {
    ...user_freagment
  }
}
    ${User_FreagmentFragmentDoc}`;

/**
 * __useGet_UsersQuery__
 *
 * To run a query within a React component, call `useGet_UsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_UsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_UsersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGet_UsersQuery(baseOptions?: Apollo.QueryHookOptions<Get_UsersQuery, Get_UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_UsersQuery, Get_UsersQueryVariables>(Get_UsersDocument, options);
      }
export function useGet_UsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_UsersQuery, Get_UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_UsersQuery, Get_UsersQueryVariables>(Get_UsersDocument, options);
        }
export type Get_UsersQueryHookResult = ReturnType<typeof useGet_UsersQuery>;
export type Get_UsersLazyQueryHookResult = ReturnType<typeof useGet_UsersLazyQuery>;
export type Get_UsersQueryResult = Apollo.QueryResult<Get_UsersQuery, Get_UsersQueryVariables>;
export const Get_Session_UserDocument = gql`
    query GET_SESSION_USER($sessionToken: String) {
  user_sessions(where: {sessionToken: {_eq: $sessionToken}}) {
    ...session_freagment
    user {
      ...user_freagment
    }
  }
}
    ${Session_FreagmentFragmentDoc}
${User_FreagmentFragmentDoc}`;

/**
 * __useGet_Session_UserQuery__
 *
 * To run a query within a React component, call `useGet_Session_UserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_Session_UserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_Session_UserQuery({
 *   variables: {
 *      sessionToken: // value for 'sessionToken'
 *   },
 * });
 */
export function useGet_Session_UserQuery(baseOptions?: Apollo.QueryHookOptions<Get_Session_UserQuery, Get_Session_UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_Session_UserQuery, Get_Session_UserQueryVariables>(Get_Session_UserDocument, options);
      }
export function useGet_Session_UserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_Session_UserQuery, Get_Session_UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_Session_UserQuery, Get_Session_UserQueryVariables>(Get_Session_UserDocument, options);
        }
export type Get_Session_UserQueryHookResult = ReturnType<typeof useGet_Session_UserQuery>;
export type Get_Session_UserLazyQueryHookResult = ReturnType<typeof useGet_Session_UserLazyQuery>;
export type Get_Session_UserQueryResult = Apollo.QueryResult<Get_Session_UserQuery, Get_Session_UserQueryVariables>;
export const Get_User_RolesDocument = gql`
    query GET_USER_ROLES($where: user_roles_bool_exp) {
  user_roles(where: $where) {
    id
    role_name
    role_priority
  }
}
    `;

/**
 * __useGet_User_RolesQuery__
 *
 * To run a query within a React component, call `useGet_User_RolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_User_RolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_User_RolesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGet_User_RolesQuery(baseOptions?: Apollo.QueryHookOptions<Get_User_RolesQuery, Get_User_RolesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_User_RolesQuery, Get_User_RolesQueryVariables>(Get_User_RolesDocument, options);
      }
export function useGet_User_RolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_User_RolesQuery, Get_User_RolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_User_RolesQuery, Get_User_RolesQueryVariables>(Get_User_RolesDocument, options);
        }
export type Get_User_RolesQueryHookResult = ReturnType<typeof useGet_User_RolesQuery>;
export type Get_User_RolesLazyQueryHookResult = ReturnType<typeof useGet_User_RolesLazyQuery>;
export type Get_User_RolesQueryResult = Apollo.QueryResult<Get_User_RolesQuery, Get_User_RolesQueryVariables>;
export const Get_User_ProfileDocument = gql`
    query GET_USER_PROFILE($where: user_profile_bool_exp) {
  user_profile(where: $where) {
    id
    firstname
    lastname
    mobile_number
  }
}
    `;

/**
 * __useGet_User_ProfileQuery__
 *
 * To run a query within a React component, call `useGet_User_ProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_User_ProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_User_ProfileQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGet_User_ProfileQuery(baseOptions?: Apollo.QueryHookOptions<Get_User_ProfileQuery, Get_User_ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_User_ProfileQuery, Get_User_ProfileQueryVariables>(Get_User_ProfileDocument, options);
      }
export function useGet_User_ProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_User_ProfileQuery, Get_User_ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_User_ProfileQuery, Get_User_ProfileQueryVariables>(Get_User_ProfileDocument, options);
        }
export type Get_User_ProfileQueryHookResult = ReturnType<typeof useGet_User_ProfileQuery>;
export type Get_User_ProfileLazyQueryHookResult = ReturnType<typeof useGet_User_ProfileLazyQuery>;
export type Get_User_ProfileQueryResult = Apollo.QueryResult<Get_User_ProfileQuery, Get_User_ProfileQueryVariables>;