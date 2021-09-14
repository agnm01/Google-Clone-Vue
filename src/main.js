import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

const messages = {
    en: {
        images: {
            message: 'Images'
        },
        search: {
            message: 'Google Search'
        },
        lucky: {
            message: `I'm feeling lucky!`
        },
        country: {
            message: 'Romania'
        },
        about: {
            message: 'About'
        },
        advertising: {
            message: 'Advertising'
        },
        business: {
            message: 'Business'
        },
        howSearchWorks: {
            message: 'How Search Works'
        },
        privacy: {
            message: 'Privacy'
        },
        terms: {
            message: 'Terms'
        },
        settings: {
            message: 'Settings'
        },
        languageSelector: {
            message: 'Google offered in:',
            lang1: {
                name: 'Română',
                selector: 'ro'
            },
            lang2: {
                name: 'magyar',
                selector: 'hu'
            },
            lang3: {
                name: 'Deutsch',
                selector: 'de'
            }
        }
    },
    ro: {
        images: {
            message: 'Imagini'
        },
        search: {
            message: 'Căutare Google'
        },
        lucky: {
            message: 'Mă simt norocos!'
        },
        country: {
            message: 'România'
        },
        about: {
            message: 'Despre'
        },
        advertising: {
            message: 'Publicitate'
        },
        business: {
            message: 'Companii'
        },
        howSearchWorks: {
            message: 'Cum funcționează Căutarea'
        },
        privacy: {
            message: 'Confidențialitate'
        },
        terms: {
            message: 'Termeni'
        },
        settings: {
            message: 'Setări'
        },
        languageSelector: {
            message: 'Google oferit în:',
            lang1: {
                name: 'English',
                selector: 'en'
            },
            lang2: {
                name: 'magyar',
                selector: 'hu'
            },
            lang3: {
                name: 'Deutsch',
                selector: 'de'
            }
        }
    },
    de: {
        images: {
            message: 'Bilder'
        },
        search: {
            message: 'Google Suche'
        },
        lucky: {
            message: 'Auf gut Glück!'
        },
        country: {
            message: 'Rumänien'
        },
        about: {
            message: 'Über Google'
        },
        advertising: {
            message: 'Werbeprogramme'
        },
        business: {
            message: 'Unternehmen'
        },
        howSearchWorks: {
            message: 'Wie funktioniert die Google Suche?'
        },
        privacy: {
            message: 'Datenschutzerklärung'
        },
        terms: {
            message: 'Nutzungsbedingungen'
        },
        settings: {
            message: 'Einstellungen'
        },
        languageSelector: {
            message: 'Google angeboten auf:',
            lang1: {
                name: 'English',
                selector: 'en'
            },
            lang2: {
                name: 'magyar',
                selector: 'hu'
            },
            lang3: {
                name: 'Română',
                selector: 'ro'
            }
        }
    },
    hu: {
        images: {
            message: 'Képek'
        },
        search: {
            message: 'Google-keresés'
        },
        lucky: {
            message: 'Jó napom van'
        },
        country: {
            message: 'Románia'
        },
        about: {
            message: 'Névjegy'
        },
        advertising: {
            message: 'Hirdetés'
        },
        business: {
            message: 'Vállalkozás'
        },
        howSearchWorks: {
            message: 'A Keresés működése'
        },
        privacy: {
            message: 'Adatvédelem'
        },
        terms: {
            message: 'Általános Szerződési Feltételek'
        },
        settings: {
            message: 'Beállítások'
        },
        languageSelector: {
            message: 'A Google elérhető:',
            lang1: {
                name: 'English',
                selector: 'en'
            },
            lang2: {
                name: 'Română',
                selector: 'ro'
            },
            lang3: {
                name: 'Deutsch',
                selector: 'de'
            }
        }
    }
}

const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
});


createApp(App).use(i18n).mount('#app')

export default i18n;