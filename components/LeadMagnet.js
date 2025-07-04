import { motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from './LanguageContext'
import { FiDownload, FiCheckCircle, FiArrowRight, FiX } from 'react-icons/fi'

export default function LeadMagnet({ type = "checklist", isModal = false, onClose }) {
  const { language } = useLanguage()
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const leadMagnets = {
    checklist: {
      title: "Free Website Checklist: 25 Must-Have Features for Global Businesses",
      titleEs: "Lista Gratuita: 25 Características Esenciales para Sitios Web de Negocios Globales",
      description: "Download our comprehensive checklist used by 500+ successful businesses worldwide to ensure their websites convert visitors into customers.",
      descriptionEs: "Descarga nuestra lista completa usada por 500+ negocios exitosos mundialmente para asegurar que sus sitios web conviertan visitantes en clientes.",
      benefits: [
        "25-point website optimization checklist",
        "Bilingual content strategy guide", 
        "Mobile optimization requirements",
        "Multilingual SEO optimization guide",
        "Conversion optimization tips"
      ],
      benefitsEs: [
        "Lista de 25 puntos para optimización web",
        "Guía de estrategia de contenido bilingüe",
        "Requisitos de optimización móvil", 
        "Guía de optimización SEO multilingüe",
        "Tips de optimización de conversiones"
      ]
    },
    audit: {
      title: "Free Website Audit: Discover What's Costing You Customers",
      titleEs: "Auditoría Gratuita: Descubre Qué Te Está Costando Clientes",
      description: "Get a professional analysis of your website's performance and receive a custom action plan to increase conversions by 300%.",
      descriptionEs: "Obtén un análisis profesional del rendimiento de tu sitio web y recibe un plan de acción personalizado para aumentar conversiones 300%.",
      benefits: [
        "Complete website performance analysis",
        "Mobile optimization assessment",
        "SEO audit and recommendations",
        "Conversion rate analysis",
        "Custom improvement roadmap"
      ],
      benefitsEs: [
        "Análisis completo de rendimiento web",
        "Evaluación de optimización móvil",
        "Auditoría SEO y recomendaciones",
        "Análisis de tasa de conversión",
        "Hoja de ruta de mejoras personalizada"
      ]
    },
    guide: {
      title: "The Complete Guide to Bilingual Websites for Global Markets",
      titleEs: "La Guía Completa para Sitios Web Bilingües para Mercados Globales",
      description: "Learn how bilingual websites generate 300% more leads and capture both English and Spanish-speaking markets worldwide.",
      descriptionEs: "Aprende cómo los sitios web bilingües generan 300% más leads y capturan tanto mercados de habla inglesa como española mundialmente.",
      benefits: [
        "Bilingual website strategy framework",
        "Cultural adaptation guidelines",
        "Technical implementation guide",
        "ROI calculation templates",
        "Case studies from successful businesses"
      ],
      benefitsEs: [
        "Marco de estrategia web bilingüe",
        "Guías de adaptación cultural",
        "Guía de implementación técnica",
        "Plantillas de cálculo ROI",
        "Casos de estudio de negocios exitosos"
      ]
    }
  }

  const currentMagnet = leadMagnets[type]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would integrate with your email service
    console.log('Email submitted:', email)
    setIsSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail('')
      if (onClose) onClose()
    }, 3000)
  }

  const content = (
    <motion.div
      className={`${isModal ? 'max-w-lg mx-auto' : 'max-w-2xl mx-auto'} relative`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="glass-effect rounded-2xl p-8 border border-primary/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
        
        {/* Close button for modal */}
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <FiX size={24} />
          </button>
        )}

        <div className="relative z-10">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <FiDownload className="text-white text-2xl" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 gradient-text">
            {language === 'es' ? currentMagnet.titleEs : currentMagnet.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-center mb-6 leading-relaxed">
            {language === 'es' ? currentMagnet.descriptionEs : currentMagnet.description}
          </p>

          {/* Benefits */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4 text-center">
              {language === 'es' ? 'Lo que obtienes:' : 'What you get:'}
            </h4>
            <ul className="space-y-3">
              {(language === 'es' ? currentMagnet.benefitsEs : currentMagnet.benefits).map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FiCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form or Success State */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === 'es' ? 'Tu email profesional' : 'Your business email'}
                  required
                  className="w-full px-4 py-3 bg-dark-bg/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-primary transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {language === 'es' ? 'Descargar Gratis Ahora' : 'Download Free Now'}
                <FiArrowRight />
              </motion.button>
              <p className="text-xs text-gray-400 text-center">
                {language === 'es' 
                  ? 'No spam. Solo contenido valioso para hacer crecer tu negocio.'
                  : 'No spam. Only valuable content to grow your business.'
                }
              </p>
            </form>
          ) : (
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheckCircle className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                {language === 'es' ? '¡Enviado a tu email!' : 'Sent to your email!'}
              </h4>
              <p className="text-gray-300">
                {language === 'es' 
                  ? 'Revisa tu bandeja de entrada (y spam) para tu descarga gratuita.'
                  : 'Check your inbox (and spam) for your free download.'
                }
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
        {content}
      </div>
    )
  }

  return (
    <section className="py-16 px-6">
      {content}
    </section>
  )
}
