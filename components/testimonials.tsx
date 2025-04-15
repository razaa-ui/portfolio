"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Beatrice",
    role: "Entrepreneur",
    platform: "instagram",
    instagram: "@_beatrips",
    image: "/images/beatrice.jpg",
    quote:
      "Muhammad Is an outstanding editor. He exceeed my expectations for my videos. He’s very responsive and understands what you want for your video and exceeds it. He knows how to storytell using video elements which is an amazing and rare quality. It’s nice you don’t have to hold his hand and direct every single thing in the video. He does the heavy lifting. I 100% recommend him",
  },
  {
    id: 2,
    name: "Matt Chung",
    role: "Adventurous Storyteller",
    platform: "instagram",
    instagram: "@lifewithchunger",
    image: "/images/matt.jpg",
    quote:
      "Working with Muhammad on our brand design was a game-changer. His creative skills combined with his eye for design resulted in visuals that perfectly captured our brand essence.",
  },
  {
    id: 3,
    name: "Farah Hawa",
    role: "Cyber Security Expert",
    platform: "instagram",
    instagram: "@farah_hawaa",
    image: "/images/farah.png",
    quote:
      "Muhammad's ability to blend technical video editing with creative graphic design made him the perfect partner for our interactive media campaign. The results speak for themselves!",
  },
]

