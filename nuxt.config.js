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
    modules: [
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
                vuetify()
            ))
        }
    ],
    css: [
        'vuetify/lib/styles/main.sass',
        '@fortawesome/fontawesome-svg-core/styles.css',
        '@/assets/css/stylesheet.scss'
    ],
    build: {
        transpile: ['vuetify']
    },
    vite: {
        define: {
            'process.env.DEBUG': false
        }
    }
})
