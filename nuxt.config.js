// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
import * as pack from './package.json'
export default defineNuxtConfig({
    publicRuntimeConfig: {
        test: 'Hello',
        applicationName: pack.name.split('-').join(' '),
        version: pack.version,
        author: pack.author
    },
    components: true,
    css: [
        'vuetify/lib/styles/main.sass',
        '@fortawesome/fontawesome-svg-core/styles.css',
        '@/assets/css/stylesheet.scss'
    ],
    build: {
        transpile: ['vuetify']
    },
    hooks: {
        'vite:extendConfig': config => {
            config.plugins.push(vuetify())
        }
    },
    modules: [
        // '@nuxtjs/axios'
    ],
    plugins: [
    ],
    vite: {
        define: {
            'process.env.DEBUG': false
        }
    },
    devServer: {
      port: 8000
    },
    server: {
        port: 8000
    }
})
