import { useLanguage } from './LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="mt-16 py-8 bg-gray-950 text-gray-400 text-center">
      <img src="/images/Nuvana Logo.jpg" alt="Nuvana Logo" className="mx-auto h-8 mb-2" />
      <div className="font-bold text-neon">{t.footer.company}</div>
      <div>{t.footer.address}</div>
      <div>
        <a href="mailto:nurvanatec@gmail.com" className="hover:text-neon">nurvanatec@gmail.com</a>
      </div>
      <div className="mt-2">&copy; {new Date().getFullYear()} Nuvana. All rights reserved.</div>
    </footer>
  )
}
