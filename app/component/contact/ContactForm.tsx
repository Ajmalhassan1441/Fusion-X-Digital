'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Button from '../../component/button/Button'
import { FaUser, FaEnvelope, FaPhone, FaComment, FaArrowLeft } from 'react-icons/fa'

export default function ContactForm() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1500)
  }

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {!showForm ? (
                /* Logo Card - Center screen */
                <motion.div
                  key="logo"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center cursor-pointer min-h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 shadow-2xl"
                  onClick={() => setShowForm(true)}
                >
                  <motion.div
                    layoutId="logo"
                    className="relative w-40 h-40 mb-8"
                  >
                    <Image
                      src="/logo for soft ware house .png"
                      alt="FusionX Digital"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </motion.div>
                  <motion.h3 
                    layoutId="title"
                    className="text-4xl font-bold text-white mb-4"
                  >
                    Contact <span className="text-blue-400">Us</span>
                  </motion.h3>
                  <motion.p 
                    layoutId="subtitle"
                    className="text-gray-400 text-center mb-6 max-w-md text-lg"
                  >
                    Click anywhere to send us a message
                  </motion.p>
                  <motion.div 
                    layoutId="icon"
                    className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center animate-bounce"
                  >
                    <FaComment className="text-blue-400 text-3xl" />
                  </motion.div>
                </motion.div>
              ) : (
                /* Form with Logo on Top - Split Design */
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Back button */}
                  <button
                    onClick={() => setShowForm(false)}
                    className="absolute -top-12 left-0 flex items-center gap-2 text-gray-400 hover:text-white transition-colors z-20"
                  >
                    <FaArrowLeft size={16} />
                    <span>Back</span>
                  </button>

                  {/* Split Card */}
                  <div className="grid md:grid-cols-2 gap-0 bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
                    
                    {/* Left Side - Gradient with Logo */}
                    <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-12 flex flex-col items-center justify-center min-h-[500px]">
                      <div className="absolute inset-0 bg-black/20" />
                      <motion.div
                        layoutId="logo"
                        className="relative w-32 h-32 mb-6 z-10"
                      >
                        <Image
                          src="/logo for soft ware house .png"
                          alt="FusionX Digital"
                          fill
                          className="object-contain"
                          priority
                        />
                      </motion.div>
                      <motion.h2 
                        layoutId="title"
                        className="text-3xl font-bold text-white mb-4 text-center z-10"
                      >
                        Get In Touch
                      </motion.h2>
                      <motion.p 
                        layoutId="subtitle"
                        className="text-white/80 text-center mb-6 max-w-md z-10 text-lg"
                      >
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                      </motion.p>
                      <motion.div 
                        layoutId="icon"
                        className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center z-10"
                      >
                        <FaComment className="text-white text-2xl" />
                      </motion.div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
                      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-gray-900 p-12">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="w-full bg-transparent border-b-2 border-gray-700 py-3 px-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                          />
                          <FaUser className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                        </div>
                        
                        {/* Email Field */}
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="w-full bg-transparent border-b-2 border-gray-700 py-3 px-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                          />
                          <FaEnvelope className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                        </div>
                        
                        {/* Phone Field */}
                        <div className="relative">
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone (optional)"
                            className="w-full bg-transparent border-b-2 border-gray-700 py-3 px-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                          />
                          <FaPhone className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                        </div>
                        
                        {/* Message Field */}
                        <div className="relative">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                            rows={4}
                            className="w-full bg-transparent border-b-2 border-gray-700 py-3 px-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                          />
                          <FaComment className="absolute right-2 top-5 text-gray-500 text-sm" />
                        </div>
                        
                        {/* Submit Button */}
                        <Button
                          type="submit"
                          variant="primary"
                          size="large"
                          fullWidth
                          disabled={isSubmitting}
                          className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0"
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                        
                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-green-400 text-center bg-green-500/10 py-3 rounded-lg"
                          >
                            Message sent successfully!
                          </motion.div>
                        )}
                        
                        {submitStatus === 'error' && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-400 text-center bg-red-500/10 py-3 rounded-lg"
                          >
                            Something went wrong. Please try again.
                          </motion.div>
                        )}
                      </form>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}