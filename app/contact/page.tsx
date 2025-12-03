'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function ContactPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=80"
            alt="Contact Us"
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
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/50 rounded-lg rotate-12"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white/50 rounded-lg -rotate-12"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-white/40 rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-white/40 rounded-full"></div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 animate-on-scroll" style={{ color: '#F59E0B', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              Contact Us
            </h1>
            <p className="text-xl lg:text-2xl xl:text-3xl text-white leading-relaxed drop-shadow-lg animate-on-scroll" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
              We're Here to Help You
            </p>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              We're always here to assist you with your stay and answer any questions you may have.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-on-scroll">
              <div className="mb-4">
                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center">
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Phone</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-700 font-medium">+91 98765 43210</p>
                <p className="text-gray-700 font-medium">+91 98765 43211</p>
              </div>
              <p className="text-sm text-gray-600">Call us for reservations and inquiries</p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="mb-4">
                <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Email</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-700 font-medium">info@casabella.com</p>
                <p className="text-gray-700 font-medium">reservations@casabella.com</p>
              </div>
              <p className="text-sm text-gray-600">Send us an email anytime</p>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="mb-4">
                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center">
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Address</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-700 font-medium">Casa Bella Hotel</p>
                <p className="text-gray-700 font-medium">Mumbai, India</p>
                <p className="text-gray-700 font-medium">Pin: 123456</p>
              </div>
              <p className="text-sm text-gray-600">Visit us at our beautiful location</p>
            </div>

            {/* Reception Hours Card */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <div className="mb-4">
                <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Reception Hours</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-700 font-medium">24/7 Available</p>
                <p className="text-gray-700 font-medium">Check-in: 2:00 PM</p>
                <p className="text-gray-700 font-medium">Check-out: 11:00 AM</p>
              </div>
              <p className="text-sm text-gray-600">We are always here for you</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 animate-on-scroll">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all resize-none"
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 animate-on-scroll" style={{ transitionDelay: '150ms' }}>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Find Us</h3>
              <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.715622456!2d72.8776559!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29c420fe8ae77!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Casa Bella Hotel</p>
                    <p className="text-gray-600">Mumbai, Maharashtra, India</p>
                    <p className="text-gray-600">Pin: 123456</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


