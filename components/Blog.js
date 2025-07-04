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
              className="group relative"
              whileHover={{ y: -8 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="glass-effect rounded-2xl overflow-hidden border border-white/10 hover:border-neon/30 transition-all duration-300 h-full cursor-pointer">
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-medium">
                      {language === 'es' ? post.categoryEs : post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="px-2 py-1 bg-dark-bg/80 rounded text-xs text-gray-300 flex items-center gap-1">
                      <FiClock className="text-primary" />
                      {language === 'es' ? post.readTimeEs : post.readTime}
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

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors line-clamp-2">
                    {language === 'es' ? post.titleEs : post.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {language === 'es' ? post.excerptEs : post.excerpt}
                  </p>

                  <div className="flex items-center text-primary font-medium text-sm group-hover:text-neon transition-colors">
                    <span>{language === 'es' ? 'Leer Más' : 'Read More'}</span>
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                </div>
              </Link>
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
