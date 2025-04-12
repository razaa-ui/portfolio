"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
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

          {/* Action Figure Image with 3D-like Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <motion.div
              className="relative w-full max-w-md"
              animate={{
                rotateY: [-5, 5, -5],
                rotateX: [2, -2, 2],
                translateZ: [0, 10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 6,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <div className="relative w-full h-auto shadow-2xl rounded-xl overflow-hidden">
                <Image
                  src="/images/action-figure.png"
                  alt="Muhammad Raza Action Figure"
                  width={800}
                  height={1200}
                  className="w-full h-auto"
                  priority
                />

                {/* Shine effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
                  animate={{
                    opacity: [0, 0.1, 0],
                    left: ["-100%", "100%", "100%"],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    repeatDelay: 5,
                  }}
                />
              </div>

              {/* Floating shadow for 3D effect */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 h-8 bg-black/40 rounded-full blur-md"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-700/20 rounded-full blur-xl"></div>
    </section>
  )
}
