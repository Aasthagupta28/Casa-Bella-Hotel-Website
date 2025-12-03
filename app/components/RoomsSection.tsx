'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface Room {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

const rooms: Room[] = [
  {
    id: 1,
    title: 'Standard Rooms',
    description: 'Comfortable and elegant rooms with modern amenities',
    price: '8,999',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
  },
  {
    id: 2,
    title: 'Deluxe Suites',
    description: 'Spacious suites with premium amenities and city views',
    price: '15,999',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
  },
  {
    id: 3,
    title: 'Premium Luxury',
    description: 'Ultimate luxury with personalized butler service',
    price: '25,999',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
  },
];

export default function RoomsSection() {
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
    <section ref={sectionRef} className="py-12 lg:py-16 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/40 via-white to-gray-50/50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl"></div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-teal-400 rounded-lg rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-teal-400 rounded-lg -rotate-12"></div>
        <div className="absolute top-1/2 left-20 w-20 h-20 border-2 border-teal-300 rounded-full"></div>
        <div className="absolute bottom-1/3 right-20 w-16 h-16 border-2 border-teal-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
        <div className="text-center mb-12 lg:mb-16 animate-on-scroll opacity-0 translate-y-8">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 mb-6">
            Rooms & Suites
          </h2>
          <p className="text-sm lg:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose from our thoughtfully designed rooms and suites, each offering comfort and luxury.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="group animate-on-scroll opacity-0 translate-y-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${room.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-end justify-between">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs text-gray-500">₹</span>
                          <span className="text-2xl lg:text-3xl font-bold text-gray-900">{room.price}</span>
                        </div>
                        <span className="text-xs text-gray-500 block text-right">per night</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-teal-600/0 group-hover:bg-teal-600/10 transition-all duration-500"></div>
                </div>

                <div className="p-6 lg:p-8 flex-grow flex flex-col">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {room.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6 flex-grow">
                    {room.description}
                  </p>
                  
                  <Link
                    href="/destinations"
                    className="inline-flex items-center gap-2 text-teal-600 font-medium text-sm hover:gap-3 transition-all group/link"
                  >
                    <span>View Details</span>
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-on-scroll opacity-0 translate-y-8">
          <Link
            href="/destinations"
            className="inline-block px-10 py-4 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all duration-300 text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}

