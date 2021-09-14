import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

import messages_de from './i18n/de'
import messages_en from './i18n/en'
import messages_hu from './i18n/hu'
import messages_ro from './i18n/ro'

const messages = {
    en: messages_en.lang,
    ro: messages_ro.lang,
    de: messages_de.lang,
    hu: messages_hu.lang
};

const DEFAULT_LOCALE = 'en';

const i18n = createI18n({
    locale: DEFAULT_LOCALE, // set locale
    fallbackLocale: DEFAULT_LOCALE, // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
});


createApp(App).use(i18n).mount('#app')

export default i18n;