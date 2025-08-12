"use client";

import { FaGithub, FaLinkedinIn, FaTwitter, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Hi, I'm <span className="text-blue-600">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 font-medium mb-6">
            Full Stack Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            I'm a passionate developer who loves to build amazing web applications with modern technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center font-medium"
            >
              Contact Me <FaArrowRight className="ml-2" />
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center font-medium"
            >
              View My Work
            </a>
          </div>
          
          <div className="mt-12 flex justify-center md:justify-start space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <FaLinkedinIn className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="hidden md:flex justify-center">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-100 dark:border-gray-700 shadow-lg">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Your+Photo';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
