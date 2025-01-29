"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const features = [
  {
    title: "AI-powered Chatbot",
    description: "24/7 support with our advanced AI chatbot, trained to provide empathetic and helpful responses.",
    icon: "🤖",
  },
  {
    title: "Anonymous Community",
    description: "Connect with others, share experiences, and find support in our safe, anonymous community.",
    icon: "👥",
  },
  {
    title: "Professional Consultations",
    description: "Access to licensed therapists and counselors for personalized, professional support.",
    icon: "👨‍⚕️",
  },
  {
    title: "Mood Tracking",
    description: "Track your mood over time and gain insights into patterns and triggers.",
    icon: "📊",
  },
  {
    title: "Guided Meditations",
    description: "Access a library of guided meditations to help you relax and focus.",
    icon: "🧘‍♀️",
  },
  {
    title: "Journal Prompts",
    description: "Daily journal prompts to encourage self-reflection and personal growth.",
    icon: "✍️",
  },
]

export default function Features() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <motion.h1 className="text-4xl font-bold text-center text-gray-800 mb-12" {...fadeIn}>
          Our Features
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <motion.div className="bg-blue-100 p-8 rounded-lg shadow-lg" {...fadeIn}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How MindWell Works</h2>
          <Image
            src="/placeholder.svg"
            alt="MindWell Platform"
            width={800}
            height={400}
            className="rounded-lg shadow-md mb-4"
          />
          <p className="text-gray-600">
            MindWell integrates AI technology, community support, and professional help to provide a comprehensive
            mental wellness solution. Our platform adapts to your needs, offering personalized support at every step of
            your journey.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

const FeatureCard = ({ title, description, icon }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
    {...fadeIn}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <motion.button className="mt-4 text-blue-500 font-semibold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      Learn More
    </motion.button>
  </motion.div>
)

