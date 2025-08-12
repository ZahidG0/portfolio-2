// components/FeaturedProjects.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  client: string;
  year: number;
  role: string;
  liveDemo?: string;
  github: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    category: "SaaS Platform",
    title: "TaskFlow - Project Management Dashboard",
    description: "A comprehensive project management solution built with React, TypeScript, and Node.js. Features include real-time collaboration, Gantt charts, time tracking, and automated reporting. Integrated with Slack and GitHub for seamless workflow automation.",
    client: "ProductivityPro Inc.",
    year: 2024,
    role: "Full Stack Developer",
    liveDemo: "https://taskflow-demo.com",
    github: "https://github.com/example/taskflow",
    image: "/images/projects/project1.jpg"
  },
  {
    id: 2,
    category: "E-commerce",
    title: "StyleHub - Fashion E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js 14 and Tailwind CSS. Implemented advanced features like AI-powered product recommendations, AR try-on functionality, and a custom checkout flow. Integrated with Stripe and PayPal for payments.",
    client: "StyleHub LLC",
    year: 2023,
    role: "Front-end Developer",
    liveDemo: "https://stylehub-demo.com",
    github: "https://github.com/example/stylehub",
    image: "/images/projects/project2.jpg"
  },
  {
    id: 3,
    category: "FinTech",
    title: "WealthWatch - Personal Finance Dashboard",
    description: "A personal finance dashboard that connects to bank accounts and categorizes transactions automatically. Built with React and Redux, featuring data visualization with D3.js and secure authentication with OAuth 2.0. Processes over 10,000 transactions monthly.",
    client: "FinSecure Corp",
    year: 2024,
    role: "Front-end Developer",
    liveDemo: "https://wealthwatch-demo.com",
    github: "https://github.com/example/wealthwatch",
    image: "/images/projects/project3.jpg"
  },
  {
    id: 4,
    category: "Healthcare",
    title: "MediConnect - Telemedicine Platform",
    description: "A HIPAA-compliant telemedicine platform connecting patients with healthcare providers. Features include video consultations, prescription management, and appointment scheduling. Built with React Native for cross-platform support and Node.js backend.",
    client: "HealthFirst Network",
    year: 2023,
    role: "Mobile Developer",
    liveDemo: "https://mediconnect-demo.com",
    github: "https://github.com/example/mediconnect",
    image: "/images/projects/project4.jpg"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-2">Featured Projects</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mb-12">
          Here are some of the selected projects that showcase my passion for front-end development.
        </p>

        <div className="space-y-20">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#111111] rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#b3ff0030] transform hover:-translate-y-2 border border-gray-800 hover:border-[#b3ff0040]"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/2 h-64 md:h-auto relative group overflow-hidden">
                  <Link href={project.liveDemo || project.github} target="_blank">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                    />
                  </Link>
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <span className="inline-block bg-gray-800 text-white text-xs px-3 py-1 rounded-full mb-3 w-fit transition-all duration-300 hover:bg-[#b3ff00] hover:text-black">
                    {project.category}
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 transition-all duration-300 group-hover:text-[#b3ff00]">{project.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base mb-6 transition-all duration-300 group-hover:text-gray-300">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-white text-sm font-medium transition-all duration-300 group-hover:text-[#b3ff00]">Client</p>
                      <p className="text-gray-400 text-sm transition-all duration-300 group-hover:text-gray-300">{project.client}</p>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium transition-all duration-300 group-hover:text-[#b3ff00]">Year</p>
                      <p className="text-gray-400 text-sm transition-all duration-300 group-hover:text-gray-300">{project.year}</p>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium transition-all duration-300 group-hover:text-[#b3ff00]">Role</p>
                      <p className="text-gray-400 text-sm transition-all duration-300 group-hover:text-gray-300">{project.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.liveDemo && (
                      <Link
                        href={project.liveDemo}
                        target="_blank"
                        className="text-[#b3ff00] hover:underline flex items-center gap-1 text-sm font-medium group transition-all duration-300 hover:text-white"
                      >
                        Live Demo
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    )}
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-[#b3ff00] hover:underline flex items-center gap-1 text-sm font-medium group transition-all duration-300 hover:text-white"
                    >
                      See on GitHub
                      <FiGithub className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}