"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Users } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const features = [
  {
    title: "AI-powered Chatbot",
    description: "24/7 support with our advanced AI chatbot, trained to provide empathetic and helpful responses.",
    icon: Brain,
    color: "text-blue-500",
  },
  {
    title: "Wellness Challenges",
    description: "Engage in curated challenges designed to boost your mental health and build positive habits.",
    icon: Zap,
    color: "text-purple-500",
  },
  {
    title: "Professional Advice",
    description: "Access to licensed therapists and counselors for personalized, professional support.",
    icon: Users,
    color: "text-green-500",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          Our Platform
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

const FeatureCard = ({ title, description, icon: Icon, color }) => (
  <motion.div initial="initial" animate="animate" variants={fadeIn}>
    <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <motion.div className={`mb-4 ${color}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Icon className="w-12 h-12" />
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
)

