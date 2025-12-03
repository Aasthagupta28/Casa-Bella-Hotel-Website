'use client';

import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLElement>(null);

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

    const sections = [sectionRef, statsRef, teamRef, missionRef];
    sections.forEach((ref) => {
      if (ref.current) {
        const elements = ref.current.querySelectorAll('.animate-on-scroll');
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
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Atithi Devo Bhava',
      description: 'We believe guests are God. Every interaction is filled with genuine care and respect.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Family First',
      description: 'Every guest becomes part of our extended family, treated with warmth and personal attention.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Excellence',
      description: 'We strive for perfection in every service, ensuring memorable experiences for our guests.',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Trust & Safety',
      description: 'Your comfort and security are our top priorities, with 24/7 support and assistance.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Guests' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Awards Won' },
    { number: '24/7', label: 'Guest Support' },
  ];

  const teamMembers = [
    {
      name: 'Priya Sharma',
      title: 'General Manager',
      description: 'With over 15 years in hospitality, Priya ensures every guest feels at home.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    },
    {
      name: 'Rajesh Kumar',
      title: 'Head Chef',
      description: 'Master of authentic Indian cuisine with international culinary expertise.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
    {
      name: 'Anita Patel',
      title: 'Spa Director',
      description: 'Specialist in traditional Ayurvedic treatments and modern wellness therapies.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Banner - Visible and Attractive */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-amber-50"></div>
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-teal-600/10 via-teal-400/5 to-transparent transform -skew-y-1"></div>
          <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-l from-amber-600/10 via-amber-400/5 to-transparent transform skew-y-1"></div>
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 animate-on-scroll">
              <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
                ABOUT US
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-serif text-gray-900 mb-6 animate-on-scroll">
              About Casa Bella
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed animate-on-scroll">
              Your Beautiful Home Away from Home
            </p>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/30 to-white"></div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-teal-100/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-100/20 to-transparent"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/50 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-teal-400 rounded-lg rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-amber-400 rounded-lg -rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-teal-300 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Casa Bella.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-on-scroll opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-teal-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={statsRef} className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-500/40 via-gray-400/35 to-teal-500/40"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5zM0 20h20v2.5H0V20zm0 4h20v2.5H0V24zm0 4h20v2.5H0V28zm22 0V24h18v-2H22v-2h18v-2H22v-2h18v-2H22v-2h18V8h-18V6h18V4h-18V2h18V0H22v20.5z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/40 rounded-lg rotate-12"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-white/40 rounded-lg -rotate-12"></div>
          <div className="absolute top-1/3 left-1/4 w-20 h-20 border-2 border-white/30 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border-2 border-white/30 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              Casa Bella by Numbers
            </h2>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              Our commitment to excellence reflected in our achievements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-on-scroll opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl lg:text-6xl font-bold text-white mb-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  {stat.number}
                </div>
                <div className="text-lg text-white/90 font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={teamRef} className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/20 to-white"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-teal-100/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-amber-100/30 to-transparent"></div>
        
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-200/50 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-teal-400 rounded-lg rotate-12"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-amber-400 rounded-lg -rotate-12"></div>
          <div className="absolute top-1/3 left-1/4 w-20 h-20 border-2 border-teal-300 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border-2 border-amber-300 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 mb-4" style={{ color: '#111827' }}>
              Meet Our Team
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
              The passionate people behind Casa Bella's exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden animate-on-scroll opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative w-full h-64 mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-semibold mb-3">
                  {member.title}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={missionRef} className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-amber-50"></div>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-br from-teal-200/30 via-transparent to-transparent transform -skew-y-2"></div>
        <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-tl from-amber-200/30 via-transparent to-transparent transform skew-y-2"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/50 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-teal-400 rounded-lg rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-amber-400 rounded-lg -rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-teal-300 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-on-scroll opacity-0 translate-y-8">
              <div className="text-teal-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors" style={{ color: '#111827' }}>
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ color: '#4B5563' }}>
                To provide exceptional hospitality that combines the warmth of Indian culture with modern luxury, creating unforgettable experiences for every guest. We are committed to maintaining the highest standards of service while preserving the authentic spirit of "Atithi Devo Bhava" - treating every guest as a divine visitor.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-on-scroll opacity-0 translate-y-8" style={{ transitionDelay: '150ms' }}>
              <div className="text-teal-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors" style={{ color: '#111827' }}>
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ color: '#4B5563' }}>
                To be India's most beloved hotel brand, known for authentic hospitality, cultural richness, and world-class service. We envision Casa Bella as a bridge between traditional Indian values and contemporary luxury, setting new standards in the hospitality industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


