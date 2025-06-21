import { motion } from 'framer-motion'
import { useLanguage } from './LanguageContext'
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi'

export default function Blog() {
  const { t } = useLanguage()

  const blogPosts = [
    {
      id: 1,
      title: "Essential Website Features Every Puerto Rico Business Needs in 2025",
      titleEs: "Características Esenciales que Todo Negocio en Puerto Rico Necesita en 2025",
      excerpt: "Discover the must-have website features that will help your Puerto Rico business succeed online, from bilingual support to mobile optimization.",
      excerptEs: "Descubre las características indispensables que ayudarán a tu negocio en Puerto Rico a triunfar en línea, desde soporte bilingüe hasta optimización móvil.",
      date: "2025-01-15",
      author: "Nuvana Team",
      category: "Web Design",
      categoryEs: "Diseño Web",
      image: "/images/blog/website-features-2025.jpg",
      slug: "essential-website-features-puerto-rico-business-2025"
    },
    {
      id: 2,
      title: "Why Bilingual Websites Are Crucial for Puerto Rico Businesses",
      titleEs: "Por Qué los Sitios Web Bilingües Son Cruciales para Negocios en Puerto Rico",
      excerpt: "Learn how bilingual websites can expand your market reach and improve customer engagement in Puerto Rico's diverse market.",
      excerptEs: "Aprende cómo los sitios web bilingües pueden expandir tu alcance de mercado y mejorar el compromiso del cliente en el mercado diverso de Puerto Rico.",
      date: "2025-01-10",
      author: "Nuvana Team",
      category: "Digital Marketing",
      categoryEs: "Marketing Digital",
      image: "/images/blog/bilingual-websites-puerto-rico.jpg",
      slug: "bilingual-websites-crucial-puerto-rico-businesses"
    },
    {
      id: 3,
      title: "SEO Best Practices for Puerto Rico Local Businesses",
      titleEs: "Mejores Prácticas de SEO para Negocios Locales en Puerto Rico",
      excerpt: "Master local SEO strategies specifically designed for Puerto Rico businesses to dominate local search results.",
      excerptEs: "Domina las estrategias de SEO local específicamente diseñadas para negocios en Puerto Rico para dominar los resultados de búsqueda local.",
      date: "2025-01-05",
      author: "Nuvana Team",
      category: "SEO",
      categoryEs: "SEO",
      image: "/images/blog/seo-puerto-rico-local-business.jpg",
      slug: "seo-best-practices-puerto-rico-local-businesses"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
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
          <motion.div
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 text-primary text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Latest Insights
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 gradient-text">
            Web Design & SEO Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert tips and strategies for building successful websites in Puerto Rico
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -8 }}
            >
              <div className="glass-effect rounded-2xl overflow-hidden border border-white/10 hover:border-neon/30 transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="text-primary" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiUser className="text-primary" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-primary font-medium text-sm group-hover:text-neon transition-colors">
                    <span>Read More</span>
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-primary transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
            <FiArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
