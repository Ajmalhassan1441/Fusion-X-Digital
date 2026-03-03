'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  FaHome, 
  FaCogs, 
  FaImages, 
  FaInfoCircle, 
  FaEnvelope
} from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [typedText, setTypedText] = useState('')
  const [hoverCount, setHoverCount] = useState(0)
  const [headerHovered, setHeaderHovered] = useState(false)
  const [brandText, setBrandText] = useState('')
  const pathname = usePathname()

  const fullBrandText = 'FusionX'

  // ✅ Typing effect for brand name (hydration safe)
  useEffect(() => {
    // Client-side only code
    const hasAnimated = sessionStorage.getItem('brandAnimated')
    
    if (!hasAnimated) {
      let index = 0
      const interval = setInterval(() => {
        setBrandText(fullBrandText.slice(0, index + 1))
        index++
        if (index === fullBrandText.length) {
          clearInterval(interval)
          sessionStorage.setItem('brandAnimated', 'true')
        }
      }, 150)
      return () => clearInterval(interval)
    } else {
      setBrandText(fullBrandText)
    }
  }, [])

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/', icon: FaHome },
    { name: 'Services', path: '/service', icon: FaCogs },
    { name: 'Portfolio', path: '/portfolio', icon: FaImages },
    { name: 'About', path: '/about', icon: FaInfoCircle },
    { name: 'Contact', path: '/contact', icon: FaEnvelope },
  ]

  // Typing effect on hover for menu items
  useEffect(() => {
    if (!hoveredItem) {
      setTypedText('')
      return
    }

    let index = 0
    setTypedText('')
    
    const typingInterval = setInterval(() => {
      if (index < hoveredItem.length) {
        setTypedText(hoveredItem.substring(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [hoveredItem])

  // Handle header hover for cyclic animations
  const handleHeaderHover = () => {
    setHeaderHovered(true)
    setHoverCount(prev => (prev + 1) % 10)
  }

  const handleHeaderLeave = () => {
    setHeaderHovered(false)
  }

  // Get animation class based on hover count
  const getHoverAnimation = () => {
    if (!headerHovered) return ''
    
    const animations = [
      'animate-header-pulse',
      'animate-header-shake',
      'animate-header-glow',
      'animate-header-float',
      'animate-header-spin-pulse',
      'animate-header-rainbow',
      'animate-header-wobble',
      'animate-header-flip',
      'animate-header-bounce',
      'animate-header-shimmer'
    ]
    return animations[hoverCount]
  }

  return (
    <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] max-w-6xl transition-all duration-500 ${
      scrolled ? 'top-4' : 'top-6'
    }`}>
      <div 
        className={`
          relative bg-transparent
          rounded-2xl border border-white/20
          shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
          transition-all duration-500
          before:absolute before:inset-0 before:-z-10 
          before:rounded-2xl before:bg-gradient-to-r 
          before:from-blue-500/20 before:via-purple-500/20 before:to-blue-500/20
          before:blur-xl before:opacity-0 
          before:transition-opacity before:duration-500
          overflow-visible
          ${getHoverAnimation()}
        `}
        onMouseEnter={handleHeaderHover}
        onMouseLeave={handleHeaderLeave}
      >
        <nav className="relative px-6 py-4">
          <div className="flex justify-between items-center">
            {/* LOGO + TYPING TEXT */}
            <Link href="/" className="group relative flex items-center gap-3">
              {/* LOGO - exactly as per your size and spacing */}
              <div className="relative w-12 h-12 mt-1 mb-1 ml-1 overflow-visible">
                <Image
                  src="/logo for soft ware house .png"
                  alt="FusionX Digital"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* TYPING BRAND NAME */}
              <div className="text-2xl font-bold text-white">
                <span>{brandText}</span>
                {brandText.length < fullBrandText.length ? (
                  <span className="animate-pulse ml-0.5 text-blue-400">|</span>
                ) : (
                  <span className="text-blue-400"> Digital</span>
                )}
              </div>
              
              {/* Glow effect on hover */}
              <span className="absolute inset-0 bg-blue-500/20 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
            </Link>

            {/* Desktop Menu with Icons */}
            <ul className="hidden md:flex items-center space-x-3">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.path
                
                return (
                  <li key={item.path} className="relative">
                    <Link
                      href={item.path}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`
                        relative flex items-center justify-center
                        w-14 h-14 rounded-xl text-xl
                        transition-all duration-300 group
                        hover:-translate-y-1
                        ${isActive 
                          ? 'text-blue-400 bg-blue-500/10' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }
                      `}
                    >
                      <Icon className="relative z-10 text-2xl" />
                      
                      {/* Background effect on hover/active */}
                      <span className={`
                        absolute inset-0 rounded-xl bg-gradient-to-r 
                        from-blue-500/10 to-purple-500/10 
                        transition-opacity duration-300
                        ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                      `} />
                    </Link>

                    {/* Typing tooltip on hover */}
                    {hoveredItem === item.name && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap z-50">
                        <div className="relative">
                          <div className="bg-gray-900 text-blue-400 text-sm font-medium px-4 py-2 rounded-full border border-blue-500/30 shadow-lg">
                            {typedText}
                            <span className="animate-pulse ml-0.5 text-blue-400">|</span>
                          </div>
                          {/* Arrow pointing down */}
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-gray-900 border-r border-b border-blue-500/30 transform rotate-45" />
                        </div>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>

            {/* Mobile Menu Button with animation */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col items-center justify-center gap-1.5">
                <span className={`block w-5 h-0.5 bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
              </div>
            </button>
          </div>

          {/* Mobile Menu with slide animation */}
          <div className={`
            md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
          `}>
            <div className="space-y-2 pb-4">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.path
                
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                      transform transition-all duration-300
                      hover:translate-x-2
                      ${isActive 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    <Icon className="text-lg" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}