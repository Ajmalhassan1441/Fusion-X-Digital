'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '../component/button/Button'
import { FaAward, FaClock, FaHeart, FaRocket } from 'react-icons/fa'

export default function GraphicDesignPage() {
  return (
    <>
      {/* Hero Section - Graphic Designer Profile */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-950 to-purple-950/30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left side - Image (full height) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-full"
            >
              <div className="relative w-full h-full min-h-[600px] rounded-3xl overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <Image
                  src="/Shafiq Ahmad.jpg"
                  alt="Shafiq Ahmad"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
            </motion.div>

            {/* Right side - Info (full width) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center h-full"
            >
              <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                Meet Your Designer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Shafiq Ahmad
              </h1>
              <p className="text-xl text-blue-400 mb-6">
                CEO & Lead Graphic Designer
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                With over 8 years of experience in graphic design and brand strategy, Shafiq has helped 50+ businesses create powerful visual identities that stand out in the market.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: FaAward, value: '8+', label: 'Years Exp' },
                  { icon: FaHeart, value: '50+', label: 'Happy Clients' },
                  { icon: FaRocket, value: '120+', label: 'Projects' },
                  { icon: FaClock, value: '24/7', label: 'Support' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                    <stat.icon className="text-blue-400 text-2xl mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button variant="primary" size="large" href="/contact" className="w-full md:w-auto">
                Work With Shafiq
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Experience</h2>
              <div className="space-y-6">
                {[
                  { year: '2020 - Present', role: 'CEO & Graphic Designer', company: 'FusionX Digital' },
                  { year: '2017 - 2020', role: 'Senior Graphic Designer', company: 'Creative Agency' },
                  { year: '2015 - 2017', role: 'Junior Designer', company: 'Design Studio' },
                ].map((exp, i) => (
                  <div key={i} className="border-l-2 border-blue-500 pl-4">
                    <p className="text-sm text-blue-400">{exp.year}</p>
                    <p className="text-lg font-semibold text-white">{exp.role}</p>
                    <p className="text-gray-500">{exp.company}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Skills & Expertise</h2>
              <div className="space-y-4">
                {[
                  { skill: 'Adobe Photoshop', level: 95 },
                  { skill: 'Adobe Illustrator', level: 90 },
                  { skill: 'Adobe InDesign', level: 85 },
                  { skill: 'Figma', level: 80 },
                  { skill: 'Brand Identity', level: 95 },
                  { skill: 'UI/UX Design', level: 85 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{item.skill}</span>
                      <span className="text-blue-400">{item.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                        className="h-full bg-linear-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Examples Section - With 3 different project names */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Recent <span className="text-blue-400">Work</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative h-64 rounded-xl overflow-hidden"
            >
              <Image
                src="/brand identity .png"
                alt="Project 1"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold">Luxury Brand Identity</h3>
                  <p className="text-blue-400 text-sm">Logo & Branding</p>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative h-64 rounded-xl overflow-hidden"
            >
              <Image
                src="/socail media.png"
                alt="Project 2"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold">Social Media Kit</h3>
                  <p className="text-blue-400 text-sm">Instagram & Facebook</p>
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative h-64 rounded-xl overflow-hidden"
            >
              <Image
                src="/corporate .png"
                alt="Project 3"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold">Corporate Brochure</h3>
                  <p className="text-blue-400 text-sm">Print Design</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Bring Your <span className="text-blue-400">Vision</span> to Life?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let's create something beautiful together. Shafiq is ready to work on your next project.
            </p>
            <Button variant="primary" size="large" href="/contact" className="w-full md:w-auto">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
