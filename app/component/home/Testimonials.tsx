'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeading from '../../component/commen/SectionHeading'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Ali Raza',
    role: 'CEO, TechStart',
    content: 'FusionX Digital transformed our online presence. Their team is creative, professional, and delivered beyond expectations.',
    rating: 5,
    initial: 'A'
  },
  {
    name: 'Sara Khan',
    role: 'Marketing Director',
    content: 'The best decision we made was partnering with FusionX. Their digital marketing strategies increased our ROI by 200%.',
    rating: 5,
    initial: 'S'
  },
  {
    name: 'Usman Ahmed',
    role: 'Founder, DesignHub',
    content: 'Amazing work on our website redesign. They understood our vision perfectly and executed flawlessly.',
    rating: 5,
    initial: 'U'
  }
]

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 relative overflow-hidden bg-transparent"> {/* ✅ bg-transparent */}
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 40
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card with gradient border on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-40 blur-md transition duration-500" />
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 group-hover:border-transparent transition-all duration-300 shadow-xl">
                {/* Quote icon */}
                <FaQuoteLeft className="absolute top-4 right-4 text-4xl text-blue-500/10 group-hover:text-blue-500/20 transition-colors" />
                
                {/* Avatar with glow effect */}
                <div className="absolute -top-6 left-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl border-4 border-gray-900 group-hover:scale-110 transition-transform duration-300">
                      {testimonial.initial}
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  {/* Stars with animation */}
                  <motion.div 
                    className="flex gap-1 text-yellow-400 mb-4"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                      >
                        <FaStar />
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Content */}
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                {/* Decorative line at bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 opacity-70" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}