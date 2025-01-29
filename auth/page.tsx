"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <motion.div className="container mx-auto px-4" initial="initial" animate="animate" variants={fadeIn}>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>{isLogin ? "Login" : "Sign Up"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" required />
              </div>
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="Confirm your password" required />
                </div>
              )}
              <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600">
                {isLogin ? "Login" : "Sign Up"}
              </Button>
            </form>
            <div className="mt-4 text-center">
              <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 hover:underline">
                {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

