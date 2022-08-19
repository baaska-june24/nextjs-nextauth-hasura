SET check_function_bodies = false;
CREATE SCHEMA "user";
CREATE TABLE "user".accounts (
    id integer NOT NULL,
    "userId" uuid NOT NULL,
    type text,
    provider text,
    "providerAccountId" text,
    refresh_token text,
    access_token text,
    expires_at numeric,
    token_type text,
    scope text,
    id_token text,
    session_state text,
    oauth_token_secret text,
    oauth_token text
);
CREATE SEQUENCE "user".accounts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE "user".accounts_id_seq OWNED BY "user".accounts.id;
CREATE TABLE "user".map_user_roles (
    id integer NOT NULL,
    "userId" uuid NOT NULL,
    role_id integer NOT NULL
);
CREATE SEQUENCE "user".map_user_roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE "user".map_user_roles_id_seq OWNED BY "user".map_user_roles.id;
CREATE TABLE "user".profile (
    id integer NOT NULL,
    "userId" uuid NOT NULL,
    firstname text,
    lastname text,
    mobile_number numeric
);
CREATE SEQUENCE "user".profile_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE "user".profile_id_seq OWNED BY "user".profile.id;
CREATE TABLE "user".roles (
    id integer NOT NULL,
    role_name text NOT NULL,
    role_priority integer NOT NULL
);
CREATE SEQUENCE "user".roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE "user".roles_id_seq OWNED BY "user".roles.id;
CREATE TABLE "user".sessions (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    expires timestamp with time zone NOT NULL,
    "sessionToken" text NOT NULL,
    "userId" uuid NOT NULL
);
CREATE TABLE "user".users (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    email text NOT NULL,
    "emailVerified" timestamp with time zone NOT NULL,
    image text,
    name text
);
CREATE TABLE "user".verification_tokens (
    identifier text NOT NULL,
    token text NOT NULL,
    expires timestamp with time zone NOT NULL
);
ALTER TABLE ONLY "user".accounts ALTER COLUMN id SET DEFAULT nextval('"user".accounts_id_seq'::regclass);
ALTER TABLE ONLY "user".map_user_roles ALTER COLUMN id SET DEFAULT nextval('"user".map_user_roles_id_seq'::regclass);
ALTER TABLE ONLY "user".profile ALTER COLUMN id SET DEFAULT nextval('"user".profile_id_seq'::regclass);
ALTER TABLE ONLY "user".roles ALTER COLUMN id SET DEFAULT nextval('"user".roles_id_seq'::regclass);
ALTER TABLE ONLY "user".accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
ALTER TABLE ONLY "user".map_user_roles
    ADD CONSTRAINT map_user_roles_pkey PRIMARY KEY (id);
ALTER TABLE ONLY "user".profile
    ADD CONSTRAINT profile_pkey PRIMARY KEY (id);
ALTER TABLE ONLY "user".roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
ALTER TABLE ONLY "user".sessions
    ADD CONSTRAINT session_pkey PRIMARY KEY (id);
ALTER TABLE ONLY "user".users
    ADD CONSTRAINT users_email_key UNIQUE (email);
ALTER TABLE ONLY "user".users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
