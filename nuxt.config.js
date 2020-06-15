module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '千峰智慧',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '千峰智慧网课平台' },
      { hid: 'keywords', name: 'keywords', content: '学习、教育、千峰、千锋' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'assets/main.css'
  ],
  plugins: [
    {
      src: 'plugins/elementui.js',
      ssr: true
    }
  ],
  modules: [
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true,
    prefix: '/proxy/',
    credentials: true
  },
  proxy: {
    '/proxy/': {
      target: 'http://localhost:8080',
      pathRewrite: {
        changeOrigin: true,
        '^/proxy/': ''
      }
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#F56C6C' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
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

