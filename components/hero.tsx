import Image from "next/image"
import { Github, Linkedin, Twitter, Mail, Package } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="text-lg text-purple-600 font-semibold mb-2">LETS BUILD SOMETHING TOGETHER</h3>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Hi, I am <span className="text-purple-600">Attaullah Khan</span>
          </h1>

          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg">
              <Image
                src="/att.jpeg"
                alt="Attaullah Khan"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
          </div>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            I am a seasoned MERN Stack Developer with over seven years of experience in web development and five years specializing in React.js and Next.js as Senior Front End Developer. My expertise lies in crafting high-performance, responsive, and dynamic web applications, often integrating generative AI to elevate user experiences. I have developed and worked on different web projects, which include more than 50 web application projects.
            As a Senior Web Developer, I have a proven track record of building scalable digital solutions that align with business objectives while delivering seamless and engaging interfaces. My passion for innovation, creativity, and problem-solving drives me to continuously explore emerging technologies and push the boundaries of web development.
            I am seeking a challenging role in the software industry where I can contribute my expertise, embrace continuous learning, and create impactful, cutting-edge digital products.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition font-semibold">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-gray-400 text-gray-700 rounded-full hover:border-purple-600 hover:text-purple-600 transition font-semibold">
              Download CV
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a 
                href="https://www.github.com/attaullahkhanit" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-900 transition"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/attaullahkhanit" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.npmjs.com/package/opti-freq" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800 transition"
                aria-label="npm"
              >
                <Package size={24} />
              </a>
              <a 
                href="mailto:attaullahkhanit@gmail.com" 
                className="text-red-300 hover:text-red-600 transition"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}
