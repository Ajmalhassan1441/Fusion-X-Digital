'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function FloatingGrid3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // سیٹ اپ
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0a1a)

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 15

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // گرڈ
    const gridHelper = new THREE.GridHelper(30, 20, 0x3366ff, 0x2244aa)
    gridHelper.position.y = -2
    scene.add(gridHelper)

    // اضافی لکیریں
    const linesMaterial = new THREE.LineBasicMaterial({ color: 0x3366ff })
    for (let i = 0; i < 5; i++) {
      const points = []
      points.push(new THREE.Vector3(-10, i * 2 - 4, -5))
      points.push(new THREE.Vector3(10, i * 2 - 4, 5))
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const line = new THREE.Line(geometry, linesMaterial)
      scene.add(line)
    }

    // چمکتے پوائنٹس
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 500
    const posArray = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 30
      posArray[i+1] = (Math.random() - 0.5) * 20
      posArray[i+2] = (Math.random() - 0.5) * 30
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x4488ff,
      size: 0.1,
      transparent: true,
      opacity: 0.6,
    })
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // حرکت
    let time = 0
    const animate = () => {
      requestAnimationFrame(animate)
      time += 0.005

      gridHelper.rotation.y += 0.001
      particlesMesh.rotation.y += 0.0005
      
      camera.position.x = Math.sin(time * 0.2) * 5
      camera.position.z = 15 + Math.cos(time * 0.3) * 2
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }

    animate()

    // ریسائز
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none" />
}