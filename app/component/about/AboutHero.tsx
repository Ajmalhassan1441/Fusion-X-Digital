'use client'
import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-blue-500/10 rounded-full text-blue-400 text-sm font-medium border border-blue-500/20">
              About Us
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Where <span className="text-blue-400">Creativity</span> Meets{' '}
            <span className="text-blue-400">Technology</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're a team of passionate creators, developers, and strategists dedicated to 
            bringing your digital vision to life with innovation and excellence.
          </p>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">50+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">8+</div>
              <div className="text-sm text-gray-400">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">3+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}