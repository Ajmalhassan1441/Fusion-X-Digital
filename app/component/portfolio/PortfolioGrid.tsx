'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import SectionHeading from '../../component/commen/SectionHeading'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

// Sample project data - Replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    categoryName: 'Web Development',
    image: '/onlinestore.avif',
    description: 'Full-featured online store with payment integration and inventory management.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Corporate Branding',
    category: 'design',
    categoryName: 'Graphic Design',
    image: '/corporatebranding.avif',
    description: 'Complete brand identity including logo, business cards, and brand guidelines.',
    liveUrl: 'https://example.com',
    technologies: ['Illustrator', 'Photoshop']
  },
  {
    id: 3,
    title: 'SEO Campaign',
    category: 'marketing',
    categoryName: 'Digital Marketing',
    image: '/seocompain.avif',
    description: 'Comprehensive SEO strategy that increased organic traffic by 200%.',
    liveUrl: 'https://example.com',
    technologies: ['Google Analytics', 'SEMrush']
  },
  {
    id: 4,
    title: 'WordPress Blog',
    category: 'wordpress',
    categoryName: 'WordPress Development',
    image: '/wordpress.avif',
    description: 'Custom WordPress theme with optimized performance and easy content management.',
    liveUrl: 'https://example.com',
    technologies: ['WordPress', 'PHP', 'MySQL']
  },
  {
    id: 5,
    title: 'Mobile App Design',
    category: 'design',
    categoryName: 'Graphic Design',
    image: '/appdevelopment.avif',
    description: 'UI/UX design for a fitness tracking mobile application.',
    liveUrl: 'https://example.com',
    technologies: ['Figma', 'Sketch']
  },
  {
    id: 6,
    title: 'Social Media Management',
    category: 'marketing',
    categoryName: 'Digital Marketing',
    image: '/socailmedia.webp',
    description: 'Managed social media accounts resulting in 150% engagement increase.',
    liveUrl: 'https://example.com',
    technologies: ['Buffer', 'Hootsuite']
  }
]

// Categories for filter
const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web Development' },
  { value: 'design', label: 'Graphic Design' },
  { value: 'marketing', label: 'Digital Marketing' },
  { value: 'wordpress', label: 'WordPress' }
]

export default function PortfolioGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section ref={ref} className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Projects"
          subtitle="A glimpse of what we've created for our clients"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`
                px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${selectedCategory === cat.value
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500/30 transition-all"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay with links */}
                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                        >
                          <FaExternalLinkAlt className="text-white" />
                        </a>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                          >
                            <FaGithub className="text-white" />
                          </a>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                      {project.categoryName}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}