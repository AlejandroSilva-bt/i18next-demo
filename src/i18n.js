import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import langDetector from "i18next-browser-languagedetector"
import XHR from 'i18next-xhr-backend'

i18n
  .use(langDetector)
  .use(XHR)
  .use(initReactI18next)
  .init({
    debug: true,
    // lng: 'en',
    fallbackLng: 'en',
    backend: {
      loadPath: (lng, ns) => {
        console.log(lng, ns)
        return `./lang/${lng}.${ns}.json`
      },
    },
    detection: {
      order: ['querystring', 'navigator', 'htmlTag', 'path', 'subdomain'],
    },

    // preload: ['en'],

    // call endpoint on missing
    // saveMissing: true,
  })

export default i18n
