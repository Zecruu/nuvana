import { useLanguage } from './LanguageContext'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiExternalLink, FiCode, FiTrendingUp, FiClock, FiStar, FiZap } from 'react-icons/fi'

export default function Portfolio() {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-secondary/70">
      {/* Background Effects */}
      <div className="absolute inset-0 elegant-grid opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/12 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-cyber font-bold mb-6 gradient-text">
            {t.portfolio.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t.portfolio.sites.map((project, index) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="portfolio-card rounded-2xl p-8 hover-lift group border border-dark-border/60 bg-dark-card/90 backdrop-blur shadow-elegant"
              onHoverStart={() => setSelectedProject(project.id)}
              onHoverEnd={() => setSelectedProject(null)}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-text-secondary text-sm">{project.client} • {project.year}</p>
                </div>
                <motion.div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/25 to-primary-dark/25 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img src={project.img} alt={project.name} className="w-10 h-10 object-contain" />
                </motion.div>
              </div>

              {/* Project Description */}
              <p className="text-text-secondary mb-6 leading-relaxed">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3 flex items-center">
                  <FiCode className="mr-2" />
                  {t.portfolio.techTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="tech-badge px-3 py-1 text-xs rounded-full text-text-secondary bg-dark-bg/60 border border-dark-border/70">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-badge px-3 py-1 text-xs rounded-full text-text-secondary/70 bg-dark-bg/40 border border-dark-border/60">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="stats-counter rounded-lg p-3 text-center border border-dark-border/60 bg-dark-bg/60">
                  <div className="text-primary font-bold text-lg">{project.stats.loadTime}</div>
                  <div className="text-xs text-text-secondary uppercase tracking-wide">{t.portfolio.stats.loadTime}</div>
                </div>
                <div className="stats-counter rounded-lg p-3 text-center border border-dark-border/60 bg-dark-bg/60">
                  <div className="text-primary font-bold text-lg">{project.stats.mobileScore}</div>
                  <div className="text-xs text-text-secondary uppercase tracking-wide">{t.portfolio.stats.mobileScore}</div>
                </div>
                <div className="stats-counter rounded-lg p-3 text-center border border-dark-border/60 bg-dark-bg/60">
                  <div className="text-primary font-bold text-lg">{project.stats.seoScore}</div>
                  <div className="text-xs text-text-secondary uppercase tracking-wide">{t.portfolio.stats.seoScore}</div>
                </div>
                <div className="stats-counter rounded-lg p-3 text-center border border-dark-border/60 bg-dark-bg/60">
                  <div className="text-primary font-bold text-lg">{project.stats.uptime}</div>
                  <div className="text-xs text-text-secondary uppercase tracking-wide">{t.portfolio.stats.uptime}</div>
                </div>
              </div>

              {/* Key Results */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3 flex items-center">
                  <FiTrendingUp className="mr-2" />
                  {t.portfolio.resultsTitle}
                </h4>
                <ul className="space-y-2">
                  {project.results.slice(0, 2).map((result, i) => (
                    <li key={i} className="text-sm text-text-secondary flex items-center">
                      <FiZap className="text-primary mr-2 text-xs" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-primary to-primary-dark text-secondary font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:shadow-primary-lg transition-all border border-primary/40"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiExternalLink className="text-sm" />
                {t.portfolio.visit}
              </motion.a>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/8 to-primary-dark/8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                initial={false}
                animate={{ opacity: selectedProject === project.id ? 1 : 0 }}
              />
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-text-secondary mb-6 uppercase tracking-wide">{t.portfolio.ctaNotice}</p>
          <motion.a
            href="#quote"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-secondary font-bold rounded-lg hover:shadow-primary-lg transition-all border border-primary/40 uppercase tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.portfolio.ctaButton}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
