"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" })
        alert("Message sent successfully!")
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("An error occurred. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Get in Touch</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white p-8 text-center hover:shadow-lg transition">
            <Mail size={32} className="mx-auto mb-4 text-purple-600" />
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">attaullahkhanit@gmail.com</p>
          </Card>
          <Card className="bg-white p-8 text-center hover:shadow-lg transition">
            <Phone size={32} className="mx-auto mb-4 text-purple-600" />
            <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+92 344 8985072</p>
          </Card>
          <Card className="bg-white p-8 text-center hover:shadow-lg transition">
            <MapPin size={32} className="mx-auto mb-4 text-purple-600" />
            <h3 className="font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">Islamabad, Pakistan</p>
          </Card>
        </div>

        <Card className="bg-white p-8 md:p-12">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                placeholder="Subject of your message"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                placeholder="Your message here..."
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </div>
        </Card>
      </div>
    </section>
  )
}