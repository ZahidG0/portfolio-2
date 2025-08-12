import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO at TechCorp',
    content: 'Working with you was an absolute pleasure. The attention to detail and commitment to quality is outstanding.',
    avatar: '/images/testimonials/avatar1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Product Manager at DesignHub',
    content: 'The project was delivered on time and exceeded our expectations. Highly recommended!',
    avatar: '/images/testimonials/avatar2.jpg',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    role: 'Founder of StartupX',
    content: 'Exceptional work! The team was professional, responsive, and delivered beyond what we imagined.',
    avatar: '/images/testimonials/avatar3.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What People Say</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Don't just take my word for it. Here's what my clients have to say about working with me.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
