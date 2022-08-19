module.exports = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT + '/v1/graphql']: {
        headers: {
          'x-hasura-admin-secret': process.env.NEXT_PUBLIC_GRAPHQL_SECRET,
        },
      },
    },
  ],
  documents: ['./src/**/*.tsx', './src/**/*.ts'],
  overwrite: true,
  generates: {
    './src/gql/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './src/gql/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};
