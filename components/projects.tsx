"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Vlogs / Lifestyle",
    category: "video",
    image:
      "https://images.unsplash.com/photo-1630797160666-38e8c5ba44c1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmxvZ2dpbmd8ZW58MHx8MHx8fDA%3D", // <-- replace this with your actual image path
    description: "Energetic vlog capturing scenic travel views, candid lifestyle moments, and immersive soundscapes.",
    tags: ["Premiere Pro", "After Effects", "Color Grading"],
    url: "https://drive.google.com/drive/folders/1hFCPXwEoCiIINr2DlJ8FBD3BhHWc8_NS",
  },

  {
    id: 2,
    title: "Podcast Episode Highlight",
    category: "video",
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Crisp, clean podcast edit featuring multiple camera angles, clear audio, and animated captions for social sharing.",
    tags: ["Podcast Editing", "Multi-Cam", "Captions"],
    url: "https://drive.google.com/drive/folders/12f7JvB-2qHyCvJ2_xUixx9Wsu_2tlwO2",
  },

  {
    id: 3,
    title: "Geopolitical Analysis Video",
    category: "video",
    image:
      "https://images.pexels.com/photos/31582769/pexels-photo-31582769/free-photo-of-protest-in-tbilisi-with-georgian-and-eu-flags.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "In-depth geopolitical video covering global conflicts, territorial disputes, and international diplomacy with animated maps and voiceovers.",
    tags: ["After Effects", "Motion Graphics", "Voiceover"],
    url: "https://drive.google.com/drive/folders/1XLQ-S4P8AAAkQDvTaJThz-Fm6fukOz6V",
  },

  {
    id: 4,
    title: "Football Match Highlights & Edits",
    category: "video",
    image:
      "https://cdn.britannica.com/31/183231-050-8D8EB720/Carli-Lloyd-penalty-goal-semifinal-match-Germany-2015.jpg",
    description:
      "Fast-paced football highlight compilation featuring goals, tackles, and cinematic slow-motion edits with crowd atmosphere.",
    tags: ["Sports Editing", "Slow Motion", "Match Highlights"],
    url: "https://drive.google.com/drive/folders/1U6WYCK8rxo03HbL8wvqQbm-M5oKGBTyu",
  },

  {
    id: 5,
    title: "Product Commercial Edit",
    category: "video",
    image:
      "https://png.pngtree.com/template/20221227/ourmid/pngtree-cosmetics-or-skin-care-product-ads-with-bottle-image_1911800.jpg",
    description:
      "Clean and engaging product commercial featuring crisp shots, smooth transitions, and modern motion graphics to boost brand appeal.",
    tags: ["Product Video", "Motion Graphics", "Cinematic Edits"],
    url: "https://drive.google.com/drive/folders/12fq98OgTaKqD-BGN5Jcbe7CGml1CHbNs",
  },

  {
    id: 6,
    title: "NFL Sports Highlight Edit",
    category: "video",
    image:
      "https://static01.nyt.com/images/2022/05/12/sports/12nfl-sked-spencer/merlin_193836666_3fac25d1-d19a-4531-8ff6-a2fd5cd451df-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    description:
      "High-energy sports highlight reel featuring slam dunks, touchdown plays, fast transitions, and hype music synced with crowd reactions.",
    tags: ["Sports Editing", "Transitions", "Sound Design"],
    url: "https://drive.google.com/drive/folders/1tQoFzlo2-VUjXV9jQmM7t4xveHdk267j",
  },
  {
    id: 7,
    title: "NBA Sports Highlight Edit",
    category: "video",
    image: "https://hoopshype.com/wp-content/uploads/sites/92/2024/08/78_best_nba2.png?w=640",
    description:
      "High-energy sports highlight reel featuring slam dunks, touchdown plays, fast transitions, and hype music synced with crowd reactions.",
    tags: ["Sports Editing", "Transitions", "Sound Design"],
    url: "https://drive.google.com/drive/folders/1JNAqEtDEGlOxRZUef9oCWg4LWQU3ptrc",
  },
  {
    id: 8,
    title: "Crime Video Edit",
    category: "video",
    image:
      "https://i.ytimg.com/vi/GWiHPsr6Rgo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC6tEN-ZMS-GNAKzAgHejkqFhZJAA",
    description:
      "Gritty crime-themed video edit featuring dramatic reenactments, surveillance-style cuts, tense music, and moody lighting to build suspense and intrigue.",
    tags: ["Crime Editing", "Suspense", "Dark Aesthetic", "Sound Design"],
    url: "https://drive.google.com/drive/folders/1f6J1xkkiQyF1YexjsNZExH_ZOwyGMLqU",
  },
  {
    id: 9,
    title: "WWE Video Edit",
    category: "video",
    image:
      "https://www.wwe.com/f/styles/wwe_16_9_css/public/all/2025/04/052_NXT_04012025MP_11651--6f55ce74507072dc2cda559087b68651.jpg",
    description:
      "Action-packed WWE video edit showcasing epic entrances, powerful slams, dramatic stare-downs, and high-energy transitions synced with intense theme music and crowd pops.",
    tags: ["WWE Editing", "Action Highlights", "Dramatic Transitions", "Sound Design"],
    url: "https://drive.google.com/drive/folders/1JdEfgtgT_nlQJQNpVyZcOofgqwFCkV2F",
  },
  {
    id: 10,
    title: "Crypto Video Edit",
    category: "video",
    image: "https://www.bgu.ac.in/wp-content/uploads/2022/07/crypto.jpg",
    description:
      "Dynamic crypto-themed video edit featuring market charts, blockchain animations, dramatic price swings, and energetic transitions paired with futuristic sound design and glitch effects.",
    tags: ["Crypto Editing", "Blockchain Visuals", "Market Animation", "Futuristic Sound"],
    url: "https://drive.google.com/drive/folders/1JcM1qKcOhPkICh_gGw-F7JFUUVRXMp4t",
  },
  {
    id: 11,
    title: "Finance Video Edit",
    category: "video",
    image:
      "https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg?semt=ais_hybrid&w=740",
    description:
      "Clean and professional finance-themed video edit featuring stock market graphs, business animations, data visualizations, and smooth transitions paired with corporate music and voiceovers.",
    tags: ["Finance Editing", "Stock Visuals", "Business Animation", "Corporate Sound"],
    url: "https://drive.google.com/drive/folders/1SEIb5BCA2_pBOIy8fQ32QndTLV72T2fS",
  },
  {
    id: 12,
    title: "Historical Video Edit",
    category: "video",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RZ2Z7plUyv6ZfYtletCpzwHymvhqLOb5-w&s",
    description:
      "Immersive historical video edit featuring archival footage, dramatic narration, vintage textures, and cinematic transitions to bring past events and eras to life with emotional depth and storytelling flair.",
    tags: ["Historical Editing", "Archival Footage", "Vintage Effects", "Cinematic Narration"],
    url: "https://drive.google.com/drive/folders/1XFm4cDeSz2ktlhDFGiV0G5xL9iqyNZar",
  },
  {
    id: 13,
    title: "Car Video Edit",
    category: "video",
    image:
      "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2018/02/1936-Bugatti-Type-57-SC-Coupe-Atlantic.jpg",
    description:
      "High-octane car video edit showcasing revving engines, drifting shots, cinematic rolling footage, and smooth transitions synced with adrenaline-pumping music and engine roars.",
    tags: ["Car Editing", "Automotive Cinematics", "Engine Sounds", "Smooth Transitions"],
    url: "https://drive.google.com/drive/folders/1CkXnLc4MXA7O7IZAxSPNc3bkHjxsKSXQ",
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(0)

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const projectsPerPage = 3
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  const nextSlide = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  // Get current projects to display
  const getCurrentProjects = () => {
    const start = currentPage * projectsPerPage
    const end = start + projectsPerPage
    return filteredProjects.slice(start, end)
  }

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(0)
  }, [filter])

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
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A selection of my best work in video editing and graphic design.
          </p> */}
        </motion.div>

        {/* <div className="flex justify-center mb-12">
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
        </div> */}

        <div className="relative w-full">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {getCurrentProjects().map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
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
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-12 gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 flex items-center justify-center text-gray-300 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    currentPage === index ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 flex items-center justify-center text-gray-300 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
