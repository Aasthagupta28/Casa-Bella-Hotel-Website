'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    name: 'Spa & Wellness',
    description: 'Indulge in rejuvenating spa treatments and wellness programs designed to refresh your mind, body, and soul. Experience traditional Ayurvedic therapies combined with modern techniques.',
    icon: '💆',
  },
  {
    id: 2,
    name: 'Fitness Center',
    description: 'Stay active during your stay with our state-of-the-art fitness center. Equipped with modern equipment and professional trainers to help you maintain your fitness routine.',
    icon: '🏋️',
  },
  {
    id: 3,
    name: 'Business Facilities',
    description: 'Perfect for corporate travelers, our business facilities include modern conference rooms, meeting spaces, and all the amenities you need for successful business events.',
    icon: '💼',
  },
  {
    id: 4,
    name: 'Concierge Services',
    description: 'Our dedicated concierge team is available 24/7 to assist with travel arrangements, restaurant reservations, local recommendations, and personalized services.',
    icon: '🎩',
  },
];

export default function OffersPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const additionalServicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const heroElements = heroRef.current.querySelectorAll('.animate-on-scroll');
      heroElements.forEach((el) => {
        el.classList.add('animate-fade-in-up');
        el.classList.remove('opacity-0', 'translate-y-8');
      });
    }

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
          el.classList.add('animate-fade-in-up');
          el.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }

    if (additionalServicesRef.current) {
      const additionalElements = additionalServicesRef.current.querySelectorAll('.animate-on-scroll');
      additionalElements.forEach((el) => {
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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Top Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/40 via-teal-400/35 to-gray-500/40"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-3xl"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/50 rounded-lg rotate-12"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white/50 rounded-lg -rotate-12"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-white/40 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-white/40 rounded-full"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-teal-400 mb-6 drop-shadow-2xl animate-on-scroll" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.8)' }}>
              Our Services
            </h1>
            <p className="text-lg lg:text-xl xl:text-2xl text-white leading-relaxed mb-12 drop-shadow-lg animate-on-scroll" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
              Experience world-class hospitality with our comprehensive range of services designed for your comfort and convenience.
            </p>

            {/* Icons Row */}
            <div className="flex justify-center gap-6 lg:gap-8 animate-on-scroll">
              {[
                { icon: '❤️', label: 'Wellness' },
                { icon: '💪', label: 'Fitness' },
                { icon: '👥', label: 'Community' },
                { icon: '🚗', label: 'Transport' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 group-hover:border-white/50">
                    <span className="text-2xl lg:text-3xl">{item.icon}</span>
                  </div>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                      <span className="text-3xl">
                        {service.id === 1 ? '💆' : service.id === 2 ? '🏋️' : service.id === 3 ? '💼' : '🎩'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section ref={additionalServicesRef} className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 mb-6">
              Additional Services
            </h2>
            <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need for a comfortable and convenient stay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                id: 1,
                title: 'Concierge Service',
                description: '24/7 assistance for all your needs',
                availability: '24/7',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
              },
              {
                id: 2,
                title: 'Free WiFi',
                description: 'High-speed internet throughout the hotel',
                availability: '24/7',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                ),
              },
              {
                id: 3,
                title: 'Security',
                description: 'Round-the-clock security and surveillance',
                availability: '24/7',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                id: 4,
                title: 'Room Service',
                description: '24/7 in-room dining and service',
                availability: '24/7',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                id: 5,
                title: 'Event Planning',
                description: 'Complete event and wedding planning',
                availability: 'By Appointment',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                id: 6,
                title: 'Medical Assistance',
                description: 'On-call doctor and medical services',
                availability: '24/7',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div
                key={service.id}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-on-scroll"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 text-teal-600">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Availability */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{service.availability}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 lg:mt-16">
            <Link
              href="/book"
              className="w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
            >
              Book Services
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-900 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

