import { useLanguage } from './LanguageContext'
import { motion } from 'framer-motion'
import { FaLaptopCode, FaSearch, FaServer, FaLanguage } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'

const icons = [FaLaptopCode, FaSearch, FaServer, FaLanguage]

export default function Services() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 gradient-text">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t.services.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group relative"
                whileHover={{ y: -8 }}
              >
                <div className="glass-effect rounded-2xl p-8 h-full border border-white/10 hover:border-neon/30 transition-all duration-300 relative overflow-hidden">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                  {/* Icon Container */}
                  <motion.div
                    className="relative z-10 mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-primary transition-all duration-300">
                      <Icon className="text-primary text-2xl" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-bold text-xl mb-3 text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    {/* Learn More Link */}
                    <motion.div
                      className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      Learn More
                      <FiArrowRight className="ml-2 text-xs" />
                    </motion.div>
                  </div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 shimmer-effect rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-400 mb-6">Need a custom solution? We've got you covered.</p>
          <motion.a
            href="#quote"
            className="inline-block px-8 py-4 border-2 border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all"
            whileHover={{ scale: 1.05, borderColor: 'rgba(99, 102, 241, 0.8)' }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
