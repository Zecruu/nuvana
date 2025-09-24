import { createContext, useContext, useState, useEffect } from 'react'
import en from '../locales/en.json'
import es from '../locales/es.json'

const translations = { en, es }
const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Load saved language preference after hydration
    const savedLang = localStorage.getItem('language')
    if (savedLang && translations[savedLang]) {
      setLang(savedLang)
    }
  }, [])

  const updateLang = (newLang) => {
    setLang(newLang)
    if (isClient) {
      localStorage.setItem('language', newLang)
    }
  }

  const t = translations[lang]
  return (
    <LanguageContext.Provider value={{ lang, language: lang, setLang: updateLang, t, isClient }}>
      {children}
    </LanguageContext.Provider>
  )
}
export const useLanguage = () => useContext(LanguageContext)
