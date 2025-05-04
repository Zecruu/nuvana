import { useLanguage } from './LanguageContext'
import { motion } from 'framer-motion'
import { FaLaptopCode, FaSearch, FaServer, FaLanguage } from 'react-icons/fa'

const icons = [FaLaptopCode, FaSearch, FaServer, FaLanguage]

export default function Services() {
  const { t } = useLanguage()
  return (
    <section className="py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-neon text-center">{t.services.title}</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {t.services.items.map((item, i) => {
          const Icon = icons[i]
          return (
            <motion.div
              key={item.title}
              className="bg-gray-900 rounded-lg p-6 flex flex-col items-center hover:shadow-neon transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
            >
              <Icon className="text-neon text-4xl mb-4" />
              <div className="font-bold text-lg mb-2">{item.title}</div>
              <div className="text-gray-300 text-center">{item.desc}</div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
