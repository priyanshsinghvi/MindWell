"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const steps = [
  {
    title: "Sign Up",
    description: "Create your free account and complete a brief assessment to help us understand your needs.",
    icon: "📝",
  },
  {
    title: "Explore the Platform",
    description: "Familiarize yourself with our AI chatbot, community forums, and available resources.",
    icon: "🔍",
  },
  {
    title: "Engage with AI Support",
    description: "Chat with our AI-powered assistant for immediate support and guidance.",
    icon: "🤖",
  },
  {
    title: "Connect with the Community",
    description: "Share experiences and find support in our anonymous, moderated community forums.",
    icon: "👥",
  },
  {
    title: "Access Professional Help",
    description: "When needed, schedule sessions with licensed therapists through our platform.",
    icon: "👨‍⚕️",
  },
  {
    title: "Track Your Progress",
    description: "Use our tools to monitor your mood, set goals, and celebrate your mental health journey.",
    icon: "📈",
  },
]

export default function HowItWorks() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <motion.h1 className="text-4xl font-bold text-center text-gray-800 mb-12" {...fadeIn}>
          How MindWell Works
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div {...fadeIn}>
            <Image
              src="/placeholder.svg"
              alt="MindWell Process"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div {...fadeIn}>
            <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
            <p className="text-gray-600 mb-4">
              MindWell is designed to provide a seamless and supportive experience for your mental wellness journey. Our
              platform combines cutting-edge technology with human expertise to offer personalized support at every
              step.
            </p>
            <p className="text-gray-600">
              Whether you're looking for immediate support, community connection, or professional guidance, MindWell is
              here to help you achieve better mental health and emotional balance.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} number={index + 1} />
          ))}
        </div>

        <motion.div className="bg-blue-100 p-8 rounded-lg shadow-lg" {...fadeIn}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Start Your Journey Today</h2>
          <p className="text-gray-600 mb-4">
            Ready to take the first step towards better mental health? Sign up for MindWell and experience the support
            you deserve.
          </p>
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

const StepCard = ({ title, description, icon, number }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden"
    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
    {...fadeIn}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <div className="absolute top-0 right-0 bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-bl-lg">
      {number}
    </div>
  </motion.div>
)

