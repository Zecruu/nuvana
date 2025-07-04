import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from './LanguageContext'
import { blogPosts } from '../data/blogPosts'
import { FiCalendar, FiUser, FiArrowRight, FiClock } from 'react-icons/fi'

export default function Blog() {
  const { language } = useLanguage()

  // Show only the first 3 posts on homepage
  const featuredPosts = blogPosts.slice(0, 3)

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
          {featuredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              className="group relative h-full"
              whileHover={{ y: -8 }}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="glass-effect blog-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 h-full cursor-pointer">
                  {/* Content */}
                  <div className="p-6 flex flex-col h-full relative">
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 bg-primary/90 border border-primary/30 rounded-full text-white text-xs font-semibold backdrop-blur-sm shadow-lg">
                        {language === 'es' ? post.categoryEs : post.category}
                      </span>
                    </div>

                    {/* Read Time Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-dark-bg/90 rounded-full text-xs text-gray-200 flex items-center gap-1.5 backdrop-blur-sm shadow-lg">
                        <FiClock className="text-primary w-3 h-3" />
                        {language === 'es' ? post.readTimeEs : post.readTime}
                      </span>
                    </div>
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-6 mt-12">
                      <div className="flex items-center gap-1.5">
                        <FiCalendar className="text-primary w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FiUser className="text-primary w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                      {language === 'es' ? post.titleEs : post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-300 text-base leading-relaxed mb-8 line-clamp-4 flex-grow">
                      {language === 'es' ? post.excerptEs : post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center text-primary font-semibold text-base group-hover:text-secondary transition-colors duration-300 mt-auto">
                      <span>{language === 'es' ? 'Leer Más' : 'Read More'}</span>
                      <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-primary-light to-secondary text-white font-semibold rounded-xl hover:shadow-primary/30 hover:shadow-2xl transition-all duration-300 border border-primary/20"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{language === 'es' ? 'Ver Todos los Artículos' : 'View All Articles'}</span>
            <FiArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
