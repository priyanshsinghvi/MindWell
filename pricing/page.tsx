"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const plans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Access to AI chatbot",
      "Limited community forum access",
      "Basic mood tracking",
      "5 guided meditations per month",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "per month",
    features: [
      "Unlimited AI chatbot access",
      "Full community forum access",
      "Advanced mood tracking and analytics",
      "Unlimited guided meditations",
      "1 free professional consultation per month",
      "Priority support",
    ],
    cta: "Subscribe Now",
    popular: true,
  },
]

export default function Pricing() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <motion.h1 className="text-4xl font-bold text-center text-gray-800 mb-12" {...fadeIn}>
          Choose Your Plan
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>

        <motion.div className="mt-16 text-center" {...fadeIn}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Need More?</h2>
          <p className="text-gray-600 mb-4">
            We offer custom plans for organizations and businesses. Contact us to learn more about our enterprise
            solutions.
          </p>
          <motion.button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

const PlanCard = ({ name, price, period, features, cta, popular }) => (
  <motion.div
    className={`bg-white p-8 rounded-lg shadow-md ${popular ? "border-2 border-blue-500" : ""}`}
    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
    {...fadeIn}
  >
    {popular && (
      <div className="bg-blue-500 text-white text-xs font-bold uppercase py-1 px-2 rounded-full absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
        Most Popular
      </div>
    )}
    <h2 className="text-2xl font-bold text-gray-800 mb-4">{name}</h2>
    <div className="mb-6">
      <span className="text-4xl font-bold">{price}</span>
      {period && <span className="text-gray-600">/{period}</span>}
    </div>
    <ul className="mb-6 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="text-green-500 mr-2" size={16} />
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <motion.button
      className={`w-full py-2 px-4 rounded font-bold ${
        popular ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-800"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {cta}
    </motion.button>
  </motion.div>
)

