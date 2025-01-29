"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Trophy, Clock, Users } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const challenges = [
  {
    title: "7-Day Mindfulness Journey",
    description: "Practice mindfulness techniques daily for a week to reduce stress and improve focus.",
    duration: "7 days",
    participants: 1500,
    progress: 0,
  },
  {
    title: "30-Day Gratitude Challenge",
    description: "Write down three things you're grateful for each day for a month.",
    duration: "30 days",
    participants: 2200,
    progress: 0,
  },
  {
    title: "14-Day Mood Boost",
    description: "Engage in one mood-boosting activity each day for two weeks.",
    duration: "14 days",
    participants: 1800,
    progress: 0,
  },
  {
    title: "21-Day Healthy Sleep Habits",
    description: "Develop a consistent sleep routine over three weeks for better rest and mental clarity.",
    duration: "21 days",
    participants: 1300,
    progress: 0,
  },
]

export default function Challenges() {
  const [userChallenges, setUserChallenges] = useState(challenges)

  const joinChallenge = (index) => {
    const updatedChallenges = [...userChallenges]
    updatedChallenges[index].progress = 1
    setUserChallenges(updatedChallenges)
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <motion.h1 className="text-4xl font-bold text-center text-gray-800 mb-12" {...fadeIn}>
          Wellness Challenges
        </motion.h1>

        <motion.p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" {...fadeIn}>
          Join our wellness challenges to build healthy habits, boost your mood, and connect with others on their mental
          health journey.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userChallenges.map((challenge, index) => (
            <ChallengeCard key={index} {...challenge} onJoin={() => joinChallenge(index)} />
          ))}
        </div>
      </div>
    </div>
  )
}

const ChallengeCard = ({ title, description, duration, participants, progress, onJoin }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
    {...fadeIn}
  >
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex items-center mb-4">
      <Clock className="text-blue-500 mr-2" size={16} />
      <span className="text-sm text-gray-600">{duration}</span>
    </div>
    <div className="flex items-center mb-4">
      <Users className="text-blue-500 mr-2" size={16} />
      <span className="text-sm text-gray-600">{participants} participants</span>
    </div>
    <div className="mb-4">
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
    {progress === 0 ? (
      <motion.button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={onJoin}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Join Challenge
      </motion.button>
    ) : (
      <p className="text-green-500 font-semibold text-center">Challenge Joined!</p>
    )}
  </motion.div>
)

