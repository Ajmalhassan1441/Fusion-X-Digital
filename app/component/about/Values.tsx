'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaLightbulb, 
  FaHeart, 
  FaRocket, 
  FaHandshake,
  FaStar,
  FaShieldAlt
} from 'react-icons/fa'
import SectionHeading from '../../component/commen/SectionHeading'

const values = [
  {
    icon: FaLightbulb,
    title: 'Innovation First',
    description: 'We constantly explore new technologies and creative approaches to stay ahead of the curve.',
    color: 'from-yellow-500/20 to-yellow-600/20'
  },
  {
    icon: FaHeart,
    title: 'Passionate Delivery',
    description: 'Every project is personal to us. We pour our hearts into creating work we\'re proud of.',
    color: 'from-red-500/20 to-red-600/20'
  },
  {
    icon: FaRocket,
    title: 'Excellence Always',
    description: 'We set high standards and never compromise on quality, no matter the project size.',
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    icon: FaHandshake,
    title: 'Integrity & Trust',
    description: 'Honest communication, transparent pricing, and reliable delivery are our promises.',
    color: 'from-green-500/20 to-green-600/20'
  },
  {
    icon: FaStar,
    title: 'Client Success',
    description: 'Your success is our success. We go above and beyond to exceed expectations.',
    color: 'from-purple-500/20 to-purple-600/20'
  },
  {
    icon: FaShieldAlt,
    title: 'Quality Assured',
    description: 'Rigorous testing and attention to detail ensure flawless deliverables every time.',
    color: 'from-indigo-500/20 to-indigo-600/20'
  }
]

export default function Values() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Core Values"
          subtitle="The principles that guide everything we do"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                
                {/* Card */}
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 group-hover:border-blue-500/30 transition-all duration-300 h-full">
                  <div className="text-5xl text-blue-400 mb-4 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                    <Icon />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}