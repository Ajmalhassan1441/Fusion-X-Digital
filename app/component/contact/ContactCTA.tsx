'use client'
import { motion } from 'framer-motion'
import Button from '../../component/button/Button'
import { FaArrowRight } from 'react-icons/fa'

export default function ContactCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-blue-500/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Prefer to <span className="text-blue-400">Email?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Drop us a line anytime. We're always happy to hear from you.
          </p>
          
          <Button variant="primary" size="large" href="mailto:info@fusionxdigital.com" className="group">
            <span className="flex items-center gap-2">
              info@fusionxdigital.com
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}