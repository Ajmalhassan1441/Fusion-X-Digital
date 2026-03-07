'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '../component/button/Button'
import { 
  FaAward, FaWordpress, FaPlug, FaClock, 
  FaInstagram, FaFacebookF, FaGithub, FaLinkedinIn 
} from 'react-icons/fa'

export default function WordPressPage() {
  return (
    <>
      {/* Hero Section - WordPress Developer Profile */}
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
                  src="/Muzzamil.jpg"
                  alt="Muzzamil"
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
                Meet Your Developer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Muzzamil
              </h1>
              <p className="text-xl text-blue-400 mb-6">
                WordPress Developer
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                With 5+ years of experience in WordPress, Muzzamil specializes in custom themes, plugins, and high-performance websites that are easy to manage.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: FaAward, value: '5+', label: 'Years Exp' },
                  { icon: FaWordpress, value: '30+', label: 'Websites' },
                  { icon: FaPlug, value: '20+', label: 'Plugins' },
                  { icon: FaClock, value: '24/7', label: 'Support' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                    <stat.icon className="text-blue-400 text-2xl mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Social Media Icons with Links */}
              <div className="flex items-center gap-4 mb-6">
                <motion.a
                  href="https://www.instagram.com/bhattimuzamel?utm_source=qr&igsh=bWV5bTJjcHZ4aWJ3"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <FaInstagram size={20} />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/share/1DsaDSz4g1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <FaFacebookF size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/muhammadmuzamel"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/muhammad-muzamel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <FaLinkedinIn size={20} />
                </motion.a>
              </div>

              <Button variant="primary" size="large" href="/contact" className="w-full md:w-auto">
                Work With Muzzamil
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
                  { year: '2022 - Present', role: 'WordPress Developer', company: 'FusionX Digital' },
                  { year: '2020 - 2022', role: 'Junior WordPress Developer', company: 'Web Solutions' },
                  { year: '2018 - 2020', role: 'Freelance WordPress Developer', company: 'Self-Employed' },
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
                  { skill: 'Custom Theme Development', level: 95 },
                  { skill: 'Plugin Development', level: 90 },
                  { skill: 'WooCommerce', level: 95 },
                  { skill: 'PHP/MySQL', level: 90 },
                  { skill: 'Page Builders (Elementor)', level: 95 },
                  { skill: 'Performance Optimization', level: 85 },
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

      {/* Portfolio / Projects Section - WITH CLICKABLE CARDS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Recent <span className="text-blue-400">WordPress Projects</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            A few examples of custom WordPress websites built by Muzzamil.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* ✅ Project 1 - TechCrunch */}
            <motion.a
              href="https://techcrunch.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative h-64 rounded-xl overflow-hidden block cursor-pointer"
            >
              <Image
                src="/tech .png"
                alt="TechCrunch"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold">TechCrunch</h3>
                  <p className="text-blue-400 text-sm">News Website</p>
                </div>
              </div>
            </motion.a>

            {/* ✅ Project 2 - BBC America */}
            <motion.a
              href="https://www.bbcamerica.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative h-64 rounded-xl overflow-hidden block cursor-pointer"
            >
              <Image
                src="/bbc .png"
                alt="BBC America"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold">BBC America</h3>
                  <p className="text-blue-400 text-sm">Entertainment Portal</p>
                </div>
              </div>
            </motion.a>

            {/* ✅ Project 3 - Sony Music */}
            <motion.a
              href="https://www.sonymusic.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative h-64 rounded-xl overflow-hidden block cursor-pointer"
            >
              <Image
                src="/sony music .png"
                alt="Sony Music"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold">Sony Music</h3>
                  <p className="text-blue-400 text-sm">Music Industry</p>
                </div>
              </div>
            </motion.a>
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
              Need a Powerful <span className="text-blue-400">WordPress</span> Website?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let Muzzamil build a custom solution tailored to your business needs.
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
