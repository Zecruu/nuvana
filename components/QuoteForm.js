import { useRef, useState } from 'react'
import { useLanguage } from './LanguageContext'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function QuoteForm() {
  const { t } = useLanguage()
  const form = useRef()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add validation here
    try {
      await emailjs.sendForm('service_vc249xm', 'template_b1ebham', form.current, 'w3rPoMsp1ust0_nbr')
      setSent(true)
    } catch (err) {
      setError('Error sending. Try again.')
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
      <h2 className="text-3xl font-bold mb-6 text-neon">{t.quote.title}</h2>
      {sent ? (
        <p className="text-green-400">Thank you! We’ll be in touch soon.</p>
      ) : (
        <form ref={form} onSubmit={handleSubmit} className="space-y-5">
          <div className="form-group">
            <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-1">{t.quote.fields.name}</label>
            <input id="from_name" name="from_name" placeholder={t.quote.fields.name} required className="w-full p-2 rounded bg-gray-800 text-white" />
          </div>
          
          <div className="form-group">
            <label htmlFor="reply_to" className="block text-sm font-medium text-gray-300 mb-1">{t.quote.fields.email}</label>
            <input id="reply_to" name="reply_to" type="email" placeholder={t.quote.fields.email} required className="w-full p-2 rounded bg-gray-800 text-white" />
          </div>
          
          <div className="form-group">
            <label htmlFor="business_type" className="block text-sm font-medium text-gray-300 mb-1">{t.quote.fields.business}</label>
            <input id="business_type" name="business_type" placeholder={t.quote.fields.business} className="w-full p-2 rounded bg-gray-800 text-white" />
          </div>
          
          <div className="form-group">
            <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">{t.quote.fields.budget}</label>
            <input id="budget" name="budget" placeholder={t.quote.fields.budget} className="w-full p-2 rounded bg-gray-800 text-white" />
          </div>
          
          <input type="hidden" name="to_email" value="nurvanatec@gmail.com" />
          
          <div className="form-group">
            <label htmlFor="language_preference" className="block text-sm font-medium text-gray-300 mb-1">{t.quote.fields.language}</label>
            <select id="language_preference" name="language_preference" className="w-full p-2 rounded bg-gray-800 text-white">
              <option value="English">English</option>
              <option value="Spanish">Español</option>
              <option value="Both">Both / Ambos</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="goals" className="block text-sm font-medium text-gray-300 mb-1">{t.quote.fields.goals}</label>
            <textarea id="goals" name="goals" placeholder={t.quote.fields.goals} required className="w-full p-2 rounded bg-gray-800 text-white" rows="4" />
          </div>
          <button type="submit" className="w-full py-3 bg-neon text-black font-bold rounded hover:scale-105 transition">{t.quote.submit}</button>
          {error && <p className="text-red-400">{error}</p>}
        </form>
      )}
    </motion.section>
  )
}
