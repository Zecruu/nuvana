import { createContext, useContext, useState } from 'react'
import en from '../locales/en.json'
import es from '../locales/es.json'

const translations = { en, es }
const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = translations[lang]
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
export const useLanguage = () => useContext(LanguageContext)
