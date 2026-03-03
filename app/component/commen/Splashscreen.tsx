'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface SplashScreenProps {
  onComplete?: () => void
}

const Splashscreen = ({ onComplete }: SplashScreenProps) => {
  const [showLogo, setShowLogo] = useState(true)
  const [showText, setShowText] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [isVisible, setIsVisible] = useState(true)
  
  const [audio] = useState(typeof Audio !== 'undefined' ? new Audio('/audio/wellcome.mp3') : null)
  const fullText = 'Welcome to FusionX Digital'

  useEffect(() => {
    const logoDuration = setTimeout(() => {
      setShowLogo(false)
      setShowText(true)
      if (audio) {
        audio.play().catch(e => console.log('Audio play failed:', e))
      }
    }, 5000)

    return () => clearTimeout(logoDuration)
  }, [audio])

  useEffect(() => {
    if (!showText) return

    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 150)

    const totalTimer = setTimeout(() => {
      setIsVisible(false)
      if (onComplete) onComplete()
    }, 10000)

    return () => {
      clearInterval(typingInterval)
      clearTimeout(totalTimer)
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }
    }
  }, [showText, audio, onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="text-center">
        {showLogo && (
          <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto animate-bounce">
            <Image
              src="/logo for soft ware house .png"
              alt="FusionX Digital"
              fill
              className="object-contain"
              priority
            />
            <div className="absolute inset-0 animate-ping rounded-full border-4 border-blue-500 opacity-75"></div>
            <div className="absolute inset-0 animate-spin rounded-full border-t-4 border-blue-500"></div>
          </div>
        )}

        {showText && (
          <div className="mt-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {typedText}
              <span className="animate-pulse ml-1 text-blue-500">|</span>
            </h1>
            <p className="mt-4 text-gray-400 text-lg">
              Where Creativity Meets Technology
            </p>
          </div>
        )}
      </div>

      {/* Developer credit - with image positioned to show face */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-4 right-6 flex items-center gap-4 text-gray-500 text-sm"
      >
        {/* بڑی امیج (56x56) with rounded-xl */}
        <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-blue-400/50 flex-shrink-0">
          <Image
            src="/WhatsApp Image 2026-01-23 at 18.18.09 (6).jpeg"
            alt="Ajmal Hassan"
            fill
            className="object-cover object-[0%_25%]" // ✅ 25% نیچے شفٹ
          />
        </div>
        
        {/* Text content */}
        <div className="flex flex-col">
          <div className="text-gray-400 text-base leading-tight">Developed by :</div>
          <div className="text-blue-400 font-semibold text-lg leading-tight">Ajmal Hassan Wattoo</div>
        </div>
      </motion.div>
    </div>
  )
}

export default Splashscreen