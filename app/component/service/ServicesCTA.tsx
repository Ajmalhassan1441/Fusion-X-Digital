'use client'
import { motion } from 'framer-motion'
import Button from '../../component/button/Button'

import { FaArrowRight } from 'react-icons/fa'

export default function ServicesCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Start Your{' '}
            <span className="text-blue-400">Project?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your requirements and create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large" href="/contact" className="group">
              <span className="flex items-center gap-2">
                Get Free Consultation
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button variant="outline" size="large" href="/portfolio">
              View Our Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
