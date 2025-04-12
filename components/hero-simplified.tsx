"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, PresentationControls } from "@react-three/drei"

function CreativeToolsModel() {
  const groupRef = useRef()

  // Rotate the model based on mouse position
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[0.1, 0, 0]}>
      {/* Camera/Video Camera */}
      <group position={[0, 0.5, 0]}>
        <mesh castShadow position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 1, 2.5]} />
          <meshStandardMaterial color="#222222" />
        </mesh>

        {/* Lens */}
        <mesh castShadow position={[0, 0, 1.5]}>
          <cylinderGeometry args={[0.4, 0.5, 0.8, 32]} />
          <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Top Handle */}
        <mesh castShadow position={[0, 0.7, 0]}>
          <boxGeometry args={[0.4, 0.4, 1.5]} />
          <meshStandardMaterial color="#333333" />
        </mesh>

        {/* Viewfinder */}
        <mesh castShadow position={[0.6, 0.5, -0.5]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#444444" />
        </mesh>

        {/* Record Light */}
        <mesh castShadow position={[0.6, 0, -1]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* Graphic Design Tools */}
      <group position={[-2, -0.5, 0]} rotation={[0, Math.PI / 4, 0]}>
        {/* Tablet */}
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <boxGeometry args={[2, 0.1, 1.5]} />
          <meshStandardMaterial color="#111111" />
        </mesh>

        {/* Screen */}
        <mesh receiveShadow position={[0, 0.06, 0]}>
          <boxGeometry args={[1.8, 0.02, 1.3]} />
          <meshStandardMaterial color="#7e22ce" emissive="#7e22ce" emissiveIntensity={0.2} />
        </mesh>

        {/* Pen */}
        <mesh castShadow position={[0.7, 0.1, 0.4]} rotation={[0, 0, Math.PI / 6]}>
          <cylinderGeometry args={[0.05, 0.05, 0.8, 16]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Software Icons */}
      <group position={[2, -0.5, 0]}>
        {/* Premiere Pro */}
        <mesh castShadow position={[-0.6, 0, 0]} rotation={[0, -Math.PI / 6, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.1]} />
          <meshStandardMaterial color="#9933CC" />
        </mesh>
        <mesh position={[-0.6, 0, 0.06]} rotation={[0, -Math.PI / 6, 0]}>
          <boxGeometry args={[0.7, 0.7, 0.01]} />
          <meshStandardMaterial color="#7e22ce" emissive="#7e22ce" emissiveIntensity={0.5} />
        </mesh>

        {/* Photoshop */}
        <mesh castShadow position={[0.6, 0, 0]} rotation={[0, Math.PI / 6, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.1]} />
          <meshStandardMaterial color="#00A4E4" />
        </mesh>
        <mesh position={[0.6, 0, 0.06]} rotation={[0, Math.PI / 6, 0]}>
          <boxGeometry args={[0.7, 0.7, 0.01]} />
          <meshStandardMaterial color="#0078d7" emissive="#0078d7" emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* Base Platform */}
      <mesh receiveShadow position={[0, -1, 0]}>
        <cylinderGeometry args={[3, 3, 0.2, 36]} />
        <meshStandardMaterial color="#7e22ce" metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  )
}

// Fallback component for when 3D isn't available
function HeroVisualFallback() {
  return (
    <div className="relative w-full h-[500px] mx-auto">
      <div className="absolute inset-0 bg-purple-800 rounded-xl transform rotate-3 shadow-2xl"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <div className="w-32 h-32 mx-auto bg-purple-600 rounded-full flex items-center justify-center mb-4">
          <span className="text-4xl">🎬</span>
        </div>
        <h3 className="text-xl font-bold">3D Experience</h3>
        <p className="text-sm opacity-70">Loading or not supported</p>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
        <div className="w-16 h-16 bg-white/80 rounded-md flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold text-purple-800">Pr</span>
        </div>
        <div className="w-16 h-16 bg-white/80 rounded-md flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold text-blue-600">Ps</span>
        </div>
        <div className="w-16 h-16 bg-white/80 rounded-md flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold text-orange-600">Ai</span>
        </div>
        <div className="w-16 h-16 bg-white/80 rounded-md flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold text-blue-500">Ae</span>
        </div>
      </div>

      <div className="absolute top-4 left-0 right-0 text-center">
        <h2 className="text-white text-2xl font-bold">Muhammad Raza</h2>
        <p className="text-white/80 text-sm">Video Editor & Graphic Designer</p>
      </div>
    </div>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [canRender3D, setCanRender3D] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check if WebGL is available
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      setCanRender3D(!!gl)
    } catch (e) {
      setCanRender3D(false)
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-purple-900 to-black flex items-center justify-center">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight">
              Muhammad <span className="text-purple-400">Raza</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6">Video Editor & Graphic Designer</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
              Creating stunning visual experiences through professional video editing and graphic design. Transforming
              ideas into captivating visual stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg shadow-purple-700/30"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold py-3 px-8 rounded-full text-lg transition-all"
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* 3D Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px]"
          >
            {mounted && canRender3D ? (
              <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <PresentationControls
                  global
                  rotation={[0, 0, 0]}
                  polar={[-Math.PI / 4, Math.PI / 4]}
                  azimuth={[-Math.PI / 4, Math.PI / 4]}
                  config={{ mass: 2, tension: 500 }}
                  snap={{ mass: 4, tension: 1500 }}
                >
                  <CreativeToolsModel />
                </PresentationControls>

                <Environment preset="studio" />
              </Canvas>
            ) : (
              <HeroVisualFallback />
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-700/20 rounded-full blur-xl"></div>
    </section>
  )
}
