import '../styles/globals.css'
import { useEffect } from 'react'
import { LanguageProvider } from '../components/LanguageContext'
import CookieConsent from '../components/CookieConsent'
import PerformanceOptimizer from '../components/PerformanceOptimizer'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])
  return (
    <LanguageProvider>
      <Component {...pageProps} />
      <CookieConsent />
      <PerformanceOptimizer />
    </LanguageProvider>
  )
}
