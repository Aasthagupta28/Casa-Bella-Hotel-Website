import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import HospitalitySection from './components/HospitalitySection';
import ServicesSection from './components/ServicesSection';
import RoomsSection from './components/RoomsSection';
import TestimonialsSection from './components/TestimonialsSection';
import AmenitiesSection from './components/AmenitiesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <HospitalitySection />
      <ServicesSection />
      <RoomsSection />
      <TestimonialsSection />
      <AmenitiesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
