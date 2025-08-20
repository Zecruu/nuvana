import { useLanguage } from './LanguageContext'
import { motion } from 'framer-motion'
import { FiHeart, FiTarget, FiTrendingUp, FiUsers } from 'react-icons/fi'

export default function About() {
  const { language } = useLanguage()

  const values = [
    {
      icon: FiHeart,
      title: language === 'es' ? 'Nos Importa Tu Éxito' : 'We Care About Your Success',
      desc: language === 'es' ? 'Tu crecimiento es nuestro objetivo principal' : 'Your growth is our primary goal'
    },
    {
      icon: FiTarget,
      title: language === 'es' ? 'Resultados Reales' : 'Real Results',
      desc: language === 'es' ? 'Enfocados en generar impacto medible' : 'Focused on generating measurable impact'
    },
    {
      icon: FiTrendingUp,
      title: language === 'es' ? 'Crecimiento Sostenible' : 'Sustainable Growth',
      desc: language === 'es' ? 'Construimos para el éxito a largo plazo' : 'We build for long-term success'
    },
    {
      icon: FiUsers,
      title: language === 'es' ? 'Socios, No Solo Proveedores' : 'Partners, Not Just Providers',
      desc: language === 'es' ? 'Estamos contigo en cada paso del camino' : 'We\'re with you every step of the way'
    },
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
              {language === 'es' ? 'Una Empresa de Diseño Web Como Ninguna Otra' : 'A Web Design Company Like No Other'}
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {language === 'es'
                ? 'Nuvana es una empresa comprometida con ver tu negocio triunfar. A diferencia de otras empresas de diseño web que solo construyen sitios web y desaparecen, nosotros realmente nos preocupamos por tu crecimiento y éxito. Nos especializamos en crear sitios web personalizados en inglés, español, o ambos idiomas, con diseños responsivos y soluciones optimizadas para SEO. Nuestra misión no es solo entregar un sitio web—es entregar resultados que transformen tu negocio y te ayuden a alcanzar nuevas alturas.'
                : 'Nuvana is a company committed to seeing your business succeed. Unlike other web design companies that just build websites and disappear, we genuinely care about your growth and success. We specialize in creating custom websites in English, Spanish, or both languages, with responsive designs and SEO-optimized solutions. Our mission isn\'t just to deliver a website—it\'s to deliver results that transform your business and help you reach new heights.'
              }
            </p>

            {/* What Makes Us Different */}
            <div className="space-y-4 mb-8">
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-300">
                  {language === 'es' ? 'Nos enfocamos en tu éxito, no solo en entregar proyectos' : 'We focus on your success, not just delivering projects'}
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="w-2 h-2 bg-neon rounded-full"></div>
                <span className="text-gray-300">
                  {language === 'es' ? 'Soporte continuo y crecimiento a largo plazo' : 'Ongoing support and long-term growth partnership'}
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="w-2 h-2 bg-neon rounded-full"></div>
                <span className="text-gray-300">
                  {language === 'es' ? 'Experiencia bilingüe para alcance global' : 'Bilingual expertise for global reach'}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Our Values Side */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-neon/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:shadow-primary transition-all duration-300 flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <value.icon className="text-primary text-xl" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
