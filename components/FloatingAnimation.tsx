import { motion } from "framer-motion"
import { Leaf } from "lucide-react"

const FloatingAnimation = () => {
  const floatingAnimation = {
    y: ["0%", "100%"],
    opacity: [0, 1, 0],
    transition: {
      duration: 20,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    },
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
          }}
          animate={floatingAnimation}
          transition={{
            delay: Math.random() * 20,
          }}
        >
          <Leaf className="text-green-300 opacity-50" size={24} />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingAnimation

