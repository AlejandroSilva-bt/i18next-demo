# i18next

## features:
- varios formatos: fluent, ICU, polyglot

- lazy loading de json (no hay que hacer nada)
- fallback automatico a otro lang (no existe el archivo, o no existe el texto)
- preload de json mas utilizados

- deteccion de idioma por: 'querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'
- se puede forzar el idioma desde rails con htmlTag

- Namespaces** = separar una traduccion larga en multiples archivos
- los namespaces pueden ser cargados on demand (y no cargar los innecesarios)

- "extraction tool", para escanear codigo y buscar strings sin traduccion

- ToDo: llamar a endpoint cuando una traduccion no se encuentra



## how to
yarn add i18next react-i18next i18next-xhr-backend i18next-browser-languagedetector

## docs
https://github.com/i18next/i18next-xhr-backend
https://github.com/i18next/i18next-browser-languageDetector
