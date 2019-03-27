'use strict'

module.exports = {
  mode: 'spa',
  srcDir: 'src',
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' }
    ],
    script: [
      { crossorigin: 'anonymous', href: 'https://polyfill.io/v3/polyfill.min.js' }
    ]
  },
  modules: [
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    materialIcons: true,
    css: true,
    treeShake: true
  }
}
