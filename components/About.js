import { useLanguage } from './LanguageContext'
import { motion } from 'framer-motion'

export default function About() {
  const { t } = useLanguage()
  return (
    <motion.section
      className="max-w-2xl mx-auto py-16 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-neon">{t.about.title}</h2>
      <p className="text-lg text-gray-300">{t.about.text}</p>
    </motion.section>
  )
}
