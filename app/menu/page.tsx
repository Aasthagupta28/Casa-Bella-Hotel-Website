'use client';

import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function MenuPage() {
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

  const menuCategories = [
    {
      name: 'Breakfast',
      icon: '🍳',
      items: [
        {
          name: 'Traditional Indian Breakfast',
          description: 'Idli, Dosa, Sambar, Chutney',
          price: '₹450',
        },
        {
          name: 'Continental Breakfast',
          description: 'Eggs, Toast, Fresh Juice, Coffee',
          price: '₹550',
        },
        {
          name: 'Healthy Start',
          description: 'Fresh Fruits, Yogurt, Granola',
          price: '₹400',
        },
      ],
    },
    {
      name: 'Lunch',
      icon: '🍽️',
      items: [
        {
          name: 'North Indian Thali',
          description: 'Dal, Sabzi, Roti, Rice, Raita',
          price: '₹650',
        },
        {
          name: 'South Indian Special',
          description: 'Biryani, Curry, Papad, Pickle',
          price: '₹550',
        },
        {
          name: 'Continental Lunch',
          description: 'Pasta, Salad, Soup, Bread',
          price: '₹750',
        },
      ],
    },
    {
      name: 'Dinner',
      icon: '🌙',
      items: [
        {
          name: "Chef's Special Dinner",
          description: 'Multi-course Indian feast',
          price: '₹1200',
        },
        {
          name: 'Grilled Specialties',
          description: 'Fresh seafood and meats',
          price: '₹950',
        },
        {
          name: 'Vegetarian Delight',
          description: 'Gourmet vegetarian cuisine',
          price: '₹750',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-teal-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-200/50 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl"></div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/50 rounded-lg rotate-12"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white/50 rounded-lg -rotate-12"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-white/40 rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-white/40 rounded-full"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-serif text-gray-900 mb-6 animate-on-scroll">
              Our Menu
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed animate-on-scroll">
              Carefully curated dishes that showcase the best of Indian and international cuisine.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
          <div className="space-y-12 lg:space-y-16">
            {menuCategories.map((category, categoryIndex) => (
              <div key={category.name} className="animate-on-scroll" style={{ transitionDelay: `${categoryIndex * 150}ms` }}>
                {/* Category Header with Fork & Knife Icon */}
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-300">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  <h2 className="text-2xl lg:text-3xl font-serif text-gray-900">{category.name}</h2>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="group py-4 border-b border-gray-200 last:border-b-0 animate-on-scroll hover:bg-gray-50 transition-all duration-300 rounded-lg px-2"
                      style={{ transitionDelay: `${(categoryIndex * 150) + (itemIndex * 100)}ms` }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div className="flex-1">
                          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">
                            {item.name}
                          </h3>
                          <p className="text-sm lg:text-base text-gray-600">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0 md:text-right">
                          <span className="text-lg lg:text-xl font-semibold text-gray-700">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Chef Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-amber-50/30 to-transparent"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-amber-200/50 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-teal-400 rounded-lg rotate-12"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-amber-400 rounded-lg -rotate-12"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-teal-300 rounded-full"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 mb-4">
              Meet Our Chef
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 animate-on-scroll">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                  <span className="font-bold text-gray-900">Chef Rajesh Kumar</span> brings over 15 years of culinary expertise to Casa Bella. His passion for authentic Indian and international cuisine is evident in every dish he creates. With a deep understanding of traditional cooking methods and a flair for modern presentation, Chef Rajesh ensures that every meal is a memorable dining experience.
                </p>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  His innovative approach combines the rich flavors of Indian spices with contemporary cooking techniques, creating dishes that honor tradition while embracing innovation. Whether it's a classic North Indian thali or a fusion creation, Chef Rajesh's dedication to excellence shines through in every plate.
                </p>
              </div>

              {/* Credentials */}
              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">Master of Indian Cuisine</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">Award-Winning Chef</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">Wine Pairing Expert</span>
                </div>
              </div>
            </div>

            {/* Right Column - Chef Image */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Chef Rajesh Kumar"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

