"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 py-20 lg:py-32">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,0 C20,20 50,20 100,0 V100 H0 V0 Z"
            fill="rgba(255,255,255,0.1)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Your Companion for Mental Wellness and Emotional Balance
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Personalized support for your emotional well-being. Anytime. Anywhere.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 text-white transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/chat">Start Chatting</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-lavender-100 text-purple-700 border-purple-300 hover:bg-lavender-200 transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/community">Join the Community</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-green-100 text-green-700 border-green-300 hover:bg-green-200 transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/professional-help">Get Professional Help</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="relative w-full max-w-md mx-auto"
              animate={{
                y: ["0%", "3%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
                alt="Peaceful scene of a person meditating in nature, symbolizing mental wellness and balance"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg shadow-xl"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

