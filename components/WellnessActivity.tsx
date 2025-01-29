import { motion } from "framer-motion"
import { Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
}

const activities = {
  sad: ["Practice gratitude journaling", "Listen to uplifting music", "Take a nature walk"],
  anxious: ["Try deep breathing exercises", "Practice progressive muscle relaxation", "Engage in mindful coloring"],
  happy: ["Share your positivity with a friend", "Try a new hobby or activity", "Practice random acts of kindness"],
  neutral: ["Meditate for 5 minutes", "Do a quick stretching routine", "Write down your thoughts and feelings"],
}

const WellnessActivity = ({ mood }) => {
  const moodActivities = activities[mood] || activities.neutral
  const randomActivity = moodActivities[Math.floor(Math.random() * moodActivities.length)]

  return (
    <motion.div className="bg-white rounded-lg shadow-md p-4 mt-4" {...fadeIn}>
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Activity className="w-5 h-5 mr-2 text-teal-500" />
        Suggested Wellness Activity
      </h3>
      <p className="text-gray-600 mb-3">{randomActivity}</p>
      <Button variant="outline" className="text-teal-500 border-teal-500 hover:bg-teal-50">
        Try This Activity
      </Button>
    </motion.div>
  )
}

export default WellnessActivity

