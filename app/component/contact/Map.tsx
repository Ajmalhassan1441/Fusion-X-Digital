'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Map() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative h-96 rounded-2xl overflow-hidden border border-gray-700"
        >
          {/* ✅ Updated Google Maps Embed for Bangla Gogera, Okara */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27210.403621816178!2d73.31400093229042!3d30.95648762809228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39225f0c00000001%3A0x2f70970df9d06e78!2sBangla%20Gogera%2C%20Okara%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
