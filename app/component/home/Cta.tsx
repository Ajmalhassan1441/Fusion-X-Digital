'use client'
import { motion } from 'framer-motion'
import Button from '../../component/button/Button'
import { FaArrowRight } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Minimal badge */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 text-xs font-light tracking-wider text-blue-400 uppercase border border-blue-500/20 rounded-full mb-6"
          >
            Let's Create Together
          </motion.span>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Build Something
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
              Extraordinary?
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            We're just a message away. Let's discuss your vision and turn it into reality.
          </p>

          {/* Button with subtle animation */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Button variant="primary" size="large" href="/contact" className="group">
              <span className="flex items-center gap-2">
                Start Your Journey
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>

          {/* Small trust indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs text-gray-600 mt-6"
          >
            ✦ No obligations. Free consultation. ✦
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
