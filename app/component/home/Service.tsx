'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeading from '../../component/commen/SectionHeading'
import { 
  FaPalette, 
  FaChartLine, 
  FaWordpress, 
  FaCode 
} from 'react-icons/fa'

const services = [
  {
    icon: FaPalette,
    title: 'Graphic Design',
    description: 'Logo, branding, social media posts, brochures, and more creative solutions.',
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    icon: FaChartLine,
    title: 'Digital Marketing',
    description: 'SEO, social media management, Google Ads, and complete digital strategy.',
    color: 'from-green-500/20 to-blue-500/20'
  },
  {
    icon: FaWordpress,
    title: 'WordPress Development',
    description: 'Custom themes, plugin development, maintenance, and speed optimization.',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: FaCode,
    title: 'Web Development',
    description: 'Custom websites, web applications, e-commerce solutions, and portals.',
    color: 'from-orange-500/20 to-red-500/20'
  }
]

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive digital solutions under one roof"
        />

        {/* Split Layout: 2 columns, each with 2 cards stacked */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - 2 cards */}
          <div className="space-y-6">
            {services.slice(0, 2).map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="group relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 transition-all duration-300 hover:border-blue-500/30 overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="text-5xl mb-4 text-blue-400 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                        <Icon />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>

                    {/* Decorative line on hover */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right Column - 2 cards */}
          <div className="space-y-6">
            {services.slice(2, 4).map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index + 2}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                >
                  <div className="group relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 transition-all duration-300 hover:border-blue-500/30 overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="text-5xl mb-4 text-blue-400 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                        <Icon />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>

                    {/* Decorative line on hover */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}