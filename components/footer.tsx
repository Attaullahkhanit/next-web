import { Github, Linkedin, Mail, Package } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Attaullah Khan</h3>
            <p className="text-purple-200">Full Stack Developer & Designer</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-purple-200">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.github.com/attaullahkhanit" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-white transition"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/attaullahkhanit" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.npmjs.com/package/opti-freq" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-white transition"
                aria-label="npm"
              >
                <Package size={24} />
              </a>
              <a 
                href="mailto:attaullahkhanit@gmail.com" 
                className="text-purple-200 hover:text-white transition"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 pt-8">
          <div className="text-center text-purple-200 text-sm">
            <p>&copy; 2025 Attaullah Khan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}