// Updated clients array with platform property
const clients = [
  {
    name: "Huan Huan (Colleen) Yu",
    role: "Vlogger",
    platform: "instagram",
    instagram: "@filmwcolleen",
    image: "/images/colleen.jpg",
  },
  {
    name: "Matt Chung",
    role: "Adventurous Storyteller",
    platform: "youtube",
    youtube: "@lifewithchunger",
    image: "/images/matt.jpg",
  },
  {
    name: "Gianna Cestone",
    role: "Fitness Trainer",
    platform: "instagram",
    instagram: "@giiicestone",
    image: "/images/gianna.jpg",
  },
  {
    name: "Maggie",
    role: "Science, Technology & Engineering",
    platform: "instagram",
    instagram: "@maggieindata",
    image: "/images/maggie.jpg",
  },
  {
    name: "Beatrice",
    role: "Entrepreneur",
    platform: "instagram",
    instagram: "@_beatrips",
    image: "/images/beatrice.jpg",
  },
  {
    name: "Officer Jake",
    role: "Crime",
    platform: "youtube",
    youtube: "@JakeTheOfficer",
    image: "/images/officer.jpg"
  },
  {
    name: "Farah Hawa",
    role: "Cyber Security Expert",
    platform: "youtube",
    instagram: "@farah_hawaa",
    youtube: "@farahhawa",
    image: "/images/farah.png",
  },

  {
    name: "Kaesa Tv",
    role: "Model/Vlogger/Musician",
    platform: "youtube",
    youtube: "@kaesafr",
    image: "/images/kaesa.jpg", // Using placeholder image
  },
  {
    name: "Crime Ranger",
    role: "Crime Channel",
    platform: "youtube",
    youtube: "@CrimeRanger",
    image: "/images/ranger.jpg", // Using placeholder image
  },
  {
    name: "The Arab Investor",
    role: "Geopolitical",
    platform: "youtube",
    youtube: "@TheArabInvestoor",
    image: "/images/arab.jpg", // Using placeholder image
  },
  {
    name: "Eye For Goal",
    role: "Lifestyle Content Creator",
    platform: "youtube",
    youtube: "@eyeforgoal",
    image: "/images/eye.jpg", // Using placeholder image
  },
  {
    name: "Swish Archives",
    role: "NBA Channel",
    platform: "youtube",
    youtube: "@SwishArchives",
    image: "/images/nba.jpg", // Using placeholder image
  },
  {
    name: "Donald Coletta",
    role: "NFL Channel",
    platform: "youtube",
    youtube: "@donaldcoletta",
    image: "/images/don.jpg", // Using placeholder image
  },
  {
    name: "NBA ALL ACCESS",
    role: "NBA Channel",
    platform: "youtube",
    youtube: "@NBAALLACCESS876",
    image: "/images/nba1.jpg", // Using placeholder image
  },
  {
    name: "Top Bins",
    role: "Football News Channel",
    platform: "youtube",
    youtube: "@TopBinsFootyy",
    image: "/images/top.jpg", // Using placeholder image
  },
  {
    name: "Out of the Doldrums",
    role: "Lifestyle Channel",
    platform: "youtube",
    youtube: "@outofthedoldrums",
    image: "/images/doldrums.jpg", // Using placeholder image
  },
  {
    name: "400ft",
    role: "Tech and documentaries",
    platform: "youtube",
    youtube: "@400ft",
    image: "/images/ft.jpg", // Using placeholder image
  },
  {
    name: "Seeve",
    role: "Gaming Channel",
    platform: "youtube",
    youtube: "@seeve3",
    image: "/images/seeve.jpg", // Using placeholder image
  },
  {
    name: "Anime Kage",
    role: "Anime Channel",
    platform: "youtube",
    youtube: "@AnimeKage11",
    image: "/images/ak.jpg", // Using placeholder image
  },
  {
    name: "Generation X Insight",
    role: "Documentary Channel",
    platform: "youtube",
    youtube: "@GenerationXinsight",
    image: "/images/x.jpg", // Using placeholder image
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [platformFilter, setPlatformFilter] = useState("all")
  const [clientPage, setClientPage] = useState(0)

  // Filter clients based on selected platform
  const filteredClients =
    platformFilter === "all" ? clients : clients.filter((client) => client.platform === platformFilter)

  const CLIENTS_PER_PAGE = 6
  const totalClientPages = Math.ceil(filteredClients.length / CLIENTS_PER_PAGE)

  // Reset to first page when filter changes
  useEffect(() => {
    setClientPage(0)
  }, [platformFilter])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const nextClientPage = () => {
    setClientPage((prev) => (prev === totalClientPages - 1 ? 0 : prev + 1))
  }

  const prevClientPage = () => {
    setClientPage((prev) => (prev === 0 ? totalClientPages - 1 : prev - 1))
  }

  // Get current clients to display
  const getCurrentClients = () => {
    const start = clientPage * CLIENTS_PER_PAGE
    const end = start + CLIENTS_PER_PAGE
    return filteredClients.slice(start, end)
  }

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">What Clients Say</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Feedback from clients I've had the pleasure to work with.
          </p>
        </motion.div>

        <div className="relative mb-20">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800 rounded-xl p-8 md:p-10 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-300 text-lg italic mb-6">"{testimonial.quote}"</p>
                        <div>
                          <h4 className="text-xl font-bold">{testimonial.name}</h4>
                          <p className="text-purple-400">
                            {testimonial.role}
                          </p>
                          <a
                            href={`https://instagram.com/${testimonial.instagram.substring(1)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center mt-2 text-gray-300 hover:text-purple-400 transition-colors"
                          >
                            <Instagram className="w-4 h-4 mr-1" />
                            {testimonial.instagram}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-purple-700 hover:bg-purple-800 rounded-full p-3 text-white shadow-lg transition-all z-10 md:-translate-x-5"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-purple-700 hover:bg-purple-800 rounded-full p-3 text-white shadow-lg transition-all z-10 md:translate-x-5"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(index)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? "bg-purple-600 w-6" : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          <h3 className="text-2xl font-bold text-center mb-6">Clients I've Worked With</h3>

          {/* Platform Filter Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-800 rounded-full p-1">
              <button
                onClick={() => setPlatformFilter("all")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  platformFilter === "all" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                All Clients
              </button>
              <button
                onClick={() => setPlatformFilter("instagram")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                  platformFilter === "instagram" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                <Instagram className="inline-block w-4 h-4 mr-1" />
                Instagram
              </button>
              <button
                onClick={() => setPlatformFilter("youtube")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                  platformFilter === "youtube" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                <Youtube className="inline-block w-4 h-4 mr-1" />
                YouTube
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${platformFilter}-${clientPage}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              >
                {getCurrentClients().map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center"
                  >
                    <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                      <Image src={client.image || "/placeholder.svg"} alt={client.name} fill className="object-cover" />
                    </div>
                    <h4 className="text-lg font-semibold">{client.name}</h4>
                    <p className="text-gray-400 text-sm mb-3">{client.role}</p>

                    {/* Conditional rendering based on platform */}
                    {client.platform === "instagram" && client.instagram && (
                      <a
                        href={`https://instagram.com/${client.instagram.substring(1)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <Instagram className="w-4 h-4 mr-1" />
                        {client.instagram}
                      </a>
                    )}

                    {client.platform === "youtube" && client.youtube && (
                      <a
                        href={`https://youtube.com/${client.youtube}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-red-500 hover:text-red-400 transition-colors"
                      >
                        <Youtube className="w-4 h-4 mr-1" />
                        {client.youtube}
                      </a>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          {totalClientPages > 1 && (
            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                onClick={prevClientPage}
                className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 flex items-center justify-center text-gray-300 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous</span>
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalClientPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setClientPage(index)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      clientPage === index ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={nextClientPage}
                className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 flex items-center justify-center text-gray-300 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
