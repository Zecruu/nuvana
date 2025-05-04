import { useLanguage } from './LanguageContext'
import { motion } from 'framer-motion'

export default function Portfolio() {
  const { t } = useLanguage()
  return (
    <section className="py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-neon text-center">{t.portfolio.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {t.portfolio.sites.map((site, i) => (
          <motion.div
            key={site.url}
            className="bg-gray-900 rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-neon transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
          >
            <div className="h-48 flex items-center justify-center mb-4">
              <img src={site.img} alt={site.name} className="rounded border-2 border-neon shadow-lg max-h-full max-w-full object-contain" />
            </div>
            <div className="text-xl font-bold mb-2">{site.name}</div>
            <div className="mb-4 text-gray-300">{site.desc}</div>
            <a href={site.url} target="_blank" rel="noopener" className="px-4 py-2 bg-neon text-black rounded font-bold hover:scale-105 transition">Visit Site</a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
