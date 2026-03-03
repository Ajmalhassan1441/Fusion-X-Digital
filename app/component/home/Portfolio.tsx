'use client'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeading from '../../component/commen/SectionHeading'
import Button from '../../component/button/Button'
import Image from 'next/image'
import { useRef } from 'react'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: '/onlinestore.avif'
  },
  {
    title: 'Corporate Branding',
    category: 'Graphic Design',
    image: '/corporatebranding.avif'
  },
  {
    title: 'SEO Campaign',
    category: 'Digital Marketing',
    image: '/seocompain.avif'
  }
]

function ProjectCard({ project, index, inView }: any) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = (mouseX / rect.width - 0.5) * 2
    const yPct = (mouseY / rect.height - 0.5) * 2
    x.set(xPct * 50)
    y.set(yPct * 50)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
    >
      <div className="relative h-80 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-blue-400">{project.category}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Recent Work" subtitle="Some of our proudest projects" />
        
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} inView={inView} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="primary" href="/portfolio">View All Projects</Button>
        </div>
      </div>
    </section>
  )
}