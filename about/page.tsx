"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <motion.h1 className="text-4xl font-bold text-center text-gray-800 mb-8" {...fadeIn}>
          About MindWell
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div {...fadeIn}>
            <Image
              src="/placeholder.svg"
              alt="About MindWell"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div {...fadeIn}>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At MindWell, we believe that everyone deserves access to mental health support. Our mission is to provide
              a comprehensive, accessible, and user-friendly platform that empowers individuals to take control of their
              mental well-being.
            </p>
            <p className="text-gray-600">
              We strive to break down barriers to mental health care by offering a combination of AI-powered support,
              community connection, and professional help, all in one place.
            </p>
          </motion.div>
        </div>

        <motion.h2 className="text-3xl font-bold text-center text-gray-800 mb-8" {...fadeIn}>
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ServiceCard
            title="AI Chatbot"
            description="Our advanced AI chatbot provides 24/7 support, offering a listening ear and helpful resources whenever you need them."
            icon="🤖"
          />
          <ServiceCard
            title="Anonymous Community"
            description="Connect with others who understand your experiences in our safe, moderated, and anonymous community forums."
            icon="👥"
          />
          <ServiceCard
            title="Professional Help"
            description="Access licensed therapists and counselors for personalized, professional support through secure video sessions."
            icon="👨‍⚕️"
          />
        </div>

        <motion.h2 className="text-3xl font-bold text-center text-gray-800 mb-8" {...fadeIn}>
          Our Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamMember
            name="Dr. Emily Chen"
            role="Founder & CEO"
            bio="Dr. Chen is a licensed psychologist with over 15 years of experience in mental health care."
          />
          <TeamMember
            name="Michael Johnson"
            role="CTO"
            bio="Michael is an AI expert with a passion for using technology to improve mental health accessibility."
          />
          <TeamMember
            name="Sarah Thompson"
            role="Head of Community"
            bio="Sarah has extensive experience in building and moderating online support communities."
          />
        </div>
      </div>
    </div>
  )
}

const ServiceCard = ({ title, description, icon }) => (
  <motion.div className="bg-white p-6 rounded-lg shadow-md" whileHover={{ y: -5 }} {...fadeIn}>
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

const TeamMember = ({ name, role, bio }) => (
  <motion.div className="bg-white p-6 rounded-lg shadow-md text-center" whileHover={{ y: -5 }} {...fadeIn}>
    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-600 mb-2">{role}</p>
    <p className="text-gray-600">{bio}</p>
  </motion.div>
)

