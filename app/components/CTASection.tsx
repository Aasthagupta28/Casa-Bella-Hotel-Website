'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CTASection() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/40 via-teal-400/35 to-gray-500/40"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/50 rounded-lg rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white/50 rounded-lg -rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-white/40 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-white/40 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 max-w-5xl relative z-10">
        <div className="text-center">
          <div className="animate-on-scroll opacity-0 translate-y-8 mb-8">
            <div className="inline-block mb-4">
              <span className="text-xs lg:text-sm font-semibold tracking-[0.2em] text-teal-300 uppercase">
                START YOUR JOURNEY
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-white mb-6 leading-tight">
              Ready to Experience
              <span className="block text-teal-300 mt-2">Casa Bella?</span>
            </h2>
          </div>

          <p className="text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-on-scroll opacity-0 translate-y-8">
            Book your stay today and discover the true meaning of Indian hospitality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-on-scroll opacity-0 translate-y-8">
            <Link
              href="/book"
              className="group relative px-10 py-5 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all duration-300 text-base font-semibold shadow-2xl hover:shadow-teal-500/50 transform hover:-translate-y-2 hover:scale-105 min-w-[180px] text-center overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book Now
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            <Link
              href="/destinations"
              className="group px-10 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-base font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 min-w-[180px] text-center"
            >
              <span className="flex items-center justify-center gap-2">
                View Rooms
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

