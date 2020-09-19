module.exports = {
  client: {
    addTypename: true,
    includes: ['src/**/*.ts', 'src/**/*.tsx'],
    name: 'dashboard',
    service: {
      url: 'https://pwa.demo.saleor.rocks/graphql/',
      name: 'saleor@demo',
    },
  },
}
