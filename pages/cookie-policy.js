import SEOHead from '../components/SEOHead'
import { useLanguage } from '../components/LanguageContext'

export default function CookiePolicy() {
  const { lang } = useLanguage()

  const t = {
    en: {
      title: 'Cookie Policy',
      intro:
        "We use cookies and similar technologies to run this website and help us improve your experience. You can manage your preferences at any time.",
      categoriesTitle: 'Cookie categories we use',
      categories: [
        {
          name: 'Necessary',
          desc:
            'Required for the site to function (e.g., security, network management). These cannot be disabled.'
        },
        {
          name: 'Analytics',
          desc:
            'Help us understand how visitors interact with the site so we can improve usability and content.'
        },
        {
          name: 'Marketing',
          desc:
            'Used to deliver and measure relevant ads. Disabled by default until you grant consent.'
        },
        {
          name: 'Functional',
          desc:
            'Remember your preferences, such as language and UI customizations.'
        }
      ],
      manageText: 'Manage cookie preferences',
      updated: 'Last updated:'
    },
    es: {
      title: 'Política de Cookies',
      intro:
        'Utilizamos cookies y tecnologías similares para operar este sitio web y mejorar su experiencia. Puede gestionar sus preferencias en cualquier momento.',
      categoriesTitle: 'Categorías de cookies que usamos',
      categories: [
        {
          name: 'Necesarias',
          desc:
            'Requeridas para que el sitio funcione (por ejemplo, seguridad y gestión de red). No se pueden desactivar.'
        },
        {
          name: 'Analíticas',
          desc:
            'Nos ayudan a comprender cómo los visitantes interactúan con el sitio para mejorar la usabilidad y el contenido.'
        },
        {
          name: 'Marketing',
          desc:
            'Se utilizan para ofrecer y medir anuncios relevantes. Desactivadas por defecto hasta que otorgue su consentimiento.'
        },
        {
          name: 'Funcionales',
          desc:
            'Recuerdan sus preferencias, como idioma y personalizaciones de interfaz.'
        }
      ],
      manageText: 'Gestionar preferencias de cookies',
      updated: 'Última actualización:'
    }
  }[lang || 'en']

  const updatedDate = '2025-09-24'

  return (
    <>
      <SEOHead title={`${t.title} | Nuvana`} canonical="https://nuvana.com/cookie-policy" />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-cyber font-bold mb-6 gradient-text">{t.title}</h1>
        <p className="text-gray-300 mb-10 leading-relaxed">{t.intro}</p>

        <h2 className="text-2xl font-semibold text-white mb-4">{t.categoriesTitle}</h2>
        <div className="space-y-4 mb-10">
          {t.categories.map((c) => (
            <div key={c.name} className="p-4 rounded-xl bg-dark-card border border-dark-border/70">
              <h3 className="text-lg font-medium text-white">{c.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{c.desc}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => window?.NuvanaCookie?.open?.()}
          className="px-5 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg transition-all"
        >
          {t.manageText}
        </button>

        <p className="text-gray-500 text-xs mt-8">{t.updated} {updatedDate}</p>
      </main>
    </>
  )
}

