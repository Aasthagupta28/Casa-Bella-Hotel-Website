'use client';

import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function BrandsPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);

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
      { threshold: 0.1, rootMargin: '50px' }
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

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Dining Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/40 via-gray-400/35 to-gray-500/40"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-3xl"></div>
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
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 animate-on-scroll" style={{ color: '#F59E0B', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              Dining Experience
            </h1>
            <p className="text-xl lg:text-2xl xl:text-3xl text-white leading-relaxed drop-shadow-lg animate-on-scroll" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
              A Culinary Journey Through India
            </p>
          </div>
        </div>
      </section>

      {/* Our Restaurants Introduction */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 mb-6">
              Our Restaurants
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              From traditional Indian flavors to international cuisine, experience the best of culinary arts.
            </p>
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section ref={sectionRef} className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Smaller Listings */}
            <div className="space-y-8">
              {/* Bella Café */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  Bella Café
                </h3>
                <p className="text-gray-600 mb-4">
                  Coffee & Light Bites
                </p>
                <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">6:00 AM - 10:00 PM</span>
                </div>
              </div>

              {/* Sky Lounge */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  Sky Lounge
                </h3>
                <p className="text-gray-600 mb-4">
                  Rooftop Bar & Grill
                </p>
                <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">5:00 PM - 1:00 AM</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg animate-on-scroll" style={{ transitionDelay: '200ms' }}>
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                  alt="Dining Experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column - Main Restaurant Details */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg animate-on-scroll" style={{ transitionDelay: '150ms' }}>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Casa Bella Restaurant
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our signature restaurant offering authentic Indian and international cuisine in an elegant setting.
              </p>

              {/* Operating Hours */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-gray-700 mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">Operating Hours:</span>
                </div>
                <p className="text-gray-600 ml-7">7:00 AM - 11:00 PM</p>
              </div>

              {/* Capacity */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-gray-700 mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="font-semibold">Capacity:</span>
                </div>
                <p className="text-gray-600 ml-7">120 Guests</p>
              </div>

              {/* Our Specialties */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Specialties</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['North Indian', 'South Indian', 'Continental', 'Asian Fusion'].map((cuisine, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{cuisine}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Features</h4>
                <div className="space-y-3">
                  {['Live Cooking Stations', 'Wine Bar', 'Outdoor Seating', 'Private Dining'].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Make a Reservation */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Make a Reservation</h4>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-semibold text-gray-900">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-semibold text-gray-900">Casa Bella Hotel</span>
                  </div>
                </div>
                <Link
                  href="/book"
                  className="block w-full px-6 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  Reserve Table
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Dining Experiences Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-800 mb-4">
              Special Dining Experiences
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Unique culinary experiences that make your stay memorable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Morning Coffee Ritual */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-on-scroll">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 text-center">
                Morning Coffee Ritual
              </h3>
              <p className="text-gray-600 text-center mb-4 leading-relaxed">
                Start your day with our signature coffee blend and fresh pastries in our garden café.
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">6:00 AM - 10:00 AM</span>
              </div>
            </div>

            {/* Sunset Wine Tasting */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 text-center">
                Sunset Wine Tasting
              </h3>
              <p className="text-gray-600 text-center mb-4 leading-relaxed">
                Enjoy premium wines with stunning city views at our rooftop lounge.
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">5:00 PM - 7:00 PM</span>
              </div>
            </div>

            {/* Chef's Table */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 text-center">
                Chef's Table
              </h3>
              <p className="text-gray-600 text-center mb-4 leading-relaxed">
                Exclusive dining experience with the chef, featuring personalized menu and wine pairing.
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="text-sm font-medium">By Reservation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready for a Culinary Journey CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-300 via-gray-400 to-teal-400 text-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-white mb-6">
              Ready for a Culinary Journey?
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
              Book your table and experience the authentic flavors of India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                Make Reservation
              </Link>
              <Link
                href="/menu"
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

