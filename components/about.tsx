"use client"

import { motion } from "framer-motion"
import { Film, Palette } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I blend creative video editing with graphic design to create immersive visual experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <div className="bg-purple-700 p-3 rounded-lg mr-4">
                <Film className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Video Editing</h3>
            </div>
            <p className="text-gray-300 mb-6">
              With over 5 years of experience in professional video editing, I specialize in creating compelling visual
              narratives that engage and inspire audiences.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span>Cinematic color grading</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span>Motion graphics & VFX</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span>Sound design & audio mixing</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span>Narrative storytelling</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <div className="bg-purple-700 p-3 rounded-lg mr-4">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Graphic Design</h3>
            </div>
            <p className="text-gray-300 mb-6">
              I create visually stunning designs that communicate effectively and leave a lasting impression on viewers.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span>Brand identity & logo design</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span>Social media graphics</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span>Print & digital marketing materials</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span>UI/UX design for digital platforms</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
