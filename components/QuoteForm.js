import { useRef, useState, useEffect } from 'react'
import { useLanguage } from './LanguageContext'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function QuoteForm() {
  const { t, language } = useLanguage()
  const form = useRef()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize timestamp for time-trap defense
  useEffect(() => {
    const el = document.getElementById('started_at');
    if (el) el.value = String(Date.now());
  }, []);

  const MIN_SECONDS = 3;

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Get form data
    const formData = new FormData(form.current)
    const email = formData.get('email')
    const name = formData.get('name')
    const message = formData.get('message')

    // Bot Security Layer 1: Honeypot check
    if (formData.get('company_website')) {
      setError(language === 'es' ? 'Spam detectado.' : 'Spam detected.')
      setIsSubmitting(false)
      return
    }

    // Bot Security Layer 2: Time-trap check
    const elapsed = (Date.now() - Number(formData.get('started_at'))) / 1000
    if (elapsed < MIN_SECONDS) {
      setError(language === 'es' ? 'Por favor, tómate un momento antes de enviar.' : 'Please take a moment before submitting.')
      setIsSubmitting(false)
      return
    }

    // Enhanced email validation
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(language === 'es' ? 'Por favor, ingresa un correo electrónico válido.' : 'Please enter a valid email.')
      setIsSubmitting(false)
      return
    }

    // Basic validation for required fields
    if (!name?.trim()) {
      setError(language === 'es' ? 'El nombre es requerido' : 'Name is required')
      setIsSubmitting(false)
      return
    }

    if (!message?.trim()) {
      setError(language === 'es' ? 'Los objetivos del sitio web son requeridos' : 'Website goals are required')
      setIsSubmitting(false)
      return
    }

    // Bot Security Layer 3: Optional Turnstile verification
    if (process.env.NEXT_PUBLIC_ENABLE_TURNSTILE === 'true') {
      const token = document.querySelector('[name="cf-turnstile-response"]')?.value
      if (!token) {
        setError(language === 'es' ? 'Completa la verificación.' : 'Complete the verification.')
        setIsSubmitting(false)
        return
      }
      
      try {
        const verifyResponse = await fetch('/api/verify-turnstile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token })
        })
        
        if (!verifyResponse.ok) {
          setError(language === 'es' ? 'Verificación fallida, inténtalo de nuevo.' : 'Verification failed, try again.')
          setIsSubmitting(false)
          return
        }
      } catch (err) {
        setError(language === 'es' ? 'Error de verificación, inténtalo de nuevo.' : 'Verification error, try again.')
        setIsSubmitting(false)
        return
      }
    }

    try {
      // Prepare comprehensive template parameters for contact email
      const contactParams = {
        to_email: 'nurvanatec@gmail.com',
        from_name: name.trim(),
        from_email: email.trim(),
        business: formData.get('business')?.trim() || 'Not specified',
        budget: formData.get('budget')?.trim() || 'Not specified',
        preferred_language: formData.get('language') || 'English',
        message: message.trim(),
        reply_to: email.trim()
      }

      console.log('Sending contact email with params:', contactParams)

      // Send contact form using send method with proper parameters
      const result = await emailjs.send(
        'service_fn20j9k', 
        'template_el7imut', 
        contactParams,
        'h67XnrewvXTkQZLJM'
      )
      console.log('Contact email sent successfully:', result)

      // Send auto-reply to customer with proper parameters
      const autoReplyParams = {
        to_name: name.trim(),
        to_email: email.trim(),
        from_name: 'Nuvana Team',
        reply_to: 'nurvanatec@gmail.com'
      }
      
      const autoReply = await emailjs.send(
        'service_fn20j9k', 
        'template_iklgsca', 
        autoReplyParams,
        'h67XnrewvXTkQZLJM'
      )
      console.log('Auto-reply sent successfully:', autoReply)

      setSent(true)
    } catch (err) {
      console.error('EmailJS Error:', err)
      console.error('Error details:', err.text || err.message)
      console.error('Error status:', err.status)
      
      // More specific error handling
      let errorMessage = language === 'es' ? 'Error al enviar. Inténtalo de nuevo.' : 'Error sending. Please try again.'
      
      if (err.status === 422) {
        errorMessage = language === 'es' 
          ? 'Error de validación. Verifica que todos los campos estén completos.' 
          : 'Validation error. Please check that all fields are complete.'
      } else if (err.status === 400) {
        errorMessage = language === 'es' 
          ? 'Solicitud inválida. Por favor, intenta de nuevo.' 
          : 'Invalid request. Please try again.'
      } else if (err.status === 403) {
        errorMessage = language === 'es' 
          ? 'Acceso denegado. Contacta al soporte.' 
          : 'Access denied. Please contact support.'
      }
      
      setError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      id="quote"
      className="max-w-xl mx-auto my-16 p-8 bg-gray-900 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-primary">{t.quote.title}</h2>
      {sent ? (
        <p className="text-green-400">Thank you! We’ll be in touch soon.</p>
      ) : (
        <form ref={form} onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot field - hidden from real users */}
          <input 
            type="text" 
            name="company_website" 
            tabIndex="-1" 
            autoComplete="off" 
            style={{ position: 'absolute', left: '-9999px' }} 
            aria-hidden="true" 
          />
          
          {/* Time-trap field - tracks form load time */}
          <input type="hidden" name="started_at" id="started_at" />
          
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">{t.quote.fields.name}</label>
            <input id="name" name="name" placeholder={t.quote.fields.name} required className="w-full p-2 rounded bg-gray-800 text-white" />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">{t.quote.fields.email}</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t.quote.fields.email}
              required
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
          </div>

          <div className="form-group">
            <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-1">{t.quote.fields.business}</label>
            <input id="business" name="business" placeholder={t.quote.fields.business} className="w-full p-2 rounded bg-gray-800 text-white" />
          </div>

          <div className="form-group">
            <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">{t.quote.fields.budget}</label>
            <input id="budget" name="budget" placeholder={t.quote.fields.budget} className="w-full p-2 rounded bg-gray-800 text-white" />
          </div>

          <input type="hidden" name="to_email" value="nurvanatec@gmail.com" />

          <div className="form-group">
            <label htmlFor="language" className="block text-sm font-medium text-gray-300 mb-1">{t.quote.fields.language}</label>
            <select id="language" name="language" className="w-full p-2 rounded bg-gray-800 text-white">
              <option value="English">English</option>
              <option value="Spanish">Español</option>
              <option value="Both">Both / Ambos</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">{t.quote.fields.goals}</label>
            <textarea id="message" name="message" placeholder={t.quote.fields.goals} required className="w-full p-2 rounded bg-gray-800 text-white" rows="4" />
          </div>

          {/* Optional Turnstile widget */}
          {process.env.NEXT_PUBLIC_ENABLE_TURNSTILE === 'true' && (
            <div className="form-group">
              <div 
                className="cf-turnstile" 
                data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                data-theme="dark"
              ></div>
            </div>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 font-bold rounded-lg transition-all ${
              isSubmitting
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-primary to-secondary hover:shadow-primary-lg'
            } text-white`}
            whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting
              ? (language === 'es' ? 'Enviando...' : 'Sending...')
              : t.quote.submit
            }
          </motion.button>
          {error && <p className="text-red-400">{error}</p>}
        </form>
      )}
    </motion.section>
  )
}
