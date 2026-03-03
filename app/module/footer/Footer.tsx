'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaArrowRight 
} from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Main navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/service' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  // 4 main services with their own detail pages
  const serviceLinks = [
    { name: 'Graphic Design', href: '/graphic-design' },
    { name: 'Digital Marketing', href: '/digital-marketing' },
    { name: 'WordPress Development', href: '/wordpress' },
    { name: 'Web Development', href: '/web-development' },
  ]

  const socials = [
    { icon: FaFacebookF, href: '#', color: 'hover:bg-blue-600' },
    { icon: FaTwitter, href: '#', color: 'hover:bg-sky-500' },
    { icon: FaLinkedinIn, href: '#', color: 'hover:bg-blue-700' },
    { icon: FaInstagram, href: '#', color: 'hover:bg-pink-600' },
  ]

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800 pt-20 pb-12 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, #3b82f6 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, #8b5cf6 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, #ec4899 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, #3b82f6 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Stay in the <span className="text-blue-400">Loop</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 mb-6"
          >
            Subscribe to get updates on our latest projects and insights.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium whitespace-nowrap">
              Subscribe
            </button>
          </motion.div>
        </div>

        {/* Links Grid - Now with 5 columns on large screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">
                FusionX<span className="text-blue-400">Digital</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm mb-4">
              Okara, Pakistan
            </p>
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all ${social.color}`}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services - New Column with 4 main services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-500 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <FaArrowRight className="opacity-0 group-hover:opacity-100 text-blue-400 text-xs" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-500 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <FaArrowRight className="opacity-0 group-hover:opacity-100 text-blue-400 text-xs" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-500">info@fusionxdigital.com</li>
              <li className="text-gray-500">+92 317 569 9916</li>
              <li className="text-gray-500">Bangla Gogera, Okara</li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Working Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-500">Mon-Fri: 9am - 6pm</li>
              <li className="text-gray-500">Sat: 10am - 4pm</li>
              <li className="text-gray-500">Sun: Closed</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-600 text-sm">
          © {currentYear} FusionX Digital. Built with ❤️ in Pakistan.
        </div>
      </div>
    </footer>
  )
}