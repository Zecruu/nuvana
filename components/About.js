import { useLanguage } from './LanguageContext'
import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiTrendingUp, FiHeart } from 'react-icons/fi'

export default function About() {
  const { t } = useLanguage()

  const stats = [
    { icon: FiAward, value: '5+', label: 'Years Experience' },
    { icon: FiUsers, value: '10+', label: 'Projects Completed' },
    { icon: FiTrendingUp, value: '100%', label: 'Happy Customers' },
    { icon: FiHeart, value: '24/7', label: 'Support' },
  ]

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 text-primary text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Our Studio
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 gradient-text">
              {t.about.title}
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {t.about.text}
            </p>

            {/* Additional Features */}
            <div className="space-y-4 mb-8">
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-300">Cutting-edge technology and modern design</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="w-2 h-2 bg-neon rounded-full"></div>
                <span className="text-gray-300">Bilingual expertise for global reach</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="w-2 h-2 bg-neon rounded-full"></div>
                <span className="text-gray-300">Dedicated support and ongoing maintenance</span>
              </motion.div>
            </div>

            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-primary transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Stats Side */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-2xl p-6 text-center border border-white/10 hover:border-neon/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="text-primary text-xl" />
                </motion.div>
                <div className="text-3xl font-bold text-primary mb-2 font-cyber">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
