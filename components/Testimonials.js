import { useLanguage } from './LanguageContext'
import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

export default function Testimonials() {
  const { t } = useLanguage()

  const testimonialMeta = [
    {
      image: "/images/MULTI ELECTRCI LOGO_LE_upscale_balanced_x4.jpg",
      rating: 5
    },
    {
      image: "/images/pr-decompression-centers-logo.png",
      rating: 5
    }
  ]

  const testimonials = t.testimonials.items.map((item, index) => ({
    ...item,
    image: testimonialMeta[index]?.image ?? '/images/testimonial-placeholder.png',
    rating: testimonialMeta[index]?.rating ?? 5
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-secondary/70">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/18 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/12 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 elegant-grid opacity-5"></div>
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
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <div className="glass-effect rounded-2xl p-8 border border-dark-border/60 hover:border-primary/40 transition-all duration-300 h-full relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-primary/20 text-4xl">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    >
                      <FiStar className="text-primary fill-current text-lg" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-text-secondary text-lg leading-relaxed mb-8 relative z-10">
                  “{testimonial.content}”
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary-dark/30 flex items-center justify-center overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-accent">{testimonial.name}</div>
                    <div className="text-sm text-text-secondary">{testimonial.role}</div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-primary-dark/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-text-secondary mb-6 uppercase tracking-wide">{t.testimonials.ctaNotice}</p>
          <motion.a
            href="#quote"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-secondary font-bold rounded-lg hover:shadow-primary-lg transition-all uppercase tracking-wide"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.testimonials.ctaButton}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
