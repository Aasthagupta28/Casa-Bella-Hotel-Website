import Header from '../components/Header';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

export default function ReviewsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
}

