import { Card } from "@/components/ui/card"
import {
  Code2,
  Palette,
  Smartphone,
  Zap,
  Search,
  Cloud,
  GitBranch,
  TestTube,
  Package,
  Users,
  Gauge,
  Shield,
} from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Experienced in building scalable web applications with a focus on performance, security, and maintainability. Proficient in both frontend and backend development, utilizing React, Next.js, and Vue.js for user-facing features and Node.js for backend services. Adept at creating seamless integrations and ensuring code quality through robust development practices.",
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Code2,
    title: "Languages and Tools",
    description:
      "Proficient in JavaScript, TypeScript, HTML5, CSS3, and SCSS, with a strong focus on developing scalable and maintainable code. Familiar with modern frameworks like React, Node.js, Next.js, Express, Vue.js, and WebSockets for real-time applications. Expert in state management and data fetching using React Query and TanStack Query for efficient server-state management. Knowledgeable in working with MySQL, MongoDB, and PostgreSQL for database management.",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Smartphone,
    title: "Desktop Application Development",
    description:
      "Skilled in creating robust and user-friendly desktop applications using cross-platform technologies. Proficient in Electron for building scalable applications with web technologies. Proficient in integrating native capabilities, such as file system access, clipboard operations, and platform-specific features, to deliver tailored solutions for various operating systems (Windows, macOS, Linux).",
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    icon: Package,
    title: "API Development",
    description:
      "Skilled in designing, building, and securing RESTful and GraphQL APIs, focused on creating high-performance communication between services. Experienced in Node.js and utilizing middleware to optimize API performance, ensuring fast and highly efficient APIs.",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: GitBranch,
    title: "Backend Development & Architecture",
    description:
      "Expert in building scalable and efficient server-side applications using Node.js, Nest.js, Express, and Koa.js. Skilled in designing RESTful APIs and GraphQL services, with a deep understanding of microservices architecture and event-driven design. Proficient with headless CMS solutions like Strapi.js for rapid API development and content management. Experienced with various database models (SQL, NoSQL), caching strategies, and concurrent techniques (such as message queues, task schedulers) for large-scale microservices. Proficient in managing cloud infrastructure (AWS, Azure, Google Cloud) with a focus on CI/CD pipelines, container orchestration (Docker, Kubernetes), and monitoring tools for continuous deployment and operations.",
    iconColor: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Package,
    title: "Database Management",
    description:
      "Experienced in handling both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) database for dynamic and high-performance applications. Skilled in designing, optimizing queries, indexing strategies, and data modeling for various types of projects. Knowledgeable in database migrations, backup strategies, and data integrity management.",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Shield,
    title: "AWS Services and Security",
    description:
      "Proficient with key AWS services, including S3, Lambda, and other cloud solutions that implement robust security protocols for safeguard data and applications.",
    iconColor: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Zap,
    title: "Attractive Frontend UI",
    description:
      "Creates visually appealing and user-friendly interfaces to enhance the overall user experience. Expertise includes Tailwind CSS, shadcn UI library, TanStack Table for advanced data tables, and Recharts for data visualization. Strong focus on responsive design, accessibility, and performance optimization with modern state management using React Query for efficient data synchronization.",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Code2,
    title: "Frontend Development Toolkit",
    description:
      "Proficient in modern JavaScript frameworks for cross-building, Mid-Next.js and Netlify, Tailwind CSS, Chakra UI, Expo CLI, and Capacitor for building cross-platform mobile applications (iOS & Android). Expertise with WebRTC for real-time video and audio communication, and react-native for mobile development. Skilled in using modern state management libraries (Redux, Zustand, React Query) for advanced performance. Expert in leveraging TanStack ecosystem (Query, Table, Router) for robust application architecture, accessibility, and maintainability.",
    iconColor: "text-gray-600",
    bgColor: "bg-gray-50",
  },
  {
    icon: Smartphone,
    title: "WebSocket and WebRTC",
    description:
      "Expert in implementing real-time communication with WebRTC for peer-to-peer media exchange, enabling seamless video and audio interactions.",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Search,
    title: "Optimization and Debugging",
    description:
      "Proficient in analyzing performance bottlenecks and debugging complex technical issues. Ensuring clean, efficient code, efficient use valuable.",
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipeline & Automation",
    description:
      "Experienced in setting up automated CI/CD pipelines using GitHub for continuous testing, deployment, and integration. Proficient in managing infrastructure with Docker for containerization, Jenkins and GitHub actions for automated testing and deployment. Skilled in creating and maintaining build scripts for fast-paced development cycles with minimal manual intervention, and ensuring smooth DevOps workflows with continuous deployment and zero-downtime releases.",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Package,
    title: "DevOps & Containerization",
    description:
      "Expert in DevOps practices using Docker for containerization and Kubernetes for orchestration, ensuring seamless transitions from development to deployment. Proficient in creating Docker images, managing container lifecycles, and deploying scalable applications using Kubernetes clusters. Experienced in implementing automated deployment pipelines that streamline the entire software delivery process, from code commit to production deployment with zero downtime.",
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: TestTube,
    title: "Quality Assurance & Testing",
    description:
      "Comprehensive testing expertise using industry-standard tools including Cypress for end-to-end testing, Playwright for cross-browser automation, and Jest for unit and integration testing. Skilled in implementing test-driven development (TDD) practices, creating robust test suites, and ensuring code quality through automated testing. Experienced in setting up continuous testing pipelines that catch bugs early and maintain high code quality standards throughout the development lifecycle.",
    iconColor: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    icon: Zap,
    title: "AI-Powered Development",
    description:
      "Leveraging cutting-edge AI tools and prompt engineering to accelerate development workflows and enhance code quality. Experienced in utilizing AI assistants for code generation, debugging, and optimization. Skilled in crafting effective prompts for AI-powered development, implementing intelligent features, and integrating AI capabilities into modern applications for enhanced user experiences and automated solutions.",
    iconColor: "text-pink-600",
    bgColor: "bg-pink-50",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What I Do</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const colors = [
              "bg-blue-50 border-blue-200",
              "bg-green-50 border-green-200",
              "bg-purple-50 border-purple-200",
              "bg-pink-50 border-pink-200",
              "bg-red-50 border-red-200",
              "bg-orange-50 border-orange-200",
              "bg-cyan-50 border-cyan-200",
              "bg-indigo-50 border-indigo-200",
              "bg-lime-50 border-lime-200",
              "bg-teal-50 border-teal-200",
              "bg-violet-50 border-violet-200",
              "bg-rose-50 border-rose-200",
            ]
            const colorClass = colors[index % colors.length]

            return (
              <Card key={index} className={`${colorClass} border-2 p-6 hover:shadow-lg transition`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon size={28} className="text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
