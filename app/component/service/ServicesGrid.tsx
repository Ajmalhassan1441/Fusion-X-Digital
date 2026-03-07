'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaPalette, 
  FaChartLine, 
  FaWordpress, 
  FaCode,
  FaArrowRight 
} from 'react-icons/fa'
import Button from '../../component/button/Button'  // ✅ Ensure path sahi hai
import SectionHeading from '../../component/commen/SectionHeading'

const services = [
  {
    icon: FaPalette,
    title: 'Graphic Design',
    slug: 'graphic-design',
    description: 'Transform your brand identity with stunning visuals that capture attention and communicate your message effectively.',
    features: [
      'Logo & Branding',
      'Social Media Posts',
      'Brochures & Flyers',
      'Business Cards',
      'UI/UX Design'
    ],
    gradient: 'from-blue-500/20 to-purple-500/20'
  },
  {
    icon: FaChartLine,
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Reach your target audience and grow your business with data-driven marketing strategies that deliver results.',
    features: [
      'SEO Optimization',
      'Social Media Management',
      'Google Ads',
      'Email Marketing',
      'Analytics & Reporting'
    ],
    gradient: 'from-green-500/20 to-blue-500/20'
  },
  {
    icon: FaWordpress,
    title: 'WordPress Development',
    slug: 'wordpress',  // ✅ Folder name check kar lena 
    description: 'Powerful, customizable websites built on WordPress that you can easily manage and update yourself.',
    features: [
      'Custom Themes',
      'Plugin Development',
      'WooCommerce Stores',
      'Speed Optimization',
      'Security & Maintenance'
    ],
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: FaCode,
    title: 'Web Development',
    slug: 'web-development',
    description: 'Custom web applications and websites built with modern technologies for performance and scalability.',
    features: [
      'Custom Websites',
      'Web Applications',
      'E-commerce Solutions',
      'API Development',
      'Database Design'
    ],
    gradient: 'from-orange-500/20 to-red-500/20'
  }
]

export default function ServicesGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="What We Offer"
          subtitle="Comprehensive digital solutions tailored to your needs"
        />
        
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Icon & Gradient */}
                <div className="lg:w-1/3">
                  <div className={`relative w-48 h-48 mx-auto bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center group hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-7xl text-white group-hover:scale-110 transition-transform" />
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity`} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="lg:w-2/3">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* ✅ Button with correct href */}
                  <Button 
                    variant="outline" 
                    href={`/${service.slug}`}
                    className="group"
                  >
                    <span className="flex items-center gap-2">
                      Learn More
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
