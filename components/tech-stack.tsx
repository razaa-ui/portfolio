"use client"

import { motion } from "framer-motion"

const technologies = [
  // Video Editing Tools
  { name: "Premiere Pro", icon: "🎬", color: "bg-purple-800", category: "video" },
  { name: "After Effects", icon: "🎭", color: "bg-blue-600", category: "video" },
  { name: "Final Cut Pro", icon: "✂️", color: "bg-red-500", category: "video" },
  { name: "DaVinci Resolve", icon: "🎞️", color: "bg-red-600", category: "video" },
  { name: "Adobe Audition", icon: "🔊", color: "bg-blue-800", category: "video" },
  { name: "Media Encoder", icon: "📦", color: "bg-purple-500", category: "video" },
  { name: "Logic Pro X", icon: "🎵", color: "bg-gray-700", category: "video" },

  // Graphic Design Tools
  { name: "Photoshop", icon: "🖌️", color: "bg-blue-700", category: "design" },
  { name: "Illustrator", icon: "✏️", color: "bg-orange-600", category: "design" },
  { name: "InDesign", icon: "📰", color: "bg-pink-600", category: "design" },
  { name: "Figma", icon: "🎨", color: "bg-purple-600", category: "design" },
  { name: "Lightroom", icon: "📸", color: "bg-blue-500", category: "design" },
  { name: "XD", icon: "💫", color: "bg-pink-500", category: "design" },
  { name: "Canva", icon: "🖼️", color: "bg-teal-500", category: "design" },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">Tech Stack</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The tools and technologies I use to bring creative visions to life.
          </p>
        </motion.div>

        {/* Video Editing Tools Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Video Editing Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {technologies
              .filter((tech) => tech.category === "video")
              .map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-gray-800 rounded-xl p-6 shadow-lg text-center"
                >
                  <div
                    className={`${tech.color} w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4`}
                  >
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-bold">{tech.name}</h3>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Graphic Design Tools Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Graphic Design Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {technologies
              .filter((tech) => tech.category === "design")
              .map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-gray-800 rounded-xl p-6 shadow-lg text-center"
                >
                  <div
                    className={`${tech.color} w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4`}
                  >
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-bold">{tech.name}</h3>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
