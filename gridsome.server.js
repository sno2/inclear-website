// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

let data = require('./src/assets/data/data.json')

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    data['products'].forEach(product => {
      createPage({
        path: data.productRoute + product.slug + '/',
        component: './src/templates/Product.vue',
        context: {
          product
        }
      })
    })
  })
}
