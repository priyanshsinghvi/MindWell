import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

const creators = [
  { name: "Priyansh Singhvi", linkedin: "https://www.linkedin.com/in/priyansh-singhvi" },
  { name: "Kartik Gupta", linkedin: "https://www.linkedin.com/in/kartik-gupta" },
  { name: "Om Ashrit Patel", linkedin: "https://www.linkedin.com/in/om-ashrit-patel" },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function CreatorsBar() {
  return (
    <motion.section className="bg-white py-4 shadow-md" initial="initial" animate="animate" variants={fadeIn}>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">Creators</h2>
        <div className="flex flex-wrap justify-center items-center space-x-8">
          {creators.map((creator, index) => (
            <motion.a
              key={index}
              href={creator.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-500 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              <span>{creator.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

