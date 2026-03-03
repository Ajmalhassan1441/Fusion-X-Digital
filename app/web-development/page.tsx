'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '../component/button/Button'
import { FaAward, FaCode, FaReact, FaNodeJs, FaDatabase, FaClock, FaRocket } from 'react-icons/fa'

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Hero Section - Web Developer Profile */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-gray-950 to-blue-950/30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left side - Image (full height) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-full"
            >
              <div className="relative w-full h-full min-h-[600px] rounded-3xl overflow-hidden border-4 border-purple-500/30 shadow-2xl">
                <Image
                  src="/Manzoor Ahmad.jpeg"
                  alt="Manzoor Ahmad"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
            </motion.div>

            {/* Right side - Info (full width) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center h-full"
            >
              <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                Meet Your Developer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Manzoor Ahmad
              </h1>
              <p className="text-xl text-purple-400 mb-6">
                MERN-Stack Web Developer
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                With 7+ years of experience in MERN-stack development, Manzoor specializes in building modern, scalable web applications using the latest technologies.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: FaAward, value: '7+', label: 'Years Exp' },
                  { icon: FaCode, value: '50+', label: 'Projects' },
                  { icon: FaDatabase, value: '30+', label: 'Databases' },
                  { icon: FaClock, value: '24/7', label: 'Support' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                    <stat.icon className="text-purple-400 text-2xl mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button variant="primary" size="large" href="/contact" className="bg-purple-600 hover:bg-purple-700 w-full md:w-auto">
                Work With Manzoor
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
                  { year: '2021 - Present', role: 'Senior Web Developer', company: 'FusionX Digital' },
                  { year: '2018 - 2021', role: 'Full-Stack Developer', company: 'Tech Solutions' },
                  { year: '2016 - 2018', role: 'Frontend Developer', company: 'Creative Studio' },
                ].map((exp, i) => (
                  <div key={i} className="border-l-2 border-purple-500 pl-4">
                    <p className="text-sm text-purple-400">{exp.year}</p>
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
                  { skill: 'React / Next.js', level: 95 },
                  { skill: 'Node.js / Express', level: 90 },
                  { skill: 'TypeScript', level: 90 },
                  { skill: 'MongoDB / PostgreSQL', level: 85 },
                  { skill: 'Tailwind CSS', level: 95 },
                  { skill: 'API Development', level: 90 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{item.skill}</span>
                      <span className="text-purple-400">{item.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Technologies <span className="text-purple-400">Manzoor</span> Works With
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Modern tools and frameworks used to build high-performance web applications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FaReact, name: 'React', color: 'text-blue-400' },
              { icon: FaNodeJs, name: 'Node.js', color: 'text-green-400' },
              { icon: FaDatabase, name: 'MongoDB', color: 'text-green-500' },
              { icon: FaCode, name: 'TypeScript', color: 'text-blue-500' },
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center hover:border-purple-500/30 transition-colors"
              >
                <tech.icon className={`text-5xl ${tech.color} mx-auto mb-3`} />
                <p className="text-white font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Projects Section - WITH CLICKABLE CARDS */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Recent <span className="text-purple-400">Web Projects</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            A few examples of custom web applications built by Manzoor.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* ✅ Project 1 - E-Commerce Platform */}
            <motion.a
              href="https://demo.saleor.io/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative h-64 rounded-xl overflow-hidden block cursor-pointer"
            >
              <Image
                src="/e commerce .png"
                alt="E-Commerce Platform"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold">E-Commerce Platform</h3>
                  <p className="text-purple-400 text-sm">React, Node.js</p>
                </div>
              </div>
            </motion.a>

            {/* ✅ Project 2 - Dashboard App */}
            <motion.a
              href="https://adminlte.io/themes/v3/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative h-64 rounded-xl overflow-hidden block cursor-pointer"
            >
              <Image
                src="/dash bord app .png"
                alt="Dashboard App"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold">Dashboard App</h3>
                  <p className="text-purple-400 text-sm">Next.js, MongoDB</p>
                </div>
              </div>
            </motion.a>

            {/* ✅ Project 3 - Portfolio Website */}
            <motion.a
              href="https://brittanychiang.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative h-64 rounded-xl overflow-hidden block cursor-pointer"
            >
              <Image
                src="/portfolio.png"
                alt="Portfolio Website"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold">Portfolio Website</h3>
                  <p className="text-purple-400 text-sm">React, Tailwind</p>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your <span className="text-purple-400">Dream Project</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let Manzoor turn your idea into a powerful, scalable web application.
            </p>
            <Button variant="primary" size="large" href="/contact" className="bg-purple-600 hover:bg-purple-700 w-full md:w-auto">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}