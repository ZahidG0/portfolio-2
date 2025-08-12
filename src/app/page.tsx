import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import ServicesList from '@/components/ServicesList';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import FeaturedProjects from '@/components/FeaturedProjects';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedProjects />
      <ProjectsGrid />
      <ServicesList />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
