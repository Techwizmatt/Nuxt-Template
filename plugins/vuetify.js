import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { aliases, fa } from 'vuetify/iconsets/fa-svg'
import { defineNuxtPlugin } from 'nuxt/app'

const darkTheme = {
    dark: true,
    colors: {
        background: '#000',
        surface: '#424242',
        primary: '#6200EE',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        logo: '#FFF'
    }
}

const lightTheme = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#03DAC6',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        logo: '#000'
    }
}

const funTheme = {
    dark: false,
    colors: {
        background: '#FFF1D6',
        surface: '#FFFFFF',
        primary: '#03DAC6',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        logo: '#0000FF',
        'on-background': '#0000FF',
    }
}
export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        customProperties: true,
        icons: {
            defaultSet: 'fa',
            aliases: {
                ...aliases,
                checkboxOff: 'square'
            },
            sets: {
                fa
            }
        },
        theme: {
            defaultTheme: 'darkTheme',
            themes: {
                darkTheme, lightTheme, funTheme
            }
        },
        defaults: {
            global: {
                ripple: true,
            },
            VCard: {
                VBtn: { variant: 'outlined' },
                VTextField: { variant: 'outlined' },
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})
