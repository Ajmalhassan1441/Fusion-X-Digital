'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import AnalogClock from '../../component/AnalogClock'

const contactDetails = [
  {
    icon: FaMapMarkerAlt,
    title: 'Visit Us',
    details: ['123 Main Street', 'Lahore, Pakistan', '54000'],
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    icon: FaPhone,
    title: 'Call Us',
    details: ['+92 300 1234567', '+92 42 1234567'],
    color: 'from-green-500/20 to-green-600/20'
  },
  {
    icon: FaEnvelope,
    title: 'Email Us',
    details: ['info@fusionxdigital.com', 'support@fusionxdigital.com'],
    color: 'from-purple-500/20 to-purple-600/20'
  },
  {
    icon: FaClock,
    title: 'Working Hours',
    details: [], // Will be populated dynamically
    color: 'from-orange-500/20 to-orange-600/20'
  }
]

export default function ContactInfo() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [currentTime, setCurrentTime] = useState(new Date())
  const [status, setStatus] = useState('')

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000) // Update every second for clock

    return () => clearInterval(timer)
  }, [])

  // Check if open or closed
  useEffect(() => {
    const day = currentTime.getDay()
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const currentMinutes = hours * 60 + minutes

    const workingHours = {
      monday: { open: 9 * 60, close: 18 * 60 },
      tuesday: { open: 9 * 60, close: 18 * 60 },
      wednesday: { open: 9 * 60, close: 18 * 60 },
      thursday: { open: 9 * 60, close: 18 * 60 },
      friday: { open: 9 * 60, close: 18 * 60 },
      saturday: { open: 10 * 60, close: 16 * 60 },
      sunday: { open: null, close: null }
    }

    let statusText = ''

    switch(day) {
      case 0:
        statusText = 'Closed Today'
        break
      case 6:
        if (workingHours.saturday.open && workingHours.saturday.close) {
          const isOpen = currentMinutes >= workingHours.saturday.open && 
                         currentMinutes < workingHours.saturday.close
          statusText = isOpen ? 'Open Now' : 'Closed Now'
        }
        break
      default:
        const weekday = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'][day - 1]
        const hours = workingHours[weekday as keyof typeof workingHours]
        if (hours.open && hours.close) {
          const isOpen = currentMinutes >= hours.open && currentMinutes < hours.close
          statusText = isOpen ? 'Open Now' : 'Closed Now'
        }
    }

    setStatus(statusText)
  }, [currentTime])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const getDayName = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long' })
  }

  const workingDetails = [
    `Monday - Friday: 9am - 6pm`,
    `Saturday: 10am - 4pm`,
    `Sunday: Closed`,
  ]

  contactDetails[3].details = workingDetails

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* DNA Monogram Line - Hide on mobile */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 z-0">
        <svg className="absolute inset-0 w-12 -ml-6 h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="helixGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M 6 0 Q 12 50, 6 100 Q 0 150, 6 200 Q 12 250, 6 300 Q 0 350, 6 400 Q 12 450, 6 500 Q 0 550, 6 600"
            stroke="url(#helixGradient)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.path
            d="M 18 0 Q 12 50, 18 100 Q 24 150, 18 200 Q 12 250, 18 300 Q 24 350, 18 400 Q 12 450, 18 500 Q 24 550, 18 600"
            stroke="url(#helixGradient)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
          
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={i}
              x1="6"
              y1={i * 50 + 25}
              x2="18"
              y2={i * 50 + 25}
              stroke="url(#helixGradient)"
              strokeWidth="0.8"
              strokeDasharray="2 4"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative max-w-4xl mx-auto">
          {contactDetails.map((item, index) => {
            const Icon = item.icon
            const isWorkingHours = index === 3

            return (
              <div key={index} className="relative mb-12 lg:mb-0 lg:min-h-70">
                {/* Number Circle - Hide on mobile, show on desktop */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg border-2 border-white/20 animate-pulse">
                    {index + 1}
                  </div>
                </div>

                {/* Cards - Stack vertically on mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="w-full lg:w-[calc(50%-3.75rem)] lg:absolute lg:top-0 lg:left-1/2 lg:ml-12"
                  style={{
                    ...(index % 2 === 0 ? { 
                      left: '50%', 
                      marginLeft: '3rem' 
                    } : { 
                      right: '50%', 
                      marginRight: '3rem' 
                    })
                  }}
                >
                  <div className="group relative">
                    <div className={`absolute inset-0 bg-linear-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                    
                    <div className="relative">
                      {/* Point / Nok - Hide on mobile */}
                      <div className={`
                        hidden lg:block absolute top-1/2 -translate-y-1/2 
                        ${index % 2 === 0 ? '-left-3' : '-right-3'}
                        w-0 h-0 
                        border-y-8 border-y-transparent
                        ${index % 2 === 0 
                          ? 'border-r-8 border-r-gray-800 group-hover:border-r-gray-700' 
                          : 'border-l-8 border-l-gray-800 group-hover:border-l-gray-700'
                        }
                        transition-colors duration-300
                      `} />
                      
                      {/* Main card */}
                      <div className="relative bg-gray-800/90 backdrop-blur-sm p-6 border border-gray-700 group-hover:border-blue-500/30 transition-all duration-300 rounded-2xl">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-4xl text-blue-400 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                            <Icon />
                          </div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        
                        {item.details.map((line, i) => (
                          <p key={i} className="text-gray-400 text-sm mb-1 wrap-break-word">
                            {line}
                          </p>
                        ))}

                        {isWorkingHours && (
                          <>
                            <div className="mt-4">
                              <AnalogClock />
                            </div>
                            <div className="text-center mt-4">
                              <p className="text-blue-400 text-sm font-medium wrap-break-word">
                                {getDayName(currentTime)} {formatTime(currentTime)}
                              </p>
                              <p className={`text-sm font-semibold mt-1 wrap-break-word ${
                                status === 'Open Now' 
                                  ? 'text-green-400 animate-pulse' 
                                  : status === 'Closed Today'
                                  ? 'text-red-400'
                                  : 'text-orange-400'
                              }`}>
                                {status}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Floating particles for helix effect */}
      <div className="absolute left-1/2 top-0 bottom-0 w-40 transform -translate-x-1/2 pointer-events-none overflow-hidden opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.sin(i) * 15 + 20}px`,
              top: `${(i / 20) * 100}%`,
            }}
            animate={{
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.sin(i) * 2,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>
    </section>
  )
}
