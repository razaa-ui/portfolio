"use client"
import { motion } from "framer-motion"
import { Film, Palette, Video, Edit, Play } from "lucide-react"

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

          {/* Visual Content - Interactive Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] mx-auto bg-gradient-to-br from-purple-800/50 to-purple-900/80 rounded-xl overflow-hidden shadow-2xl">
              {/* Main Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                {/* Video Camera */}
                <motion.div
                  className="relative mb-8"
                  animate={{
                    rotateY: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 8,
                    ease: "easeInOut",
                  }}
                >
                  <div className="relative w-48 h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-lg"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-black rounded-b-lg"></div>
                    <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-20 h-16 bg-gray-900 rounded-r-lg"></div>
                    <div className="absolute left-[-15px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                    <Video className="w-12 h-12 text-purple-400" />
                    <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-700 rounded-t-lg"></div>
                </motion.div>

                {/* Design Tools */}
                <div className="grid grid-cols-2 gap-6 w-full max-w-xs">
                  <motion.div
                    className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
                  >
                    <Film className="w-10 h-10 text-purple-400 mb-2" />
                    <span className="text-sm font-medium">Video Editing</span>
                  </motion.div>

                  <motion.div
                    className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 0.5, ease: "easeInOut" }}
                  >
                    <Palette className="w-10 h-10 text-purple-400 mb-2" />
                    <span className="text-sm font-medium">Graphic Design</span>
                  </motion.div>

                  <motion.div
                    className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 1, ease: "easeInOut" }}
                  >
                    <Edit className="w-10 h-10 text-purple-400 mb-2" />
                    <span className="text-sm font-medium">Color Grading</span>
                  </motion.div>

                  <motion.div
                    className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 1.5, ease: "easeInOut" }}
                  >
                    <Play className="w-10 h-10 text-purple-400 mb-2" />
                    <span className="text-sm font-medium">Motion Graphics</span>
                  </motion.div>
                </div>
              </div>

              {/* Software Icons */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                <motion.div
                  className="w-12 h-12 bg-purple-700 rounded-md flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5 }}
                >
                  <span className="text-lg font-bold text-white">Pr</span>
                </motion.div>
                <motion.div
                  className="w-12 h-12 bg-blue-600 rounded-md flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, delay: 0.5 }}
                >
                  <span className="text-lg font-bold text-white">Ps</span>
                </motion.div>
                <motion.div
                  className="w-12 h-12 bg-orange-600 rounded-md flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, delay: 1 }}
                >
                  <span className="text-lg font-bold text-white">Ai</span>
                </motion.div>
                <motion.div
                  className="w-12 h-12 bg-blue-500 rounded-md flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, delay: 1.5 }}
                >
                  <span className="text-lg font-bold text-white">Ae</span>
                </motion.div>
              </div>

              {/* Name Plate */}
              <div className="absolute top-6 left-0 right-0 text-center">
                <h3 className="text-white text-xl font-bold">Creative Portfolio</h3>
                <div className="w-24 h-1 bg-purple-400 mx-auto mt-2"></div>
              </div>

              {/* Animated Particles */}
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-purple-400/30"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3 + Math.random() * 2,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-700/20 rounded-full blur-xl"></div>
    </section>
  )
}
