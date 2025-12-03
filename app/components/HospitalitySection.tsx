'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function HospitalitySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        observer.observe(el);
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setTimeout(() => {
            el.classList.add('animate-fade-in-up');
            el.classList.remove('opacity-0', 'translate-y-8');
          }, 100);
        }
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 lg:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-white to-gray-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl"></div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-teal-400 rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 border-2 border-teal-400 rounded-lg -rotate-12"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 border-2 border-teal-300 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 border-2 border-teal-300 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-5 lg:pr-12 animate-on-scroll opacity-0 translate-y-8">
            <div className="inline-block">
              <span className="text-xs lg:text-sm font-semibold tracking-[0.2em] text-teal-600 uppercase">
                ATITHI DEVO BHAVA
              </span>
            </div>

            <h2 className="text-xl lg:text-2xl xl:text-3xl font-serif text-gray-900 leading-tight">
              <span className="block">Experience True Indian</span>
              <span className="block">Hospitality</span>
              <span className="block text-teal-600 mt-2">At Casa Bella</span>
            </h2>

            <div className="space-y-3 text-xs lg:text-sm text-gray-600 leading-relaxed">
              <p>
                In India, we believe <strong className="text-gray-900">"Guests are God"</strong> – a philosophy that
                guides every moment of your stay. At Casa Bella, we don't just welcome you; we embrace you with care,
                luxury, and a personal touch that makes you feel truly special.
              </p>
              <p>
                Casa Bella is where tradition meets modernity. Whether you're here for business, leisure, or a family
                holiday, our thoughtfully designed rooms, world-class amenities, and personalized service ensure an
                unforgettable experience.
              </p>
              <p>
                From the moment you arrive, you'll be greeted with warm smiles, aromatic flavors, and a sense of
                belonging. Our rooms and suites are designed for relaxation and modern comfort, while retaining the
                authentic charm of Indian hospitality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/about"
                className="px-5 py-2.5 border-2 border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-all duration-300 text-center text-xs font-medium"
              >
                Learn More
              </Link>
              <Link
                href="/book"
                className="px-5 py-2.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-all duration-300 text-center text-xs font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Book Now
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group animate-on-scroll opacity-0 translate-y-8">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-transparent to-gray-900/30"></div>
            </div>
            <div className="absolute top-6 right-6 w-24 h-24 border-2 border-white/40 rounded-lg backdrop-blur-sm opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-6 left-6 w-20 h-20 border-2 border-white/40 rounded-lg backdrop-blur-sm opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

