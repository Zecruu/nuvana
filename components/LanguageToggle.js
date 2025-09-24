import { useLanguage } from './LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  
  return (
    <div className="relative inline-flex bg-secondary-light rounded-full p-1 border border-dark-border/70 w-20 overflow-hidden shadow-inner">
      {/* Background slider */}
      <div 
        className={`absolute top-1 bottom-1 w-9 bg-gradient-to-r from-primary-dark to-primary rounded-full transition-transform duration-300 ease-in-out ${
          lang === 'es' ? 'translate-x-0' : 'translate-x-9'
        }`}
      />
      
      {/* ES Button */}
      <button
        onClick={() => setLang('es')}
        className={`relative z-10 w-9 py-1 text-sm font-medium rounded-full transition-colors duration-300 ${
          lang === 'es' 
            ? 'text-accent-light' 
            : 'text-text-secondary hover:text-text-accent'
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
            ? 'text-accent-light' 
            : 'text-text-secondary hover:text-text-accent'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  )
}
