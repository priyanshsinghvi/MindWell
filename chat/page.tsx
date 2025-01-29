"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Leaf } from "lucide-react"
import { useChat } from "ai/react"
import ChatMessage from "@/components/ChatMessage"
import FloatingAnimation from "@/components/FloatingAnimation"
import WellnessActivity from "@/components/WellnessActivity"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function ChatPage() {
  const [userName, setUserName] = useState("User")
  const [userMood, setUserMood] = useState("neutral")
  const { messages, input, handleInputChange, handleSubmit, setMessages } = useChat()

  useEffect(() => {
    // Simulating user authentication and fetching preferences
    setTimeout(() => {
      setUserName("Priyansh")
      setMessages([
        {
          id: "1",
          role: "assistant",
          content: `Hello Priyansh! Welcome back. How are you feeling today? If there's anything you'd like to share or discuss, I'm here to listen. If you're looking for something other than mental health support, just let me know!`,
        },
      ])
    }, 1000)
  }, [setMessages]) // Added setMessages to the dependency array

  const handleSendMessage = (e) => {
    e.preventDefault()
    handleSubmit(e)
    analyzeSentiment(input)
  }

  const analyzeSentiment = (text) => {
    // Simple sentiment analysis (replace with more sophisticated method if needed)
    const lowercaseText = text.toLowerCase()
    if (lowercaseText.includes("sad") || lowercaseText.includes("depressed") || lowercaseText.includes("unhappy")) {
      setUserMood("sad")
    } else if (
      lowercaseText.includes("anxious") ||
      lowercaseText.includes("worried") ||
      lowercaseText.includes("stressed")
    ) {
      setUserMood("anxious")
    } else if (
      lowercaseText.includes("happy") ||
      lowercaseText.includes("great") ||
      lowercaseText.includes("excited")
    ) {
      setUserMood("happy")
    } else {
      setUserMood("neutral")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 relative overflow-hidden">
      <FloatingAnimation />
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <motion.h1 className="text-3xl font-bold text-center text-gray-800 mb-8" {...fadeIn}>
          Chat with MindWell AI
        </motion.h1>
        <motion.div className="bg-white rounded-lg shadow-lg p-6 mb-8 h-[60vh] overflow-y-auto" {...fadeIn}>
          <AnimatePresence>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} userMood={userMood} userName={userName} />
            ))}
          </AnimatePresence>
          {userMood !== "neutral" && <WellnessActivity mood={userMood} />}
        </motion.div>
        <motion.form onSubmit={handleSendMessage} className="flex gap-2" {...fadeIn}>
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message here..."
            className="flex-grow"
          />
          <Button type="submit" className="bg-green-500 hover:bg-green-600">
            <Send size={18} />
          </Button>
        </motion.form>
      </div>
    </div>
  )
}

