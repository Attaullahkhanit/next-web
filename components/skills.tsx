import { Card } from "@/components/ui/card"

const skills = [
  {
    icon: "⚛️",
    label: "React",
    subtitle: "Next.js",
    description: "A powerful library for building dynamic UIs, focused on optimizing component performance.",
    color: "bg-blue-50",
  },
  {
    icon: "📘",
    label: "NEXT",
    subtitle: "Next.js",
    description: "A React-based framework offering SSR, faster load times, and SEO. Ideal for high-performance.",
    color: "bg-purple-50",
  },
  {
    icon: "💾",
    label: "SQL",
    subtitle: "Databases",
    description: "A versatile programming language for databases (CRUD) modern, dynamic web solutions, and more.",
    color: "bg-green-50",
  },
  {
    icon: "📘",
    label: "TypeScript",
    subtitle: "Type Safety",
    description: "A strongly typed superset of JavaScript that enhances code quality, maintainability, and developer productivity with advanced type checking and IntelliSense support.",
    color: "bg-blue-50",
  },
  {
    icon: "🎯",
    label: "GraphQL",
    subtitle: "API Query Language",
    description: "A powerful query language for APIs that enables efficient data fetching, reduces over-fetching, and provides a flexible schema-based approach for modern applications.",
    color: "bg-pink-50",
  },
  {
    icon: "🔧",
    label: "Remix",
    subtitle: "React Toolkit",
    description: "An open-source library that simplifies state management with Node.js for consistency. Supports Jest and Vitest for customization.",
    color: "bg-purple-50",
  },
  {
    icon: "☁️",
    label: "RESTFUL API",
    subtitle: "",
    description: "A web services architecture using HTTP methods to create, read, update, and delete data resources via standard URLs.",
    color: "bg-cyan-50",
  },
  {
    icon: "🎯",
    label: "React Query",
    subtitle: "",
    description: "A library for efficient and declarative data fetching in React applications.",
    color: "bg-orange-50",
  },
  {
    icon: "⚡",
    label: "Electron JS",
    subtitle: "",
    description: "A framework for building cross-platform desktop applications using web technologies like HTML, CSS, and JavaScript.",
    color: "bg-blue-50",
  },
  {
    icon: "🟢",
    label: "Node.js",
    subtitle: "",
    description: "A runtime environment for executing JavaScript on the server-side.",
    color: "bg-green-50",
  },
  {
    icon: "🌐",
    label: "Express.js",
    subtitle: "",
    description: "A minimalist and flexible framework for Node.js.",
    color: "bg-gray-50",
  },
  {
    icon: "❤️",
    label: "Nest.js",
    subtitle: "",
    description: "A progressive Node.js framework for building efficient and scalable server-side applications.",
    color: "bg-red-50",
  },
  {
    icon: "🗄️",
    label: "MongoDB",
    subtitle: "",
    description: "A NoSQL database for storing and retrieving non-relational data.",
    color: "bg-green-50",
  },
  {
    icon: "🍭",
    label: "Jest",
    subtitle: "",
    description: "A CSS preprocessor that adds advanced styling features and functionality.",
    color: "bg-pink-50",
  },
  {
    icon: "🎨",
    label: "Bootstrap",
    subtitle: "",
    description: "A responsive UI framework for quick HTML/CSS development with pre-built components.",
    color: "bg-purple-50",
  },
  {
    icon: "🎨",
    label: "Ant Design",
    subtitle: "",
    description: "A comprehensive UI library for React, offering design components with customization options.",
    color: "bg-blue-50",
  },
  {
    icon: "🎨",
    label: "Tailwind CSS",
    subtitle: "",
    description: "A utility-first CSS framework for rapidly building custom designs.",
    color: "bg-teal-50",
  },
  {
    icon: "📧",
    label: "MUI React",
    subtitle: "",
    description: "A popular React UI library providing pre-made components for modern web applications.",
    color: "bg-blue-50",
  },
  {
    icon: "🎨",
    label: "Styled Components",
    subtitle: "",
    description: "A CSS-in-React tool for writing dynamic, scoped styles directly within your components.",
    color: "bg-purple-50",
  },
  {
    icon: "🔥",
    label: "Firebase",
    subtitle: "",
    description: "A cloud-based platform offering real-time databases, authentication, and hosting.",
    color: "bg-yellow-50",
  },
  {
    icon: "🐙",
    label: "GitHub",
    subtitle: "",
    description: "A platform for version control and collaboration project development.",
    color: "bg-gray-900 text-white",
  },
  {
    icon: "📱",
    label: "Postman",
    subtitle: "",
    description: "An open-source technology suite used for consuming web services. Streamlines API request testing for developers in various application or CI/CD pipelines.",
    color: "bg-orange-50",
  },
  {
    icon: "📋",
    label: "Azure DevOps",
    subtitle: "",
    description: "A suite of development tools for planning, building, and managing applications.",
    color: "bg-blue-50",
  },
  {
    icon: "📊",
    label: "Jira",
    subtitle: "",
    description: "A project management tool for tracking work, managing agile workflow.",
    color: "bg-blue-50",
  },
  {
    icon: "🧪",
    label: "Jest",
    subtitle: "",
    description: "A testing framework for ensuring code reliability and quality in JavaScript.",
    color: "bg-red-50",
  },
]

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-100 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-3">My Skills</h2>
          <p className="text-purple-800 text-sm md:text-base max-w-3xl mx-auto">
            Empowering ideas with cutting-edge technology. I transform visions into extraordinary digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className={`${skill.color} ${skill.color.includes('gray-900') ? '' : 'border border-purple-200'} p-6 hover:shadow-lg transition-all duration-300 cursor-pointer`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className={`text-lg font-bold mb-1 ${skill.color.includes('gray-900') ? 'text-white' : 'text-gray-900'}`}>
                  {skill.label}
                </h3>
                {skill.subtitle && (
                  <p className={`text-sm font-medium mb-2 ${skill.color.includes('gray-900') ? 'text-gray-300' : 'text-purple-600'}`}>
                    {skill.subtitle}
                  </p>
                )}
                <p className={`text-xs leading-relaxed ${skill.color.includes('gray-900') ? 'text-gray-200' : 'text-gray-700'}`}>
                  {skill.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}