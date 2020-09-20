module.exports = {
  client: {
      excludes: ['src/gql/generated/**/*'],
      includes: ['src/gql/queries/**/*.{graphql,js,ts,jsx,tsx}'],
    service: {
      name: 'my-graphql-app',
      url: 'schema.graphql',
    },
  },
}
