'use client';

import { useEffect, useRef } from 'react';

interface Amenity {
  id: number;
  name: string;
  icon: string;
}

const amenities: Amenity[] = [
  { id: 1, name: '24/7 Room Service', icon: '🍽️' },
  { id: 2, name: 'Concierge Service', icon: '🎩' },
  { id: 3, name: 'Laundry Service', icon: '👔' },
  { id: 4, name: 'Free Parking', icon: '🅿️' },
  { id: 5, name: 'Swimming Pool', icon: '🏊' },
  { id: 6, name: 'Travel Desk', icon: '✈️' },
  { id: 7, name: 'Currency Exchange', icon: '💱' },
  { id: 8, name: 'Medical Assistance', icon: '🏥' },
];

export default function AmenitiesSection() {
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
    <section ref={sectionRef} className="py-12 lg:py-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-50/20 to-white"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-teal-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-teal-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-teal-300 rounded-lg rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/4 w-18 h-18 border-2 border-teal-300 rounded-lg -rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 max-w-6xl relative z-10">
        <div className="text-center mb-12 lg:mb-16 animate-on-scroll opacity-0 translate-y-8">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 mb-6">
            Hotel Amenities
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need for a comfortable and memorable stay.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.id}
              className="group animate-on-scroll opacity-0 translate-y-8"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-teal-200 h-full flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                    <span className="text-2xl lg:text-3xl">{amenity.icon}</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-sm lg:text-base font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                  {amenity.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

