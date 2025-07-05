import { useLanguage } from './LanguageContext'
export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  return (
    <button
      className="ml-4 px-3 py-1 rounded bg-gray-800 text-neon border border-neon hover:bg-neon hover:text-black transition"
      onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
      aria-label="Switch language"
    >
      {lang === 'en' ? 'ES' : 'EN'}
    </button>
  )
}
