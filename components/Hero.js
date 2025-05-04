import { motion } from 'framer-motion'
import { useLanguage } from './LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="flex flex-col items-center justify-center text-center py-24">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4 text-white"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t.hero.headline}
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-8 text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {t.hero.subheadline}
      </motion.p>
      <motion.a
        href="#quote"
        className="px-8 py-3 bg-neon text-black font-bold rounded shadow-lg hover:scale-105 transition transform"
        whileHover={{ scale: 1.08, boxShadow: '0 0 16px #39ff14' }}
      >
        {t.hero.cta}
      </motion.a>
    </section>
  )
}
