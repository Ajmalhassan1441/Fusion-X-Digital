'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLightbulb, FaPencilAlt, FaCode, FaRocket } from 'react-icons/fa'
import SectionHeading from '../../component/commen/SectionHeading'

const steps = [
  {
    icon: FaLightbulb,
    title: 'Discovery',
    description: 'We start by understanding your vision, goals, and requirements through in-depth consultation.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: FaPencilAlt,
    title: 'Planning',
    description: 'We create a detailed roadmap, wireframes, and strategy tailored to your specific needs.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: FaCode,
    title: 'Development',
    description: 'Our team brings ideas to life using cutting-edge technologies and best practices.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: FaRocket,
    title: 'Launch',
    description: 'We deploy, test, and ensure everything is perfect before going live.',
    color: 'from-green-500 to-green-600'
  }
]

export default function ServiceProcess() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Process"
          subtitle="A systematic approach to deliver excellence"
        />
        
        <div className="relative">
          {/* Full Length Heartbeat Line - Extreme Spikes */}
          <div className="absolute left-0 w-full h-12 hidden lg:block" style={{ top: 'calc(24px + 1rem)' }}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1400 50"
              preserveAspectRatio="none"
              className="absolute inset-0"
            >
              <defs>
                <linearGradient id="heartbeatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#A855F7" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#EC4899" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              
              {/* Extreme ECG Path - Closer Spikes */}
              <motion.path
                d="M0,25 L70,25 L100,0 L130,50 L160,25 L200,25 L230,0 L260,50 L290,25 L330,25 L360,0 L390,50 L420,25 L460,25 L490,0 L520,50 L550,25 L590,25 L620,0 L650,50 L680,25 L720,25 L750,0 L780,50 L810,25 L850,25 L880,0 L910,50 L940,25 L980,25 L1010,0 L1040,50 L1070,25 L1110,25 L1140,0 L1170,50 L1200,25 L1240,25 L1270,0 L1300,50 L1330,25 L1370,25 L1400,0"
                stroke="url(#heartbeatGradient)"
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 1,
                  d: [
                    "M0,25 L70,25 L100,0 L130,50 L160,25 L200,25 L230,0 L260,50 L290,25 L330,25 L360,0 L390,50 L420,25 L460,25 L490,0 L520,50 L550,25 L590,25 L620,0 L650,50 L680,25 L720,25 L750,0 L780,50 L810,25 L850,25 L880,0 L910,50 L940,25 L980,25 L1010,0 L1040,50 L1070,25 L1110,25 L1140,0 L1170,50 L1200,25 L1240,25 L1270,0 L1300,50 L1330,25 L1370,25 L1400,0",
                    "M0,25 L70,25 L100,50 L130,0 L160,25 L200,25 L230,50 L260,0 L290,25 L330,25 L360,50 L390,0 L420,25 L460,25 L490,50 L520,0 L550,25 L590,25 L620,50 L650,0 L680,25 L720,25 L750,50 L780,0 L810,25 L850,25 L880,50 L910,0 L940,25 L980,25 L1010,50 L1040,0 L1070,25 L1110,25 L1140,50 L1170,0 L1200,25 L1240,25 L1270,50 L1300,0 L1330,25 L1370,25 L1400,50"
                  ]
                }}
                transition={{
                  d: {
                    duration: 4, // ⏱️ Slower for dramatic effect
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  },
                  pathLength: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop"
                  }
                }}
              />
              
              {/* Glow effect - Thicker */}
              <motion.path
                d="M0,25 L70,25 L100,0 L130,50 L160,25 L200,25 L230,0 L260,50 L290,25 L330,25 L360,0 L390,50 L420,25 L460,25 L490,0 L520,50 L550,25 L590,25 L620,0 L650,50 L680,25 L720,25 L750,0 L780,50 L810,25 L850,25 L880,0 L910,50 L940,25 L980,25 L1010,0 L1040,50 L1070,25 L1110,25 L1140,0 L1170,50 L1200,25 L1240,25 L1270,0 L1300,50 L1330,25 L1370,25 L1400,0"
                stroke="url(#heartbeatGradient)"
                strokeWidth="8"
                fill="none"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
                style={{ filter: "blur(6px)" }}
              />
            </svg>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step number */}
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm z-10`}>
                    {index + 1}
                  </div>
                  
                  {/* Icon circle */}
                  <div className="relative w-32 h-32 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-700 group hover:border-blue-500/30 transition-colors">
                    <Icon className="text-4xl text-blue-400 group-hover:scale-110 transition-transform" />
                    
                    {/* Pulse effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-ping opacity-75" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}