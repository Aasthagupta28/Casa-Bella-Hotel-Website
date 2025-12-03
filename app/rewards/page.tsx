'use client';

import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function RewardsPage() {
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

  const benefits = [
    {
      icon: '⭐',
      title: 'Earn Points',
      description: 'Earn points on every stay, dining, and spa experience',
    },
    {
      icon: '🎁',
      title: 'Exclusive Rewards',
      description: 'Redeem points for room upgrades, spa treatments, and dining credits',
    },
    {
      icon: '🏆',
      title: 'Member Tiers',
      description: 'Unlock higher tiers with more benefits and exclusive perks',
    },
    {
      icon: '💎',
      title: 'VIP Treatment',
      description: 'Priority check-in, late checkout, and personalized service',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Sign Up',
      description: 'Create your free account in minutes',
      icon: '📝',
    },
    {
      step: '2',
      title: 'Earn Points',
      description: 'Collect points with every stay and purchase',
      icon: '💰',
    },
    {
      step: '3',
      title: 'Redeem Rewards',
      description: 'Use your points for upgrades and experiences',
      icon: '🎯',
    },
    {
      step: '4',
      title: 'Level Up',
      description: 'Reach higher tiers for exclusive benefits',
      icon: '🚀',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-teal-50 via-white to-teal-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-3xl"></div>
        </div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-teal-400 rounded-lg rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-teal-400 rounded-lg -rotate-12"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-teal-300 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-teal-300 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 animate-on-scroll">
              <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
                REWARDS PROGRAM
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Casa Bella
              <span className="block text-teal-600">Rewards</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 animate-on-scroll">
              Join our loyalty program and unlock exclusive benefits, earn points on every stay, and enjoy personalized experiences that make every visit memorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
              <Link
                href="/signup"
                className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Join Now - It's Free
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ color: '#111827' }}>
              Why Join Casa Bella Rewards?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
              Experience the benefits of being a valued member
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-teal-50/30 rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-teal-100 animate-on-scroll opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-on-scroll">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Learn More</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#111827' }}>
              How It Works
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
              Start earning rewards in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="relative group animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-teal-200 to-teal-300 transform translate-x-4 z-0" style={{ width: 'calc(100% - 2rem)' }}></div>
                )}

                <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-teal-100 h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg" style={{ color: '#FFFFFF' }}>
                    {step.step}
                  </div>

                  <div className="text-5xl mb-4 mt-4 transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-teal-600 transition-colors" style={{ color: '#111827' }}>
                    {step.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#4B5563' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#111827' }}>
                Earn Points Everywhere
              </h2>
              <p className="text-lg" style={{ color: '#4B5563' }}>
                Collect points on all your hotel experiences
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { category: 'Hotel Stays', points: '10 points per $1', icon: '🏨' },
                { category: 'Dining', points: '5 points per $1', icon: '🍽️' },
                { category: 'Spa & Wellness', points: '8 points per $1', icon: '💆' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-teal-100 animate-on-scroll"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#111827' }}>{item.category}</h3>
                  <p className="font-semibold" style={{ color: '#0D9488' }}>{item.points}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-400 to-teal-500 text-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-on-scroll" style={{ color: '#FFFFFF' }}>
              Ready to Start Earning Rewards?
            </h2>
            <p className="text-lg lg:text-xl mb-8 animate-on-scroll" style={{ color: '#CCFBF1', transitionDelay: '100ms' }}>
              Join thousands of members already enjoying exclusive benefits and rewards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <Link
                href="/signup"
                className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sign Up Free
              </Link>
              <Link
                href="/login"
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                Member Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

