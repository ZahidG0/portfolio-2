"use client";

import { FaGithub, FaLinkedinIn, FaTwitter, FaArrowRight } from 'react-icons/fa';
import profileImg from '../assets/Hrero.png'
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Content - On left for medium and large screens */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
            <span className="w-2 h-2 mr-2 bg-blue-500 rounded-full animate-pulse"></span>
            Available for work
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">Md. Zahid Hasan</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-medium mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Front End Developer
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I craft exceptional digital experiences with modern web technologies. Specializing in React, Next.js, and TypeScript, I bring designs to life with clean, efficient code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 flex items-center justify-center font-medium text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Get In Touch <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors flex items-center justify-center font-medium text-lg group"
            >
              <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">View My Work</span>
              <svg className="w-5 h-5 ml-2 text-gray-600 dark:text-gray-300 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          <div className="mt-12 flex justify-center lg:justify-start space-x-6">
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

        {/* Image - On right for medium and large screens */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-xs md:max-w-md sm:[250px] group">
            {/* Gradient border */}
            <div className="relative inline-block rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
              <div className="relative w-full h-auto rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 p-1">
                <Image
                  src={profileImg}
                  alt="Profile"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg transition-all duration-700 group-hover:scale-105"
                  priority
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/500x600?text=Your+Photo';
                  }}
                />
              </div>
            </div>
            {/* Animated glow effect - only on hover for larger screens */}
            <div className="hidden lg:block absolute -inset-4 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
