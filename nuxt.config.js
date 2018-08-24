module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bundle for further tests' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
   modules: [
  // provide path to the file with resources
  ['nuxt-sass-resources-loader', './assets/scss/main.scss']
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#0c82d1' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

