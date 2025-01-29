"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // For this example, we'll just simulate a successful submission
    setFormStatus("success")
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <motion.h1 className="text-4xl font-bold text-center text-gray-800 mb-12" {...fadeIn}>
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-blue-500 mr-2" />
                <span>support@mindwell.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-500 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-500 mr-2" />
                <span>123 Wellness Street, Mental Health City, 12345</span>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeIn}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="mr-2" size={16} />
                Send Message
              </motion.button>
            </form>
            {formStatus === "success" && (
              <motion.div
                className="mt-4 p-4 bg-green-100 text-green-700 rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Thank you for your message. We'll get back to you soon!
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

