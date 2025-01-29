"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import confetti from "canvas-confetti"

const challenges = [
  {
    id: 1,
    title: "7-Day Mindfulness Journey",
    description: "Practice mindfulness through guided breathing exercises and gratitude journaling.",
    duration: "7 days",
    maxPoints: 70,
    tips: [
      "Start with 5 minutes of deep breathing",
      "Write down 3 things you're grateful for",
      "Practice body scan meditation before bed",
    ],
  },
  {
    id: 2,
    title: "10 Days to Better Sleep",
    description: "Improve sleep quality with personalized tips, bedtime routines, and relaxation techniques.",
    duration: "10 days",
    maxPoints: 150,
    tips: [
      "Establish a consistent sleep schedule",
      "Create a relaxing bedtime routine",
      "Avoid screens 1 hour before bed",
    ],
  },
  {
    id: 3,
    title: "14-Day Stress Management Program",
    description: "Learn stress reduction techniques, from guided meditation to simple exercises like stretching.",
    duration: "14 days",
    maxPoints: 280,
    tips: [
      "Practice progressive muscle relaxation",
      "Try a 10-minute guided meditation",
      "Take short breaks for stretching throughout the day",
    ],
  },
  {
    id: 4,
    title: "21-Day Gratitude Challenge",
    description: "Build a gratitude habit by listing three positive moments daily.",
    duration: "21 days",
    maxPoints: 105,
    tips: [
      "Start each day by writing down one thing you're grateful for",
      "Share your gratitude with someone else",
      "Reflect on your gratitude list at the end of each week",
    ],
  },
]

export default function ChallengesSection() {
  const [userChallenges, setUserChallenges] = useState(challenges.map((c) => ({ ...c, progress: 0, joined: false })))
  const [totalPoints, setTotalPoints] = useState(0)

  const joinChallenge = (id) => {
    setUserChallenges((prev) => prev.map((c) => (c.id === id ? { ...c, joined: true } : c)))
  }

  const updateProgress = (id, newProgress) => {
    setUserChallenges((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const pointsEarned =
            Math.floor((newProgress / 100) * c.maxPoints) - Math.floor((c.progress / 100) * c.maxPoints)
          setTotalPoints((prev) => prev + pointsEarned)
          if (newProgress === 100) {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
            })
          }
          return { ...c, progress: newProgress }
        }
        return c
      }),
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Wellness Challenges
        </motion.h2>

        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Your Progress</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg">
                Total Points: <span className="font-bold text-blue-600">{totalPoints}</span>
              </p>
              <p className="text-sm text-gray-600">Keep going! You're doing great!</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userChallenges.map((challenge) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-200/50">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{challenge.description}</p>
                  <div className="mb-4">
                    <Progress value={challenge.progress} className="h-2" />
                    <p className="text-sm text-gray-600 mt-1">{challenge.progress}% Complete</p>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Duration: {challenge.duration}</p>
                  <Button
                    variant="default"
                    className={`w-full ${
                      challenge.joined ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"
                    } text-white transition-colors duration-300`}
                    onClick={() =>
                      challenge.joined
                        ? updateProgress(challenge.id, Math.min(challenge.progress + 10, 100))
                        : joinChallenge(challenge.id)
                    }
                  >
                    {challenge.joined ? "Update Progress" : "Join Challenge"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

