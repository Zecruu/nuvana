import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '../../components/LanguageContext'
import Navigation from '../../components/Navigation'
import FloatingChatButton from '../../components/FloatingChatButton'
import { blogPosts } from '../../data/blogPosts'
import { FiCalendar, FiUser, FiClock, FiArrowRight } from 'react-icons/fi'

export default function BlogIndex() {
  const { language } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <>
      <Head>
        <title>Bilingual Web Design Blog | Expert Tips & Insights | Nuvana</title>
        <meta name="description" content="Expert bilingual web design tips, SEO strategies, and digital marketing insights. Learn how to grow your business online with English and Spanish websites." />
        <meta name="keywords" content="bilingual web design blog, multilingual SEO, digital marketing tips, website optimization, English Spanish websites, mobile design" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://nuvana.com/blog" />
        
        {/* Hreflang for multilingual SEO */}
        <link rel="alternate" hreflang="en" href="https://nuvana.com/blog" />
        <link rel="alternate" hreflang="x-default" href="https://nuvana.com/blog" />

        {/* Favicon */}
        <link rel="icon" type="image/jpeg" href="/images/Nuvana Logo.jpg" />
        <link rel="shortcut icon" type="image/jpeg" href="/images/Nuvana Logo.jpg" />
        <link rel="apple-touch-icon" href="/images/Nuvana Logo.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Nuvana Web Design Blog",
            "description": "Expert web design and digital marketing insights for Puerto Rico businesses",
            "url": "https://nuvana.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Nuvana Web Design Studio",
              "url": "https://nuvana.com"
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "url": `https://nuvana.com/blog/${post.slug}`,
              "datePublished": post.date,
              "author": {
                "@type": "Organization",
                "name": post.author
              }
            }))
          })
        }} />
      </Head>

      <div className="min-h-screen bg-dark-bg text-white">
        {/* Navigation */}
        <Navigation />

        {/* Header */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-cyber font-bold mb-6 gradient-text">
                Web Design Insights
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Expert tips, strategies, and insights to help your business succeed online globally.
                Learn from our experience building bilingual websites that convert.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {blogPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={cardVariants}
                  className="group"
                  whileHover={{ y: -8 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="glass-effect rounded-2xl overflow-hidden border border-white/10 hover:border-neon/30 transition-all duration-300 h-full cursor-pointer">
                      {/* Content */}
                      <div className="p-6 relative">
                        {/* Category Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-medium">
                            {language === 'es' ? post.categoryEs : post.category}
                          </span>
                        </div>

                        {/* Read Time Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-2 py-1 bg-dark-bg/80 rounded text-xs text-gray-300 flex items-center gap-1">
                            <FiClock className="text-primary" />
                            {language === 'es' ? post.readTimeEs : post.readTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6 mt-12">
                          <div className="flex items-center gap-1">
                            <FiCalendar className="text-primary" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiUser className="text-primary" />
                            <span>{post.author}</span>
                          </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                          {language === 'es' ? post.titleEs : post.title}
                        </h2>

                        <p className="text-gray-300 text-base leading-relaxed mb-8 line-clamp-4">
                          {language === 'es' ? post.excerptEs : post.excerpt}
                        </p>

                        <div className="flex items-center text-primary font-medium text-base group-hover:text-neon transition-colors">
                          <span>{language === 'es' ? 'Leer Más' : 'Read More'}</span>
                          <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <FloatingChatButton />
      </div>
    </>
  )
}
