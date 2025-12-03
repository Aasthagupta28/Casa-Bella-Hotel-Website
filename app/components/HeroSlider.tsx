'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  location: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80',
    title: 'Stay. Indulge. Celebrate - India',
    subtitle: 'THE CASA BELLA WAY',
    location: 'CASA BELLA, INDIA',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80',
    title: 'Luxury Redefined',
    subtitle: 'THE CASA BELLA WAY',
    location: 'CASA BELLA, INDIA',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=80',
    title: 'Unforgettable Experiences',
    subtitle: 'THE CASA BELLA WAY',
    location: 'CASA BELLA, INDIA',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-4 leading-tight drop-shadow-2xl" style={{ fontFamily: 'cursive', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-4xl lg:text-6xl font-bold text-teal-300 mb-8 drop-shadow-xl" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>
              {slides[currentSlide].subtitle}
            </h2>
            <div className="flex items-center gap-2 text-white mb-6 drop-shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.8))' }}>
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg font-medium" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>{slides[currentSlide].location}</span>
            </div>
            <div className="flex gap-4">
              <Link
                href="/destinations"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all font-medium"
              >
                Explore
              </Link>
              <Link
                href="/book"
                className="px-8 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all font-medium shadow-lg"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gray-900/50 hover:bg-gray-900/70 text-white rounded-full p-3 transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gray-900/50 hover:bg-gray-900/70 text-white rounded-full p-3 transition-all"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

