import { useState, useEffect } from 'react'
import { useLanguage } from './LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieConsent() {
  const { language, isClient } = useLanguage()
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false
  })
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
    
    if (typeof window === 'undefined') return
    
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    } else {
      try {
        const savedPreferences = JSON.parse(consent)
        setPreferences(savedPreferences)
        loadScripts(savedPreferences)
      } catch (error) {
        console.error('Error parsing cookie consent:', error)
        setShowBanner(true)
      }
    }
  }, [])

  const loadScripts = (prefs) => {
    // Load Google Analytics if analytics cookies are accepted
    if (prefs.analytics && typeof window !== 'undefined') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    }

    // Load marketing scripts if marketing cookies are accepted
    if (prefs.marketing && typeof window !== 'undefined') {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      })
    }
  }

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    setPreferences(allAccepted)
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent', JSON.stringify(allAccepted))
      localStorage.setItem('cookie-consent-date', new Date().toISOString())
    }
    loadScripts(allAccepted)
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }
    setPreferences(onlyNecessary)
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary))
      localStorage.setItem('cookie-consent-date', new Date().toISOString())
    }
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent', JSON.stringify(preferences))
      localStorage.setItem('cookie-consent-date', new Date().toISOString())
    }
    loadScripts(preferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const handlePreferenceChange = (type) => {
    if (type === 'necessary') return // Can't disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const texts = {
    en: {
      title: "We use cookies",
      description: "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking 'Accept All', you consent to our use of cookies.",
      acceptAll: "Accept All",
      rejectAll: "Reject All",
      customize: "Customize",
      savePreferences: "Save Preferences",
      necessary: "Necessary",
      analytics: "Analytics",
      marketing: "Marketing",
      functional: "Functional",
      necessaryDesc: "Essential cookies for website functionality",
      analyticsDesc: "Help us understand how visitors use our website",
      marketingDesc: "Used to deliver relevant advertisements",
      functionalDesc: "Remember your preferences and settings",
      settingsTitle: "Cookie Preferences",
      learnMore: "Learn more about our cookie policy"
    },
    es: {
      title: "Usamos cookies",
      description: "Utilizamos cookies para mejorar su experiencia de navegación, servir contenido personalizado y analizar nuestro tráfico. Al hacer clic en 'Aceptar todo', usted consiente nuestro uso de cookies.",
      acceptAll: "Aceptar todo",
      rejectAll: "Rechazar todo",
      customize: "Personalizar",
      savePreferences: "Guardar preferencias",
      necessary: "Necesarias",
      analytics: "Analíticas",
      marketing: "Marketing",
      functional: "Funcionales",
      necessaryDesc: "Cookies esenciales para la funcionalidad del sitio web",
      analyticsDesc: "Nos ayudan a entender cómo los visitantes usan nuestro sitio web",
      marketingDesc: "Se utilizan para entregar anuncios relevantes",
      functionalDesc: "Recuerdan sus preferencias y configuraciones",
      settingsTitle: "Preferencias de cookies",
      learnMore: "Más información sobre nuestra política de cookies"
    }
  }

  const t = texts[language] || texts.en

  // Don't render until hydrated to prevent SSR/client mismatch
  if (!isHydrated || !isClient) {
    return null
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 p-4 shadow-2xl"
        >
          <div className="max-w-6xl mx-auto">
            {!showSettings ? (
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{t.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{t.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    {t.rejectAll}
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    {t.customize}
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 text-sm bg-gradient-to-r from-primary to-secondary hover:shadow-lg text-white rounded-lg transition-all"
                  >
                    {t.acceptAll}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">{t.settingsTitle}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(preferences).map(([key, value]) => (
                    <div key={key} className="flex items-start space-x-3 p-3 bg-gray-800 rounded-lg">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() => handlePreferenceChange(key)}
                        disabled={key === 'necessary'}
                        className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-600 rounded"
                      />
                      <div className="flex-1">
                        <label className="text-white font-medium capitalize">{t[key]}</label>
                        <p className="text-gray-400 text-xs mt-1">{t[`${key}Desc`]}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-4 py-2 text-sm bg-gradient-to-r from-primary to-secondary hover:shadow-lg text-white rounded-lg transition-all"
                  >
                    {t.savePreferences}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
