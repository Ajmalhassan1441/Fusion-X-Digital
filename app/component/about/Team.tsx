'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaGithub, FaFacebookF } from 'react-icons/fa'
import SectionHeading from '../../component/commen/SectionHeading'

const team = [
  {
    name: 'Shafiq Ahmad',
    role: 'CEO FusionX Digital & Graphic Designer',
    bio: 'Visionary leader with expertise in graphic design and brand strategy. Leading the team with creativity and business acumen.',
    image: '/Shafiq Ahmad.jpg',  // ✅ direct public folder
    social: { linkedin: '#', twitter: '#', facebook: '#' }
  },
  {
    name: 'Haris Aziz',
    role: 'Digital Marketer',
    bio: 'SEO and digital marketing specialist. Helping brands grow their online presence with data-driven strategies.',
    image: '/haris aziz.png',     // ✅ direct public folder
    social: { linkedin: '#', twitter: '#', facebook: '#' }
  },
  {
    name: 'Manzoor Ahmad',
    role: 'Web Developer',
    bio: 'Full-stack web developer with expertise in modern frameworks and responsive design. Building robust web applications.',
    image: '/Manzoor Ahmad.jpeg',   // ✅ direct public folder
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Muzzamil',
    role: 'WordPress Developer',
    bio: 'WordPress specialist creating custom themes, plugins, and optimizing performance for enterprise clients.',
    image: '/Muzzamil.jpg',         // ✅ direct public folder
    social: { linkedin: '#', twitter: '#', github: '#' }
  }
]

export default function Team() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Meet Our Team"
          subtitle="The creative minds behind FusionX Digital"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col items-center text-center">
                
                {/* Image */}
                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-blue-400/20 group-hover:border-blue-400 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Name & Role */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-400 mb-3 font-medium">
                  {member.role}
                </p>
                
                {/* Bio */}
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                  {member.bio}
                </p>
                
                {/* Social Icons */}
                <div className="flex justify-center gap-3 mt-auto">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={18} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                      <FaTwitter size={18} />
                    </a>
                  )}
                  {member.social.facebook && (
                    <a href={member.social.facebook} className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                      <FaFacebookF size={18} />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                      <FaGithub size={18} />
                    </a>
                  )}
                </div>

                {/* Decorative line on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
