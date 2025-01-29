"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Calendar } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const communityFeatures = [
  {
    icon: Users,
    title: "Anonymous Support",
    description: "Share your thoughts safely in our supportive community.",
  },
  {
    icon: Award,
    title: "Group Challenges",
    description: "Participate in mental wellness challenges together.",
  },
  {
    icon: Calendar,
    title: "Expert-Led Sessions",
    description: "Get tips and insights from mental health professionals.",
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <motion.div className="container mx-auto px-4" initial="initial" animate="animate" variants={fadeIn}>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Join Our Supportive Community</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Connect, share, and grow with people who understand your journey.
        </p>

        <div className="flex justify-center mb-16">
          <Image
            src="/community-illustration.svg"
            alt="Community Illustration"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white transition-all duration-300 transform hover:scale-105 rounded-full px-8 py-3 text-lg font-semibold"
            onClick={() => window.open("https://discord.gg/your-invite-link", "_blank")}
          >
            Join Us on Discord
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

