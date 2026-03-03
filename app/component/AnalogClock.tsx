'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function AnalogClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000) // Update every second

    return () => clearInterval(timer)
  }, [])

  // Calculate angles
  const seconds = time.getSeconds()
  const minutes = time.getMinutes() + seconds / 60
  const hours = time.getHours() % 12 + minutes / 60

  const secondAngle = seconds * 6 // 360° / 60 = 6° per second
  const minuteAngle = minutes * 6 // 360° / 60 = 6° per minute
  const hourAngle = hours * 30 // 360° / 12 = 30° per hour

  // Numbers for clock face
  const numbers = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  return (
    <div className="flex flex-col items-center mt-4 mb-2">
      <div className="relative w-32 h-32 rounded-full bg-gray-800 border-4 border-blue-500/30 shadow-xl">
        {/* Clock face numbers */}
        {numbers.map((num, index) => {
          const angle = (index * 30 - 90) * (Math.PI / 180) // -90 to start at 12 o'clock
          const radius = 45 // Distance from center
          const x = 64 + radius * Math.cos(angle) - 8
          const y = 64 + radius * Math.sin(angle) - 8
          
          return (
            <div
              key={num}
              className="absolute text-xs font-bold text-gray-300"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {num}
            </div>
          )
        })}

        {/* Center dot */}
        <div className="absolute left-1/2 top-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20" />

        {/* Hour hand */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-1 h-8 bg-white rounded-full origin-bottom transform -translate-x-1/2"
          style={{ 
            rotate: `${hourAngle}deg`,
            marginTop: '-32px' // Center point adjustment
          }}
          animate={{ rotate: `${hourAngle}deg` }}
          transition={{ duration: 0.5, ease: "linear" }}
        />

        {/* Minute hand */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-0.5 h-12 bg-blue-400 rounded-full origin-bottom transform -translate-x-1/2"
          style={{ 
            rotate: `${minuteAngle}deg`,
            marginTop: '-48px'
          }}
          animate={{ rotate: `${minuteAngle}deg` }}
          transition={{ duration: 0.5, ease: "linear" }}
        />

        {/* Second hand */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-0.5 h-14 bg-red-400 rounded-full origin-bottom transform -translate-x-1/2 z-10"
          style={{ 
            rotate: `${secondAngle}deg`,
            marginTop: '-56px'
          }}
          animate={{ rotate: `${secondAngle}deg` }}
          transition={{ duration: 0.5, ease: "linear" }}
        />
      </div>

      {/* Digital time display below clock */}
      <div className="text-xs text-gray-400 mt-2">
        {time.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          second: '2-digit',
          hour12: true 
        })}
      </div>
    </div>
  )
}