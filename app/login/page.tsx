"use client"

import type React from "react"
import { useState, useEffect } from "react" // Added useEffect
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  
  // State to track if component is mounted to fix Hydration Error
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)

  // Set mounted to true once the component reaches the browser
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        toast({
          title: "Login Failed",
          description: data.error || "Invalid credentials",
          variant: "destructive",
        })
        return
      }

      toast({
        title: "Success",
        description: "Logged in successfully",
      })

      router.push("/admin")
      router.refresh() // Ensures the admin layout recognizes the new cookie
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  // If not mounted, return an empty div with the same background to avoid the flash
  // This completely fixes the "Hydration failed" error
  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-b from-purple-100 via-purple-50 to-purple-100" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-purple-50 to-purple-100 flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-white p-8 shadow-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Admin Login</h1>
          <p className="text-gray-600 text-center mt-2">Sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Username</label>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              disabled={loading}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              disabled={loading}
              required
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-purple-50 rounded-lg text-sm text-gray-600">
          <p className="font-semibold text-gray-900 mb-2">Demo Credentials:</p>
          {/* <p>Username: <span className="font-mono text-xs">admin</span></p>
          <p>Password: <span className="font-mono text-xs">admin</span></p> */}
        </div>
      </Card>
    </div>
  )
}