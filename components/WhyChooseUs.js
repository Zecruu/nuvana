import { useLanguage } from './LanguageContext'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

export default function WhyChooseUs() {
  const { t } = useLanguage()
  return (
    <section className="py-16 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-neon text-center">{t.whyChooseUs.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {t.whyChooseUs.reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            className="bg-gray-900 rounded-lg p-6 hover:shadow-neon transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
          >
            <div className="flex items-start">
              <FaCheckCircle className="text-neon text-xl mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">{reason.title}</h3>
                <p className="text-gray-300">{reason.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}