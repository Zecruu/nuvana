import { motion } from 'framer-motion'
import { useLanguage } from './LanguageContext'
import { FiArrowDown } from 'react-icons/fi'

export default function Hero() {
  const { t } = useLanguage()



  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full elegant-grid opacity-10"></div>
      </div>

      {/* Floating Icons */}


      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto">


        {/* Main Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-cyber font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="text-white">
            {t.hero.headline}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {t.hero.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a
            href="#quote"
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg shadow-primary hover:shadow-primary-lg transition-all text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.cta}
          </motion.a>
          <motion.a
            href="#portfolio"
            className="px-8 py-4 border-2 border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Work
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-text-secondary">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-text-secondary">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-text-secondary">Support Available</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FiArrowDown className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
