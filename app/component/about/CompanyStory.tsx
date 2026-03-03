'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { FaQuoteLeft, FaRocket, FaUsers, FaTrophy, FaHeart } from 'react-icons/fa'

// Counter Component
const Counter = ({ value, duration = 2, suffix = '' }: { value: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (!inView) return

    let start = 0
    const increment = value / (duration * 60) // 60fps
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

export default function CompanyStory() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const milestones = [
    { year: '2024', event: 'FusionX Digital Founded', icon: FaRocket },
    { year: '2025', event: '50+ Projects Completed', icon: FaTrophy },
    { year: '2026', event: '30+ Happy Clients', icon: FaUsers },
  ]

  const stats = [
    { icon: FaRocket, value: 50, suffix: '+', label: 'Projects' },
    { icon: FaUsers, value: 30, suffix: '+', label: 'Clients' },
    { icon: FaHeart, value: 100, suffix: '%', label: 'Satisfaction' },
    { icon: FaTrophy, value: 4, suffix: '+', label: 'Years' },
  ]

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              From <span className="text-blue-400">Vision</span> to{' '}
              <span className="text-blue-400">Reality</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
          </motion.div>

          {/* Main Content - Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12 mb-12"
          >
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                <span className="text-2xl font-bold text-blue-400 mr-2">FusionX Digital</span> 
                was born from a simple idea: to provide businesses with comprehensive digital 
                solutions under one roof. Founded in 2024 by{' '}
                <span className="text-blue-400 font-semibold">Ajmal Hassan</span>, 
                we started with a team of 4 passionate individuals who believed in the 
                power of creativity and technology.
              </p>
              
              <p>
                Today, we've grown into a full-service digital agency helping clients 
                across Pakistan and beyond to establish their online presence, connect 
                with their audience, and achieve their business goals. Our journey has 
                been driven by curiosity, dedication, and an unwavering commitment to 
                excellence.
              </p>
            </div>

            {/* Stats Grid with Counting Numbers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="text-3xl text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline / Milestones */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {milestones.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="relative bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 text-center group hover:border-blue-500/30 transition-all"
                >
                  {/* Year with line */}
                  <div className="relative mb-4">
                    <div className="text-3xl font-bold text-blue-400">{item.year}</div>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-transparent opacity-50" />
                  </div>
                  
                  <Icon className="text-4xl text-gray-600 group-hover:text-blue-400 mx-auto mb-3 transition-colors" />
                  <p className="text-white font-medium">{item.event}</p>
                </div>
              )
            })}
          </motion.div>

          {/* Quote - More Prominent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <FaQuoteLeft className="text-blue-400/30 text-6xl mb-4" />
              <p className="text-xl md:text-2xl text-gray-200 italic leading-relaxed">
                "Our name 'FusionX' represents our core philosophy: the fusion of creative 
                design and cutting-edge technology to deliver exceptional results."
              </p>
              <div className="mt-4 flex items-center justify-end gap-2">
                <div className="w-12 h-0.5 bg-blue-400" />
                <span className="text-blue-400 font-medium">Ajmal Hassan</span>
                <span className="text-gray-500 text-sm">, Founder</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}