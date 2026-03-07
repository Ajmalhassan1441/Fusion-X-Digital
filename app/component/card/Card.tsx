'use client'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

interface ProjectCardProps {
  project?: {
    title?: string
    category?: string
    image?: string
  }
  index: number
  inView: boolean
}

export default function ProjectCard({ project, index, inView }: ProjectCardProps) {
  // ✅ Agar project undefined hai to kuch mat dikhao
  if (!project || !project.image) {
    return null
  }

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
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d" as const,
      }}
      className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer"
    >
      <div className="relative h-80 w-full">
        <Image
          src={project.image}
          alt={project.title || 'Project image'}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-blue-400">{project.category}</p>
        </div>
      </div>
    </motion.div>
  )
}
