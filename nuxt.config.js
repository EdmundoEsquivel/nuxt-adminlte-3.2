const pkg = require('./package')


module.exports = {
  // mode: 'universal',
  telemetry: false,
  components: true,
  jquery: true,
  
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
  
 
    bodyAttrs: {
      class: ['hold-transition', 'dark-mode', 'sidebar-mini', 'layout-fixed', 'layout-navbar-fixed', 'layout-footer-fixed', 'text-sm']
       
    }

  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // 'admin-lte/plugins/fontawesome-free/css/all.min.css',
    // 'admin-lte/dist/css/adminlte.css',
  ],

 

  

  
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    // 'bootstrap-vue/nuxt',
    
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    axios: {
      proxy: true
    },
  proxy: {
      "/api": "https://127.0.0.1:3000"
    },
  },

  
  /*
  ** Build configuration
  */

  
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
