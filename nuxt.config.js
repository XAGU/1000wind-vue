module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: '基于SpringCloud的在线教育平台',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '在线教育平台'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '学习、教育、mooc'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'assets/main.css'
  ],
  plugins: [{
      src: 'plugins/elementui.js',
      ssr: true
    },
    "@/plugins/api"
  ],
  modules: [
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  router: {
    middleware: ['auth']
  }, 
  auth: {
    redirect: {
      login: '/userLogin',
      logout: '/userLogin',
      home: '/studentIndex'
    },
    strategies: {
      social: {
        scheme: 'refresh',
        endpoints: {
          login: {
            url: '/oauth2-service/oauth/token',
            method: 'post'
          },
          refresh: {
            url: '/oauth2-service/oauth/refresh',
            method: 'post'
          },
          user: {
            url: '/user-service/api/user/myself',
            method: 'get'
          },
          logout: {
            url: '/api/auth/logout',
            method: 'post'
          }
        },
        token: {
          property: 'access_token',
          type: 'bearer',
          maxAge: 7200
        },
        user: {
          property: 'data',
          // autoFetch: true
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 72000,
          data: 'refresh_token',
          tokenRequired: true
        },
        redirectUri: '/studentIndex',
        logoutRedirectUri: '/userLogin',
        // grantType: 'password',
        // clientId: 'app-client',
        // scope: 'all',
        // autoLogout: false
      }
    }
  },
  axios: {
    proxy: true,
    prefix: '/proxy/',
    credentials: true,
    timeout: 10000
  },
  proxy: {
    '/proxy/': {
      target: 'http://localhost:7001',
      //target: 'http://rlfz.1000wind.top/',
      pathRewrite: {
        changeOrigin: true,
        '^/proxy/': ''
      }
    }
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#F56C6C'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
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
