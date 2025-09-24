import { useLanguage } from './LanguageContext'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

export default function WhyChooseUs() {
  const { t } = useLanguage()
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-secondary/70">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/18 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/12 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 elegant-grid opacity-5"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-cyber font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {t.whyChooseUs.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {t.whyChooseUs.reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              className="rounded-2xl p-6 border border-dark-border/60 bg-dark-card/90 backdrop-blur hover:border-primary/45 transition-all duration-300 shadow-elegant hover:shadow-primary"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/25 flex items-center justify-center">
                  <FaCheckCircle className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-accent mb-2">{reason.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}