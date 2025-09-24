import { motion } from 'framer-motion'
import { FiMessageCircle } from 'react-icons/fi'
import { useLanguage } from './LanguageContext'

export default function FloatingChatButton() {
  const { t } = useLanguage()

  const handleClick = () => {
    // Smooth scroll to the quote form
    const quoteSection = document.getElementById('quote')
    if (quoteSection) {
      quoteSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center text-secondary shadow-primary hover:shadow-primary-lg transition-all duration-300 cursor-pointer group border border-primary/40"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.6 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      title={t.floatingChat.tooltip}
    >
      <FiMessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-primary/25 animate-ping"></div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-dark-card/95 text-text-primary text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm border border-dark-border/70">
        {t.floatingChat.tooltip}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark-card/95"></div>
      </div>
    </motion.button>
  )
}
