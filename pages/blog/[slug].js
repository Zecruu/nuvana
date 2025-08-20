import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '../../components/LanguageContext'
import Navigation from '../../components/Navigation'
import FloatingChatButton from '../../components/FloatingChatButton'
import { blogPosts } from '../../data/blogPosts'
import { FiCalendar, FiUser, FiClock, FiArrowLeft, FiArrowRight, FiShare2 } from 'react-icons/fi'
import ReactMarkdown from 'react-markdown'

export default function BlogPost({ post }) {
  const { language } = useLanguage()

  if (!post) {
    return <div>Post not found</div>
  }

  const title = language === 'es' ? post.titleEs : post.title
  const content = language === 'es' ? post.contentEs : post.content
  const excerpt = language === 'es' ? post.excerptEs : post.excerpt

  return (
    <>
      <Head>
        <title>{title} | Nuvana Web Design Blog</title>
        <meta name="description" content={excerpt} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={`https://nuvana.com/blog/${post.slug}`} />
        
        {/* Hreflang for multilingual SEO */}
        <link rel="alternate" hreflang="en" href={`https://nuvana.com/blog/${post.slug}`} />
        <link rel="alternate" hreflang="x-default" href={`https://nuvana.com/blog/${post.slug}`} />

        {/* Favicon */}
        <link rel="icon" type="image/jpeg" href="/images/Nuvana Logo.jpg" />
        <link rel="shortcut icon" type="image/jpeg" href="/images/Nuvana Logo.jpg" />
        <link rel="apple-touch-icon" href="/images/Nuvana Logo.jpg" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content="https://nuvana.com/images/Nuvana Logo.jpg" />
        <meta property="og:url" content={`https://nuvana.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:image" content="https://nuvana.com/images/Nuvana Logo.jpg" />
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "description": excerpt,
            "image": `https://nuvana.com${post.image}`,
            "author": {
              "@type": "Organization",
              "name": post.author,
              "url": "https://nuvana.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Nuvana Web Design Studio",
              "url": "https://nuvana.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://nuvana.com/images/Nuvana Logo.jpg"
              }
            },
            "datePublished": post.date,
            "dateModified": post.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://nuvana.com/blog/${post.slug}`
            }
          })
        }} />
      </Head>

      <div className="min-h-screen bg-dark-bg text-white">
        {/* Navigation */}
        <Navigation />

        {/* Header */}
        <section className="pt-32 pb-8 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-neon transition-colors mb-8">
                <FiArrowLeft />
                {language === 'es' ? 'Volver al Blog' : 'Back to Blog'}
              </Link>
              
              <div className="mb-6">
                <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium">
                  {language === 'es' ? post.categoryEs : post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-cyber font-bold mb-6 gradient-text leading-tight">
                {title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-primary" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiUser className="text-primary" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="text-primary" />
                  <span>{language === 'es' ? post.readTimeEs : post.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>



        {/* Content */}
        <section className="pb-8 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="prose prose-lg prose-invert max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="blog-content">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </motion.div>
          </div>
        </section>





        {/* Share Section */}
        <section className="py-8 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">
                {language === 'es' ? 'Compartir este artículo:' : 'Share this article:'}
              </span>
              <div className="flex items-center gap-4">
                <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                  <FiShare2 />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .blog-content h1 {
          @apply text-3xl font-bold text-white mb-6 mt-8;
        }
        .blog-content h2 {
          @apply text-2xl font-bold text-white mb-4 mt-6;
        }
        .blog-content h3 {
          @apply text-xl font-bold text-white mb-3 mt-5;
        }
        .blog-content p {
          @apply text-gray-300 mb-4 leading-relaxed;
        }
        .blog-content ul, .blog-content ol {
          @apply text-gray-300 mb-4 pl-6;
        }
        .blog-content li {
          @apply mb-2;
        }
        .blog-content strong {
          @apply text-white font-bold;
        }
        .blog-content em {
          @apply text-primary;
        }
        .blog-content blockquote {
          @apply border-l-4 border-primary pl-4 italic text-gray-300 my-6;
        }
      `}</style>
      <FloatingChatButton />
    </>
  )
}

export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}
