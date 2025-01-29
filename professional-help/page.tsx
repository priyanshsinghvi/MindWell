"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Search } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const doctors = [
  {
    name: "Dr. Neha Sharma",
    photo: "/placeholder.svg?height=100&width=100",
    specialization: "Cognitive Behavioral Therapy (CBT), Stress Management",
    experience: "10+ years of experience",
    rating: 4.8,
    bio: "Dr. Neha Sharma is a licensed psychologist specializing in CBT and stress management techniques.",
  },
  {
    name: "Dr. Michael Chen",
    photo: "/placeholder.svg?height=100&width=100",
    specialization: "Anxiety Disorders, Depression",
    experience: "15+ years of experience",
    rating: 4.9,
    bio: "Dr. Michael Chen is an expert in treating anxiety disorders and depression using evidence-based approaches.",
  },
  {
    name: "Dr. Sarah Johnson",
    photo: "/placeholder.svg?height=100&width=100",
    specialization: "Family Therapy, Relationship Counseling",
    experience: "12+ years of experience",
    rating: 4.7,
    bio: "Dr. Sarah Johnson specializes in helping families and couples improve their relationships and communication.",
  },
]

export default function ProfessionalHelpPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <motion.div className="container mx-auto px-4" initial="initial" animate="animate" variants={fadeIn}>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Find Trusted Experts to Support Your Mental Wellness
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our certified professionals are here to guide you every step of the way.
        </p>

        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Search by name or specialization"
            className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredDoctors.map((doctor, index) => (
            <Card key={index} className="bg-white overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={doctor.photo || "/placeholder.svg"}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{doctor.name}</h3>
                    <p className="text-sm text-gray-600">{doctor.specialization}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{doctor.experience}</p>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(doctor.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{doctor.rating}</span>
                </div>
                <p className="text-gray-600 mb-4">{doctor.bio}</p>
                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    // Implement booking functionality
                    alert(`Booking appointment with ${doctor.name}`)
                  }}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Are sessions confidential?</h3>
              <p className="text-gray-600">
                Yes, all sessions are completely confidential. Our professionals adhere to strict privacy guidelines.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How do I reschedule an appointment?</h3>
              <p className="text-gray-600">
                You can reschedule your appointment through your account dashboard or by contacting our support team.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

