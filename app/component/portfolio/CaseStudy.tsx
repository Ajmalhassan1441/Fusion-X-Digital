'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Button from '../../component/button/Button' 

import { FaArrowRight } from 'react-icons/fa'

export default function CaseStudy() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-r from-blue-900/20 to-purple-900/20 rounded-3xl border border-gray-700 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Content */}
            <div className="p-8 lg:p-12">
              <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                Featured Case Study
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                E-Commerce Platform for Fashion Brand
              </h2>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                We built a custom e-commerce platform for a leading fashion brand that increased their online sales by 300% in just 6 months. The solution includes real-time inventory, payment integration, and a seamless user experience.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <div className="text-2xl font-bold text-blue-400">300%</div>
                  <div className="text-sm text-gray-500">Sales Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">50k+</div>
                  <div className="text-sm text-gray-500">Monthly Visitors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-400">4.9/5</div>
                  <div className="text-sm text-gray-500">User Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-gray-500">Support</div>
                </div>
              </div>
              
              <Button variant="primary" href="/portfolio/ecommerce-case-study">
                <span className="flex items-center gap-2">
                  Read Full Case Study
                  <FaArrowRight />
                </span>
              </Button>
            </div>
            
            {/* Right side - Image */}
            <div className="relative h-80 lg:h-full min-h-[400px]">
              <Image
                src="/fasionbrand.avif"
                alt="Case Study"
                fill
                className="object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/50 lg:bg-gradient-to-l" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
