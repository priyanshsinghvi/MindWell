"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: ["Access to AI chatbot", "Limited community forum access", "Basic mood tracking"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    price: "$9.99/month",
    features: [
      "Unlimited AI chatbot access",
      "Full community forum access",
      "Advanced mood tracking",
      "Personalized wellness plan",
    ],
    cta: "Subscribe Now",
    popular: true,
  },
  {
    name: "Professional",
    price: "$19.99/month",
    features: [
      "All Premium features",
      "1-on-1 therapy sessions",
      "Priority support",
      "Exclusive webinars and workshops",
    ],
    cta: "Get Pro",
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-8"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          Pricing Plans
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          Choose the plan that best fits your needs and start your journey to better mental health today.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

const PricingCard = ({ name, price, features, cta, popular }) => (
  <motion.div initial="initial" animate="animate" variants={fadeIn}>
    <Card className={`flex flex-col h-full ${popular ? "border-2 border-blue-500" : ""}`}>
      <CardContent className="p-6 flex-grow">
        <h3 className="text-2xl font-bold text-center mb-2">{name}</h3>
        <p className="text-3xl font-bold text-center text-blue-600 mb-6">{price}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="text-green-500 mr-2" size={16} />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <div className="p-6 bg-gray-50">
        <Button
          variant={popular ? "default" : "outline"}
          className={`w-full ${
            popular ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-white hover:bg-gray-100 text-gray-800"
          }`}
        >
          {cta}
        </Button>
      </div>
    </Card>
  </motion.div>
)

