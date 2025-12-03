'use client';

import { useState, useEffect, useRef } from 'react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    quote: 'Perfect blend of traditional Indian warmth and modern luxury. The spa treatments were exceptional, and the dining experience was outstanding.',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    quote: 'Casa Bella exceeded all our expectations. The hospitality was truly remarkable, and the rooms were beautifully designed with attention to every detail.',
  },
  {
    id: 3,
    name: 'Amit Patel',
    location: 'Bangalore',
    rating: 5,
    quote: 'An unforgettable experience! The staff went above and beyond to make our stay special. The blend of Indian culture with modern amenities is perfect.',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    location: 'Hyderabad',
    rating: 5,
    quote: 'The warmth and care shown by the team is unmatched. Every moment felt special, from the welcome to the farewell. Highly recommended!',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-teal-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section ref={sectionRef} className="py-12 lg:py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-white to-gray-50/50"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-teal-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-teal-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-teal-300 rounded-lg rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-teal-300 rounded-lg -rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 max-w-5xl relative z-10">
        <div className="text-center mb-12 lg:mb-16 animate-on-scroll">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 relative">
              What Our Guests Say
            </h2>
          </div>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the warmth of Indian hospitality through the words of our valued guests.
          </p>
        </div>

        <div className="relative">
          <div className="relative h-auto min-h-[300px] lg:min-h-[350px]">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              const offset = index - currentIndex;
              
              return (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    isActive
                      ? 'opacity-100 translate-x-0 z-10'
                      : offset === -1 || (currentIndex === 0 && index === testimonials.length - 1)
                      ? 'opacity-0 -translate-x-20 z-0'
                      : offset === 1 || (currentIndex === testimonials.length - 1 && index === 0)
                      ? 'opacity-0 translate-x-20 z-0'
                      : 'opacity-0 translate-x-0 z-0'
                  }`}
                >
                  <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 text-center border border-gray-100">
                    <div className="flex justify-center gap-1 mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 font-light italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    <div className="flex flex-col items-center">
                      <div className="w-16 h-1 bg-teal-600 mb-4"></div>
                      <p className="text-base font-semibold text-gray-900 mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-teal-50 text-gray-700 hover:text-teal-600 rounded-full p-3 shadow-lg transition-all hover:scale-110 border border-gray-200"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-teal-50 text-gray-700 hover:text-teal-600 rounded-full p-3 shadow-lg transition-all hover:scale-110 border border-gray-200"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-teal-600'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

