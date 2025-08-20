import { useLanguage } from './LanguageContext'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  const { t } = useLanguage()


  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-dark-bg to-dark-card border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img src="/images/Nuvana Logo.jpg" alt="Nuvana Logo" className="h-10 w-10 mr-3 rounded-lg" />
              <span className="text-2xl font-cyber font-bold gradient-text">{t.footer.company}</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Creating stunning, bilingual websites that drive results for businesses across Puerto Rico and beyond.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <FiMapPin className="text-primary" />
                <span className="text-gray-400">{t.footer.address}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <FiMail className="text-primary" />
                <a href="mailto:nurvanatec@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                  {t.footer.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="#about" className="block text-gray-400 hover:text-primary transition-colors">About Us</a>
              <a href="#portfolio" className="block text-gray-400 hover:text-primary transition-colors">Our Work</a>
              <a href="#quote" className="block text-gray-400 hover:text-primary transition-colors">Get Quote</a>
              <a href="#" className="block text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Nuvana. All rights reserved. Made with ❤️ in Puerto Rico.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
