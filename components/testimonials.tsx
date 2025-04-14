"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Instagram } from "lucide-react"
import Image from "next/image"


const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Social Media Video Content",
    company: "TechVision",
    instagram: "@sarah_johnson",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "I enjoyed working with him. He was timely and did his best to make sure I received the best quality of work!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder & CEO",
    company: "Startup Innovate",
    instagram: "@michael_chen_official",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Working with Muhammad on our brand design was a game-changer. His creative skills combined with his eye for design resulted in visuals that perfectly captured our brand essence.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "Media Pulse",
    instagram: "@emily_creates",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Muhammad's ability to blend technical video editing with creative graphic design made him the perfect partner for our interactive media campaign. The results speak for themselves!",
  },
]

const clients = [
  {
    name: "Huan Huan (Colleen) Yu",
    role: "Vlogger",
    instagram: "@filmwcolleen",
    image: "/images/colleen.jpg",
  },
  {
    name: "Gianna Cestone",
    role: "Fitness Trainer",
    instagram: "@giiicestone",
    image: "/images/gianna.jpg"
  },
  {
    name: "Maggie",
    role: "Science, Technology & Engineering",
    instagram: "@maggieindata",
    image: "/images/maggie.jpg",
  },
  {
    name: "Beatrice",
    role: "Entrepreneur",
    instagram: "@_beatrips",
    image: "/images/beatrice.jpg",
  },
 
  {
    name: "Farah Hawa",
    role: "Cyber Security Expert",
    instagram: "@farah_hawaa",
    image: "/images/farah.png",
  },
  {
    name: "Matt Chung",
    role: "Adventurous Storyteller",
    instagram: "@lifewithchunger",
    image: "/images/matt.jpg",
  },

]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

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

  const CLIENTS_PER_PAGE = 6

const [clientIndex, setClientIndex] = useState(0)
const totalClientPages = Math.ceil(clients.length / CLIENTS_PER_PAGE)

const nextClientPage = () => {
  setClientIndex((prev) => (prev === totalClientPages - 1 ? 0 : prev + 1))
}

const prevClientPage = () => {
  setClientIndex((prev) => (prev === 0 ? totalClientPages - 1 : prev - 1))
}

const visibleClients = clients.slice(
  clientIndex * CLIENTS_PER_PAGE,
  clientIndex * CLIENTS_PER_PAGE + CLIENTS_PER_PAGE
)


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
                            {testimonial.role}, {testimonial.company}
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
  <h3 className="text-2xl font-bold text-center mb-10">Clients I've Worked With</h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-500">
    {visibleClients.map((client, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center"
      >
        <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
          <Image
            src={client.image || "/placeholder.svg"}
            alt={client.name}
            fill
            className="object-cover"
          />
        </div>
        <h4 className="text-lg font-semibold">{client.name}</h4>
        <p className="text-gray-400 text-sm mb-3">{client.role}</p>
        <a
          href={`https://instagram.com/${client.instagram.substring(1)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
        >
          <Instagram className="w-4 h-4 mr-1" />
          {client.instagram}
        </a>
      </motion.div>
    ))}
  </div>

  {/* Navigation Buttons */}
  <div className="flex justify-center items-center gap-4">
    <button
      onClick={prevClientPage}
      className="bg-purple-700 hover:bg-purple-800 text-white p-2 rounded-full transition-all shadow-lg"
      aria-label="Previous clients"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>

    <button
      onClick={nextClientPage}
      className="bg-purple-700 hover:bg-purple-800 text-white p-2 rounded-full transition-all shadow-lg"
      aria-label="Next clients"
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  </div>
        </div>

      </div>
    </section>
  )
}
