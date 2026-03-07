'use client'
import { motion } from 'framer-motion'

export default function ServicesHero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-950 to-purple-950/30" />
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
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
              What We Do
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="text-blue-400">Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end digital solutions to help your business grow and succeed in the online world.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
