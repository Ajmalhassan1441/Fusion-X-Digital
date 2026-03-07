'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import Button from '../../component/button/Button'
import SectionHeading from '../../component/commen/SectionHeading'

const packages = [
  {
    name: 'Starter',
    price: '$499',
    description: 'Perfect for small businesses just getting started',
    features: [
      'Basic Website (5 pages)',
      'Logo Design',
      'Social Media Setup',
      'Basic SEO',
      'Email Support'
    ],
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    name: 'Professional',
    price: '$999',
    description: 'Ideal for growing businesses needing comprehensive solutions',
    features: [
      'Custom Website (10 pages)',
      'Complete Branding Package',
      'Social Media Management (3 months)',
      'Advanced SEO',
      'Priority Support',
      'Monthly Analytics Report'
    ],
    gradient: 'from-purple-500 to-pink-500',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'Custom Web Application',
      'Full Digital Strategy',
      'Dedicated Account Manager',
      '24/7 Priority Support',
      'Custom Features',
      'Team Training'
    ],
    gradient: 'from-orange-500 to-red-500'
  }
]

export default function PricingSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Choose Your Package"
          subtitle="Flexible options to fit your needs and budget"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border ${
                pkg.popular ? 'border-blue-500/50 scale-105 z-10' : 'border-gray-700'
              } hover:border-blue-500/30 transition-all`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-blue-500 to-purple-500 px-4 py-1 rounded-full text-white text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{pkg.price}</span>
                {pkg.price !== 'Custom' && <span className="text-gray-400">/project</span>}
              </div>
              <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>
              
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <FaCheck className="text-green-400 text-sm flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant={pkg.popular ? 'primary' : 'outline'} 
                fullWidth
                href="/contact"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
