'use client'
import { motion } from 'framer-motion'
import Button from '../../component/button/Button'
import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"> {/* ✅ pt-20 سے pt-32 کیا */}
      {/* Dark premium background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-black" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="opacity-10">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
          <pattern id="pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 60 30 L 30 60 L 0 30 Z" fill="none" stroke="url(#grad1)" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6"
              >
                <span className="text-sm tracking-[0.3em] text-blue-400/70 font-light uppercase border border-blue-500/30 px-4 py-2 rounded-full">
                  FusionX Digital
                </span>
              </motion.div>

              {/* Heading with split animation */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="block text-white"
                >
                  Where
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400"
                >
                  Creativity
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block text-white"
                >
                  Meets
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="block text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400"
                >
                  Technology
                </motion.span>
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-gray-400 mb-8 leading-relaxed"
              >
                Four powerful services. One integrated solution. 
                Your brand deserves nothing less than exceptional.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button variant="primary" size="large" className="group">
                  <span className="flex items-center gap-2">
                    Explore Services
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button variant="outline" size="large">
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>

            {/* Right side - Animated Text/Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {[
                { number: '01', title: 'Graphic Design', desc: 'Visual identity that speaks' },
                { number: '02', title: 'Digital Marketing', desc: 'Reach your audience' },
                { number: '03', title: 'WordPress Dev', desc: 'Powerful websites' },
                { number: '04', title: 'Web Development', desc: 'Custom web solutions' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  className="group flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all"
                >
                  <span className="text-3xl font-bold text-blue-400/50 group-hover:text-blue-400 transition-colors">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center">
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
