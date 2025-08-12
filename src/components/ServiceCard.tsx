import Image from 'next/image';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
        <Image
          src={service.icon}
          alt={service.title}
          width={24}
          height={24}
          className="text-blue-600 dark:text-blue-300"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">
        {service.description}
      </p>
    </div>
  );
}
