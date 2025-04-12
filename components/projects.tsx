"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, ExternalLink, Palette } from "lucide-react"
import Image from "next/image"
import { url } from "inspector"

const projects = [
  {
    id: 1,
    title: "Vlogs / Lifestyle",
    category: "video",
    image: "https://images.unsplash.com/photo-1630797160666-38e8c5ba44c1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmxvZ2dpbmd8ZW58MHx8MHx8fDA%3D", // <-- replace this with your actual image path
    description: "Energetic vlog capturing scenic travel views, candid lifestyle moments, and immersive soundscapes.",
    tags: ["Premiere Pro", "After Effects", "Color Grading"],
    url: "https://drive.google.com/drive/folders/1hFCPXwEoCiIINr2DlJ8FBD3BhHWc8_NS"
  },
  
  {
    id: 2,
    title: "Podcast Episode Highlight",
    category: "video",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Crisp, clean podcast edit featuring multiple camera angles, clear audio, and animated captions for social sharing.",
    tags: ["Podcast Editing", "Multi-Cam", "Captions"],
    url: "https://drive.google.com/drive/folders/12f7JvB-2qHyCvJ2_xUixx9Wsu_2tlwO2"
  },
  
  {
    id: 3,
    title: "Geopolitical Analysis Video",
    category: "video",
    image: "https://images.pexels.com/photos/31582769/pexels-photo-31582769/free-photo-of-protest-in-tbilisi-with-georgian-and-eu-flags.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "In-depth geopolitical video covering global conflicts, territorial disputes, and international diplomacy with animated maps and voiceovers.",
    tags: ["After Effects", "Motion Graphics", "Voiceover"],
    url: "https://drive.google.com/drive/folders/1XLQ-S4P8AAAkQDvTaJThz-Fm6fukOz6V"
  },
  
  {
    id: 4,
    title: "Football Match Highlights & Edits",
    category: "video",
    image: "https://cdn.britannica.com/31/183231-050-8D8EB720/Carli-Lloyd-penalty-goal-semifinal-match-Germany-2015.jpg",
    description: "Fast-paced football highlight compilation featuring goals, tackles, and cinematic slow-motion edits with crowd atmosphere.",
    tags: ["Sports Editing", "Slow Motion", "Match Highlights"],
    url: "https://drive.google.com/drive/folders/1U6WYCK8rxo03HbL8wvqQbm-M5oKGBTyu"
  },
  
  {
    id: 5,
    title: "Product Commercial Edit",
    category: "video",
    image: "https://png.pngtree.com/template/20221227/ourmid/pngtree-cosmetics-or-skin-care-product-ads-with-bottle-image_1911800.jpg",
    description: "Clean and engaging product commercial featuring crisp shots, smooth transitions, and modern motion graphics to boost brand appeal.",
    tags: ["Product Video", "Motion Graphics", "Cinematic Edits"],
    url: "https://drive.google.com/drive/folders/12fq98OgTaKqD-BGN5Jcbe7CGml1CHbNs"
  },
  
  {
    id: 6,
    title: "NBA/NFL Sports Highlight Edit",
    category: "video",
    image: "data:image/jpeg;base64,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",
    description: "High-energy sports highlight reel featuring slam dunks, touchdown plays, fast transitions, and hype music synced with crowd reactions.",
    tags: ["Sports Editing", "Transitions", "Sound Design"],
    url: "https://drive.google.com/drive/folders/1JNAqEtDEGlOxRZUef9oCWg4LWQU3ptrc"
  }
  
]

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">My Projects</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A selection of my best work in video editing and graphic design.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === "all" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("video")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === "video" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              <Play className="inline-block w-4 h-4 mr-1" />
              Video Editing
            </button>
            <button
              onClick={() => setFilter("design")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === "design" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              <Palette className="inline-block w-4 h-4 mr-1" />
              Graphic Design
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
            >
          <div className="relative h-60 overflow-hidden">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-purple-900 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.category === "video" ? (
                        <Play className="w-6 h-6 text-purple-700" />
                      ) : (
                        <ExternalLink className="w-6 h-6 text-purple-700" />
                      )}
                    </div>
                  </div>
                </a>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
