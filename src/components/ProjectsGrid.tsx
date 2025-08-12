import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, cart, and payment integration.',
    image: '/images/projects/project1.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: '/images/projects/project2.jpg',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with modern web technologies.',
    image: '/images/projects/project3.jpg',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    demo: '#',
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
