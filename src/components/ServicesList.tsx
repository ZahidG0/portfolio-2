import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building responsive and interactive websites using modern web technologies.',
    icon: '/images/services/code.svg',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces that enhance user experience.',
    icon: '/images/services/design.svg',
  },
  {
    id: 3,
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications with React Native.',
    icon: '/images/services/mobile.svg',
  },
  {
    id: 4,
    title: 'Backend Development',
    description: 'Building robust and scalable server-side applications and APIs.',
    icon: '/images/services/server.svg',
  },
];

export default function ServicesList() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Services</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
          I offer a range of services to help bring your ideas to life. Here's how I can help you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
