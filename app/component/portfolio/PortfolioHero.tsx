'use client'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

export default function PortfolioHero() {
  // Controls for each image
  const controls1 = useAnimation()
  const controls2 = useAnimation()
  const controls3 = useAnimation()

  useEffect(() => {
    // Sequence for Image 1: entrance → infinite floating
    const animate1 = async () => {
      await controls1.start({ opacity: 1, scale: 1, transition: { duration: 0.8 } })
      controls1.start({
        y: [0, -20, 0],
        rotate: [0, 5, 0],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      })
    }
    // Sequence for Image 2
    const animate2 = async () => {
      await controls2.start({ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2 } })
      controls2.start({
        y: [0, 20, 0],
        rotate: [6, 15, 6],
        transition: { duration: 7, repeat: Infinity, ease: "easeInOut" }
      })
    }
    // Sequence for Image 3
    const animate3 = async () => {
      await controls3.start({ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4 } })
      controls3.start({
        y: [0, -15, 0],
        x: [0, 10, 0],
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
      })
    }

    animate1()
    animate2()
    animate3()
  }, [controls1, controls2, controls3])

  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      {/* Dynamic grid background */}
      <div className="absolute inset-0 grid grid-cols-4 gap-4 p-8 opacity-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-linear-to-r from-blue-500 to-purple-500 rounded-lg"
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Moving Images */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Image 1 - Top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls1}
          className="absolute top-10 right-10 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20"
        >
          <Image
            src="/corporatebranding.avif"
            alt="Portfolio image 1"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Image 2 - Bottom left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls2}
          className="absolute bottom-10 left-10 w-40 h-40 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 rotate-6"
        >
          <Image
            src="/seocompain.avif"
            alt="Portfolio image 2"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Image 3 - Center right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls3}
          className="absolute top-20 left-20 w-32 h-32 overflow-hidden shadow-2xl border-2 border-white/20"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        >
          <Image
            src="/images/portfolio/abstract-3.jpg"
            alt="Portfolio image 3"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Dots / particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 5}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Text Section */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-4 block">
                Featured Work
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Turning Ideas Into{' '}
                <span className="text-blue-400">Visual Stories</span>
              </h1>
              <p className="text-lg text-gray-400 mb-8">
                Browse through our collection of successful projects that have helped brands grow and connect with their audience.
              </p>

              {/* Quick stats */}
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">30+</div>
                  <div className="text-sm text-gray-500">Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">4yrs</div>
                  <div className="text-sm text-gray-500">Experience</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Empty (images in background) */}
          <div className="lg:w-1/2 relative h-96" />
        </div>
      </div>
    </section>
  )
}
