import { useLanguage } from './LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  
  return (
    <div className="relative inline-flex bg-gray-800 rounded-full p-1 border border-gray-600 w-20 overflow-hidden">
      {/* Background slider */}
      <div 
        className={`absolute top-1 bottom-1 w-9 bg-gradient-to-r from-primary to-secondary rounded-full transition-transform duration-300 ease-in-out ${
          lang === 'es' ? 'translate-x-0' : 'translate-x-9'
        }`}
      />
      
      {/* ES Button */}
      <button
        onClick={() => setLang('es')}
        className={`relative z-10 w-9 py-1 text-sm font-medium rounded-full transition-colors duration-300 ${
          lang === 'es' 
            ? 'text-white' 
            : 'text-gray-400 hover:text-gray-200'
        }`}
        aria-label="Switch to Spanish"
      >
        ES
      </button>
      
      {/* EN Button */}
      <button
        onClick={() => setLang('en')}
        className={`relative z-10 w-9 py-1 text-sm font-medium rounded-full transition-colors duration-300 ${
          lang === 'en' 
            ? 'text-white' 
            : 'text-gray-400 hover:text-gray-200'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  )
}
