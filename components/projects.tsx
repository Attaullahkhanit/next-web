import Image from "next/image"
import { Card } from "@/components/ui/card"

const projects = [
  {
    title: "E-Commerce Platform",
    image: "/ecommerce-website-dashboard.jpg",
  },
  {
    title: "Social Media App",
    image: "/social-media-platform-interface.jpg",
  },
  {
    title: "Video Streaming Service",
    image: "/video-streaming-platform.jpg",
  },
  {
    title: "Analytics Dashboard",
    image: "/analytics-dashboard-charts.jpg",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition cursor-pointer group">
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
