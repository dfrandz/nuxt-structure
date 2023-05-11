import fr from 'vuetify/src/locale/fr'
import en from 'vuetify/src/locale/fr'
export default {
  // Ajoute un titre pour votre application
  css: [
    '@/assets/css/main.css',
  ],
  head: {
    title: 'Mon application Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },

  // Configure le mode de rendu pour l'application
  ssr: true,

  // Configurer les modules Nuxt.js à utiliser
  modules: [
    '@nuxtjs/vuetify'
  ],

  buildModules: [
    ['@nuxtjs/vuetify', {
      iconfont: "mdi", // 'md' || 'mdi' || 'fa' || 'fa4'
      lang: {
        locales: { fr, en},
        current: 'fr',
      },
      theme: {
        themes:{
          light: {
            primary: '#b71c1c',
            secondary: '#b0bec5',
            dark: '#b0bec5',
            accent: '#006958',
            error: '#ff192c',
            success: '#5cb85c',
            warning:'#ff192c',
            background: '#f8f8f8'
          },
        }
      },
    }],
    
  ],
  // Configuration des plugins pour l'application
  plugins: [
    '~/plugins/vuetify.js'
  ],

  // Configuration pour les environnements de développement et de production
  env: {
  },

  // Configuration pour le rendu côté client
  build: {
    presets(env, [ preset, options ]) {
      return [
        [ "@nuxt/babel-preset-app", options ]
      ]
    }
  }
}