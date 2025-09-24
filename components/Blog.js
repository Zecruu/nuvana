import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from './LanguageContext'
import { blogPosts } from '../data/blogPosts'
import { FiCalendar, FiUser, FiArrowRight, FiClock } from 'react-icons/fi'

export default function Blog() {
  const { t, lang } = useLanguage()

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
    <section className="py-20 px-6 relative overflow-hidden bg-secondary/70">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/12 rounded-full blur-3xl"></div>
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
            className="inline-block px-4 py-2 bg-primary/15 border border-primary/40 rounded-full mb-6 text-primary text-sm font-medium tracking-wide uppercase"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.blog.label}
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6 gradient-text">
            {t.blog.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {t.blog.subtitle}
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
                <div className="glass-effect blog-card rounded-2xl overflow-hidden border border-dark-border/60 hover:border-primary/40 transition-all duration-500 h-full cursor-pointer">
                  {/* Content */}
                  <div className="p-6 flex flex-col h-full relative">
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 bg-primary/85 border border-primary/30 rounded-full text-secondary text-xs font-semibold backdrop-blur-sm shadow-lg uppercase tracking-wide">
                        {lang === 'es' ? post.categoryEs : post.category}
                      </span>
                    </div>

                    {/* Read Time Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-dark-bg/80 rounded-full text-xs text-text-secondary flex items-center gap-1.5 backdrop-blur-sm shadow-lg uppercase tracking-wide">
                        <FiClock className="text-primary w-3 h-3" />
                        {lang === 'es' ? post.readTimeEs : post.readTime}
                      </span>
                    </div>
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-text-secondary mb-6 mt-12">
                      <div className="flex items-center gap-1.5">
                        <FiCalendar className="text-primary w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US')}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FiUser className="text-primary w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-accent group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                      {lang === 'es' ? post.titleEs : post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-text-secondary text-base leading-relaxed mb-8 line-clamp-4 flex-grow">
                      {lang === 'es' ? post.excerptEs : post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center text-primary font-semibold text-base group-hover:text-primary-light transition-colors duration-300 mt-auto uppercase tracking-wide">
                      <span>{t.blog.readMore}</span>
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-accent font-semibold rounded-xl shadow-primary hover:shadow-primary-lg transition-all duration-300 border border-primary/50 uppercase tracking-wide"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t.blog.viewAll}</span>
            <FiArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
