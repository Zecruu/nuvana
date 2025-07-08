import { useRef, useState } from 'react'
import { useLanguage } from './LanguageContext'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function QuoteForm() {
  const { t, language } = useLanguage()
  const form = useRef()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)



  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Get form data
    const formData = new FormData(form.current)
    const email = formData.get('email')
    const name = formData.get('name')
    const message = formData.get('message')

    // Basic validation for required fields
    if (!name?.trim()) {
      setError(language === 'es' ? 'El nombre es requerido' : 'Name is required')
      setIsSubmitting(false)
      return
    }

    if (!email?.trim()) {
      setError(language === 'es' ? 'El correo electrónico es requerido' : 'Email is required')
      setIsSubmitting(false)
      return
    }

    if (!message?.trim()) {
      setError(language === 'es' ? 'Los objetivos del sitio web son requeridos' : 'Website goals are required')
      setIsSubmitting(false)
      return
    }

    try {
      // Prepare template parameters for contact email
      const contactParams = {
        to_email: 'nurvanatec@gmail.com',
        name: name,
        email: email,
        business: formData.get('business') || 'Not specified',
        budget: formData.get('budget') || 'Not specified',
        language: formData.get('language') || 'English',
        message: message
      }

      console.log('Sending contact email with params:', contactParams)

      // Send contact form to you
      const result = await emailjs.send('service_fn20j9k', 'template_el7imut', contactParams, 'h67XnrewvXTkQZLJM')
      console.log('Contact email sent successfully:', result)

      // Prepare template parameters for auto-reply
      const autoReplyParams = {
        to_email: email, // Send to customer's email
        name: name,
        email: email,
        business: formData.get('business') || 'Not specified',
        budget: formData.get('budget') || 'Not specified',
        language: formData.get('language') || 'English',
        message: message
      }

      console.log('Sending auto-reply with params:', autoReplyParams)

      // Send auto-reply to customer
      const autoReply = await emailjs.send('service_fn20j9k', 'template_iklgsca', autoReplyParams, 'h67XnrewvXTkQZLJM')
      console.log('Auto-reply sent successfully:', autoReply)

      setSent(true)
    } catch (err) {
      console.error('EmailJS Error:', err)
      console.error('Error details:', err.text || err.message)
      console.error('Error status:', err.status)
      setError(language === 'es' ? 'Error al enviar. Inténtalo de nuevo.' : 'Error sending. Please try again.')
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
