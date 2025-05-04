import '../styles/globals.css'
import { useEffect } from 'react'
import { LanguageProvider } from '../components/LanguageContext'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  )
}
