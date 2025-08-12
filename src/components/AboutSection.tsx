"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiServer,
  FiSmartphone,
  FiMail,
  FiMapPin,
  FiCalendar,
} from "react-icons/fi";

export default function AboutSection() {
  const [imageError, setImageError] = useState(false);

  // Skills data
  const skills = [
    { name: "Frontend Development", level: 90, icon: <FiLayout /> },
    { name: "Backend Development", level: 85, icon: <FiServer /> },
    { name: "Database Design", level: 80, icon: <FiDatabase /> },
    { name: "Mobile Development", level: 75, icon: <FiSmartphone /> },
    { name: "UI/UX Design", level: 70, icon: <FiLayout /> },
    { name: "Cloud Technologies", level: 85, icon: <FiServer /> },
  ];

  // Experience data
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description:
        "Lead development of scalable web applications using React, Node.js, and cloud technologies.",
    },
    {
      title: "Web Developer",
      company: "Digital Creations LLC",
      period: "2018 - 2020",
      description:
        "Developed responsive websites and web applications for various clients across different industries.",
    },
    {
      title: "Junior Developer",
      company: "WebStartups Co.",
      period: "2016 - 2018",
      description:
        "Built and maintained client websites using modern web technologies and frameworks.",
    },
  ];

  // Education data
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description:
        "Specialized in Artificial Intelligence and Machine Learning.",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State College",
      period: "2010 - 2014",
      description:
        "Focused on web development and software architecture principles.",
    },
  ];

  // Interests data
  const interests = [
    "Open Source Contribution",
    "Technical Writing",
    "Mentoring Junior Developers",
    "Hiking and Outdoor Activities",
    "Photography",
    "Reading Tech Blogs",
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            I&apos;m a passionate Full Stack Developer with expertise in modern
            web technologies. I love turning ideas into reality through clean,
            efficient, and scalable code.
          </p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="w-full lg:w-1/3">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              {imageError ? (
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">
                    Profile Image
                  </span>
                </div>
              ) : (
                <Image
                  src="/images/profile.jpg"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl font-semibold mb-6">Who am I?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I&apos;m a passionate Full Stack Developer with 5+ years of
              experience in web development. I specialize in building responsive
              and user-friendly applications that deliver exceptional user
              experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My expertise spans across frontend and backend technologies, with
              a strong focus on creating scalable solutions that meet business
              requirements and exceed user expectations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <FiMail className="text-blue-600 dark:text-blue-400 mr-3 text-xl" />
                <span className="text-gray-600 dark:text-gray-400">
                  your.email@example.com
                </span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="text-blue-600 dark:text-blue-400 mr-3 text-xl" />
                <span className="text-gray-600 dark:text-gray-400">
                  City, Country
                </span>
              </div>
              <div className="flex items-center">
                <FiCalendar className="text-blue-600 dark:text-blue-400 mr-3 text-xl" />
                <span className="text-gray-600 dark:text-gray-400">
                  Open to opportunities
                </span>
              </div>
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
              Download Resume
            </button>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-10 text-center">
            My Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 dark:text-blue-400 text-xl mr-3">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold">{skill.name}</h4>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Education Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-10 text-center">
            Experience & Education
          </h3>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Experience */}
            <div className="w-full lg:w-1/2">
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <FiCode className="text-blue-600 dark:text-blue-400 mr-2" />
                Work Experience
              </h4>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400"
                  >
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {exp.period}
                      </span>
                      <h5 className="text-lg font-semibold mt-1">
                        {exp.title}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        {exp.company}
                      </p>
                      <p className="mt-3 text-gray-600 dark:text-gray-300">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="w-full lg:w-1/2">
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <FiCode className="text-blue-600 dark:text-blue-400 mr-2" />
                Education
              </h4>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400"
                  >
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {edu.period}
                      </span>
                      <h5 className="text-lg font-semibold mt-1">
                        {edu.degree}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        {edu.institution}
                      </p>
                      <p className="mt-3 text-gray-600 dark:text-gray-300">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-10 text-center">
            Personal Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
              >
                {interest}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-20 mt-10">
          
          <div>
            <h3 className="text-2xl font-semibold mb-10 text-center">
              Let’s connect
            </h3>
          </div>
          <div>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  id="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  id="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                className="w-full bg-blue-600 text-white py-2 rounded"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
