'use client'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// Counter Component
const Counter = ({ value, duration = 2, suffix = '' }: { value: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return

    let start = 0
    const increment = value / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [inView, value, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function ContactHero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-blue-950/30" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <span className="text-xs tracking-[0.3em] text-blue-400/80 font-light uppercase border border-blue-500/20 px-4 py-2 rounded-full bg-blue-500/5 backdrop-blur-sm">
              Let's Work Together
            </span>
          </motion.div>

          {/* Main Heading with Animated "Connect With" */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <div className="flex flex-wrap justify-center items-center gap-4">
              {/* Animated "Connect With" */}
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              >
                Connect With
              </motion.span>
              
              {/* Animated "Us" */}
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-white"
              >
                Us
              </motion.span>
            </div>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16"
          >
            Your vision deserves exceptional execution. Reach out and let's craft something extraordinary together.
          </motion.p>

          {/* Animated Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {/* Projects Completed */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all group">
              <div className="text-5xl font-bold text-blue-400 mb-2">
                <Counter value={50} suffix="+" />
              </div>
              <div className="text-sm uppercase tracking-wider text-gray-400">Projects Completed</div>
              <div className="w-12 h-0.5 bg-blue-500/50 mx-auto mt-4 group-hover:w-20 transition-all" />
            </div>

            {/* Response Time */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all group">
              <div className="text-5xl font-bold text-purple-400 mb-2">
                <Counter value={24} suffix="h" />
              </div>
              <div className="text-sm uppercase tracking-wider text-gray-400">Response Time</div>
              <div className="w-12 h-0.5 bg-purple-500/50 mx-auto mt-4 group-hover:w-20 transition-all" />
            </div>

            {/* Satisfaction Rate */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all group">
              <div className="text-5xl font-bold text-green-400 mb-2">
                <Counter value={100} suffix="%" />
              </div>
              <div className="text-sm uppercase tracking-wider text-gray-400">Satisfaction Rate</div>
              <div className="w-12 h-0.5 bg-green-500/50 mx-auto mt-4 group-hover:w-20 transition-all" />
            </div>
          </motion.div>

          {/* Contact Info Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300"
          >
            <a href="mailto:info@fusionxdigital.com" className="hover:text-blue-400 transition-colors">
              info@fusionxdigital.com
            </a>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <a href="tel:+923001234567" className="hover:text-blue-400 transition-colors">
              +92 317 569 9916
            </a>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <span>Okara, Pakistan</span>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mt-12"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center">
          <motion.div
            animate={{ height: [6, 12, 6] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 bg-blue-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}