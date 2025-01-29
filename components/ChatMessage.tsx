import { motion } from "framer-motion"
import { User, Heart, Brain, Smile, Frown, Meh } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3 },
}

const ChatMessage = ({ message, userMood, userName }) => {
  const isUser = message.role === "user"

  let backgroundColor = isUser ? "bg-blue-500" : "bg-teal-100"
  const textColor = isUser ? "text-white" : "text-gray-800"
  let Icon = isUser ? User : Heart

  if (!isUser) {
    switch (userMood) {
      case "sad":
        backgroundColor = "bg-indigo-100"
        Icon = Frown
        break
      case "anxious":
        backgroundColor = "bg-yellow-100"
        Icon = Meh
        break
      case "happy":
        backgroundColor = "bg-green-100"
        Icon = Smile
        break
      default:
        backgroundColor = "bg-teal-100"
        Icon = Brain
    }
  }

  return (
    <motion.div className={`mb-4 ${isUser ? "text-right" : "text-left"}`} {...fadeIn}>
      <div className={`inline-block p-3 rounded-lg ${backgroundColor} ${textColor} max-w-[80%]`}>
        <div className="flex items-center mb-1">
          <Icon className="w-5 h-5 mr-2" />
          <span className="font-semibold">{isUser ? userName : "MindWell AI"}</span>
        </div>
        <p className="text-sm">{message.content}</p>
      </div>
    </motion.div>
  )
}

export default ChatMessage

