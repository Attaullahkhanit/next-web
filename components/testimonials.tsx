import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Startup",
    message: "Attaullah is an exceptional developer. He delivered our project on time with outstanding quality.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager, Fortune 500",
    message: "Working with Attaullah was a game-changer for our team. His expertise and dedication are unmatched.",
    rating: 5,
  },
  {
    name: "Mike Smith",
    role: "Founder, Digital Agency",
    message: "Highly recommend Attaullah for any complex web development project. Truly a master of his craft.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Voices from the Tech Floor</h2>
          <p className="text-gray-600">What my clients and colleagues say about working with me</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white p-8 hover:shadow-lg transition">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.message}</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
