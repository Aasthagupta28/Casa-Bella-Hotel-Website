'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  overlayTitle: string;
  overlaySubtitle: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'SPA & WELLNESS',
    description: 'Traditional Ayurvedic treatments and modern spa',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    overlayTitle: 'REJUVENATE YOUR MIND AND BODY',
    overlaySubtitle: 'Traditional Ayurvedic treatments and modern spa',
  },
  {
    id: 2,
    title: 'FITNESS CENTER',
    description: 'Fully equipped gym for health-conscious guests',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    overlayTitle: 'STAY FIT AND HEALTHY',
    overlaySubtitle: 'Fully equipped gym for health-conscious guests',
  },
  {
    id: 3,
    title: 'BUSINESS FACILITIES',
    description: 'Modern conference rooms, banquet halls',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    overlayTitle: 'PROFESSIONAL MEETING SPACES',
    overlaySubtitle: 'Modern conference rooms and banquet halls',
  },
  {
    id: 4,
    title: 'FREE WIFI',
    description: 'High-speed internet throughout the hotel',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    overlayTitle: 'STAY CONNECTED',
    overlaySubtitle: 'High-speed internet throughout the hotel',
  },
  {
    id: 5,
    title: 'AIRPORT TRANSFERS',
    description: 'Complimentary airport transfer service',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    overlayTitle: 'SEAMLESS TRAVEL',
    overlaySubtitle: 'Complimentary airport transfer service',
  },
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
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
            el.classList.add('animate-fade-in');
            el.classList.remove('opacity-0');
          }, 100);
        }
      });
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section ref={sectionRef} className="py-8 lg:py-12 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/40 via-white to-gray-50"></div>
      <div className="absolute top-20 left-0 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl"></div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-20 h-20 border-2 border-teal-400 rounded-lg rotate-45"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-teal-400 rounded-lg -rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-teal-300 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 border-2 border-teal-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
        <div className="text-center mb-10 lg:mb-12 animate-on-scroll">
          <div className="inline-block mb-4">
            <span className="text-xs lg:text-sm font-semibold tracking-[0.2em] text-teal-600 uppercase">
              WHAT WE OFFER
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif text-gray-900 mb-4">
            OUR SERVICES
          </h2>
        </div>

        <div className="relative">
          <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
            {services.map((service, index) => {
              const offset = index - currentIndex;
              const isActive = index === currentIndex;
              const isPrev = offset === -1 || (currentIndex === 0 && index === services.length - 1);
              const isNext = offset === 1 || (currentIndex === services.length - 1 && index === 0);

              return (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    isActive
                      ? 'opacity-100 translate-x-0 scale-100 z-10'
                      : isPrev
                      ? 'opacity-30 -translate-x-full scale-95 z-0'
                      : isNext
                      ? 'opacity-30 translate-x-full scale-95 z-0'
                      : 'opacity-0 translate-x-0 scale-95 z-0'
                  }`}
                >
                  <div className="grid lg:grid-cols-2 gap-6 h-full">
                    <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl group">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${service.image})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-teal-400 mb-4 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                            {service.overlayTitle}
                          </h3>
                          <p className="text-sm lg:text-base text-white drop-shadow-lg max-w-md" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                            {service.overlaySubtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 flex flex-col justify-center border border-gray-100">
                      <div className="mb-6">
                        <div className="w-12 h-1 bg-teal-600 mb-4"></div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm lg:text-base text-gray-600 mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      <Link
                        href="/offers"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 text-sm font-medium w-fit group/btn"
                      >
                        <span>Explore More</span>
                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 rounded-full p-4 shadow-xl transition-all hover:scale-110"
            aria-label="Previous service"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 rounded-full p-4 shadow-xl transition-all hover:scale-110"
            aria-label="Next service"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-teal-600'
                    : 'w-2 h-2 bg-gray-400 hover:bg-gray-600'
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

