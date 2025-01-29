"use client"

import { motion } from "framer-motion"
import Hero from "@/components/Hero"
import CreatorsBar from "@/components/CreatorsBar"
import Features from "@/components/Features"
import ChallengesSection from "@/components/ChallengesSection"
import PricingSection from "@/components/PricingSection"
import CallToAction from "@/components/CallToAction"
import ProgressBar from "@/components/ProgressBar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <ProgressBar />
      <Hero />
      <CreatorsBar />
      <Features />
      <ChallengesSection />
      <PricingSection />
      <CallToAction />
    </div>
  )
}

