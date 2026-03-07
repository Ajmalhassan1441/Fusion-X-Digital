'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '../component/button/Button'
import { FaAward, FaChartLine, FaUsers, FaRocket, FaClock, FaBullseye } from 'react-icons/fa'

export default function DigitalMarketingPage() {
  return (
    <>
      {/* Hero Section - Digital Marketer Profile */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-gray-950 to-blue-950/30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left side - Image (full height) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-full"
            >
              <div className="relative w-full h-full min-h-[600px] rounded-3xl overflow-hidden border-4 border-green-500/30 shadow-2xl">
                <Image
                  src="/haris aziz.png"
                  alt="Haris Aziz"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
            </motion.div>

            {/* Right side - Info (full width) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center h-full"
            >
              <span className="text-green-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                Meet Your Marketer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Haris Aziz
              </h1>
              <p className="text-xl text-green-400 mb-6">
                Digital Marketing Specialist
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                With over 6 years of experience in SEO, social media, and paid ads, Haris has helped 40+ brands achieve measurable growth and dominate their niche.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: FaAward, value: '6+', label: 'Years Exp' },
                  { icon: FaUsers, value: '40+', label: 'Happy Clients' },
                  { icon: FaRocket, value: '80+', label: 'Campaigns' },
                  { icon: FaClock, value: '24/7', label: 'Support' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center">
                    <stat.icon className="text-green-400 text-2xl mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button variant="primary" size="large" href="/contact" className="bg-green-600 hover:bg-green-700 w-full md:w-auto">
                Work With Haris
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
                  { year: '2021 - Present', role: 'Digital Marketing Specialist', company: 'FusionX Digital' },
                  { year: '2019 - 2021', role: 'SEO Manager', company: 'Growth Agency' },
                  { year: '2017 - 2019', role: 'Social Media Executive', company: 'Brand Solutions' },
                ].map((exp, i) => (
                  <div key={i} className="border-l-2 border-green-500 pl-4">
                    <p className="text-sm text-green-400">{exp.year}</p>
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
                  { skill: 'SEO (On-page/Off-page)', level: 95 },
                  { skill: 'Google Ads', level: 90 },
                  { skill: 'Social Media Marketing', level: 95 },
                  { skill: 'Content Strategy', level: 85 },
                  { skill: 'Email Marketing', level: 80 },
                  { skill: 'Analytics & Reporting', level: 90 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{item.skill}</span>
                      <span className="text-green-400">{item.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                        className="h-full bg-linear-to-r from-green-500 to-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies / Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Recent <span className="text-green-400">Results</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Real numbers from real campaigns – see how Haris helped businesses grow.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: '300%', label: 'Organic Traffic', icon: FaChartLine },
              { metric: '150%', label: 'Conversion Rate', icon: FaBullseye },
              { metric: '200%', label: 'ROI Increase', icon: FaRocket },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 text-center hover:border-green-500/30 transition-colors"
              >
                <item.icon className="text-4xl text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{item.metric}</div>
                <p className="text-gray-400">{item.label}</p>
              </motion.div>
            ))}
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
              Ready to <span className="text-green-400">Grow</span> Your Business?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let Haris create a data-driven marketing strategy that delivers real results.
            </p>
            <Button variant="primary" size="large" href="/contact" className="bg-green-600 hover:bg-green-700">
              Start Your Campaign
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
