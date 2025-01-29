"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 className="text-3xl font-bold text-white mb-8" initial="initial" animate="animate" variants={fadeIn}>
          Ready to Start Your Journey?
        </motion.h2>
        <motion.div initial="initial" animate="animate" variants={fadeIn}>
          <Button
            variant="default"
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
          >
            Join MindWell Today
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

