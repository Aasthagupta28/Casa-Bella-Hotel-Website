'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

interface Destination {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    title: 'STANDARD ROOMS',
    description: 'Our Standard Rooms offer comfort and elegance with modern amenities. Perfect for business travelers and couples seeking a comfortable stay with all essential facilities.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80',
    price: '8,999',
  },
  {
    id: 2,
    title: 'DELUXE SUITES',
    description: 'Spacious suites with premium amenities and stunning views. Ideal for families and guests who desire extra space and luxury during their stay.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=80',
    price: '15,999',
  },
  {
    id: 3,
    title: 'PREMIUM LUXURY',
    description: 'Ultimate luxury with personalized butler service. Experience the pinnacle of hospitality with our most exclusive accommodations.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=80',
    price: '25,999',
  },
];

export default function DestinationsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const accommodationsSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
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

  const nextDestination = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
    setIsAutoPlaying(false);
  };

  const prevDestination = () => {
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
    setIsAutoPlaying(false);
  };

  const handleExploreClick = () => {
    const currentDestinationId = destinations[currentIndex].id;
    const matchingRoom = rooms.find(room => room.id === currentDestinationId);
    
    if (matchingRoom) {
      setSelectedRoom(matchingRoom);
      setGuests(Math.min(guests, matchingRoom.guests));
      
      setTimeout(() => {
        if (accommodationsSectionRef.current) {
          accommodationsSectionRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
          
          setTimeout(() => {
            const roomElement = document.getElementById(`room-${matchingRoom.id}`);
            if (roomElement) {
              roomElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
              });
            }
          }, 300);
        }
      }, 100);
    }
  };

  const [selectedRoom, setSelectedRoom] = useState({
    id: 1,
    title: 'STANDARD ROOMS',
    size: '35',
    guests: 2,
    price: '8,999',
    description: 'Our Standard Rooms offer comfort and elegance with modern amenities. Perfect for business travelers and couples seeking a comfortable stay with all essential facilities.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80',
    amenities: ['Free WiFi', 'Smart TV', 'Room Service', 'Work Desk', 'Air Conditioning', 'Mini Bar', 'Safe Deposit Box', 'City View'],
  });
  const [guests, setGuests] = useState(2);
  const [nights, setNights] = useState(1);

  const rooms = [
    {
      id: 1,
      title: 'STANDARD ROOMS',
      size: '35',
      guests: 2,
      price: '8,999',
      description: 'Our Standard Rooms offer comfort and elegance with modern amenities. Perfect for business travelers and couples seeking a comfortable stay with all essential facilities.',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80',
      amenities: ['Free WiFi', 'Smart TV', 'Room Service', 'Work Desk', 'Air Conditioning', 'Mini Bar', 'Safe Deposit Box', 'City View'],
    },
    {
      id: 2,
      title: 'DELUXE SUITES',
      size: '55',
      guests: 4,
      price: '15,999',
      description: 'Spacious suites with premium amenities and stunning views. Ideal for families and guests who desire extra space and luxury during their stay.',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=80',
      amenities: ['Free WiFi', 'Smart TV', 'Room Service', 'Work Desk', 'Air Conditioning', 'Mini Bar', 'Safe Deposit Box', 'City View', 'Balcony', 'Jacuzzi'],
    },
    {
      id: 3,
      title: 'PREMIUM LUXURY',
      size: '80',
      guests: 4,
      price: '25,999',
      description: 'Ultimate luxury with personalized butler service. Experience the pinnacle of hospitality with our most exclusive accommodations.',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=80',
      amenities: ['Free WiFi', 'Smart TV', 'Room Service', 'Work Desk', 'Air Conditioning', 'Mini Bar', 'Safe Deposit Box', 'City View', 'Balcony', 'Jacuzzi', 'Butler Service', 'Private Pool'],
    },
  ];

  const totalPrice = parseInt(selectedRoom.price.replace(/,/g, '')) * nights;

  const incrementGuests = () => {
    if (guests < selectedRoom.guests) {
      setGuests(guests + 1);
    }
  };

  const decrementGuests = () => {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  const incrementNights = () => {
    setNights(nights + 1);
  };

  const decrementNights = () => {
    if (nights > 1) {
      setNights(nights - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${destinations[currentIndex].image})`,
          }}
        />
        {/* Video Background - Overlays image when loaded */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover z-[1] ${videoError ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
          onError={() => {
            setVideoError(true);
          }}
          onLoadedData={() => {
            setVideoError(false);
          }}
        >
          {/* Add your video: Place video file in public/videos/hotel-banner.mp4 */}
          {/* <source src="/videos/hotel-banner.mp4" type="video/mp4" /> */}
          
          {/* Sample video URL - Replace with your own video URL */}
          <source src="https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-10"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-teal-400 mb-4 drop-shadow-2xl" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.8)' }}>
              Rooms & Suites
            </h1>
            <p className="text-xl lg:text-2xl text-white font-light drop-shadow-lg" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
              Choose Your Perfect Stay
            </p>
          </div>
        </div>
      </section>

      {/* Central Carousel Section */}
      <section ref={sectionRef} className="relative py-8 lg:py-12 bg-gray-50">
        <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
          {destinations.map((destination, index) => {
            const isActive = index === currentIndex;
            const offset = index - currentIndex;
            
            return (
              <div
                key={destination.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  isActive
                    ? 'opacity-100 translate-x-0 z-10'
                    : offset === -1 || (currentIndex === 0 && index === destinations.length - 1)
                    ? 'opacity-0 -translate-x-full z-0'
                    : offset === 1 || (currentIndex === destinations.length - 1 && index === 0)
                    ? 'opacity-0 translate-x-full z-0'
                    : 'opacity-0 translate-x-0 z-0'
                }`}
              >
                <div className="relative h-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                    style={{
                      backgroundImage: `url(${destination.image})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
                  </div>

                  <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-6 lg:px-16">
                      <div className="max-w-xl ml-auto">
                        <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-teal-500 mb-4 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                          {destination.title}
                        </h3>
                        <p className="text-base lg:text-lg text-white leading-relaxed mb-6 drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                          {destination.description}
                        </p>
                        {/* Price */}
                        <div className="mb-6">
                          <p className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                            ₹{destination.price}
                            <span className="text-lg lg:text-xl font-normal text-white/90 ml-2">/night</span>
                          </p>
                        </div>
                        {/* Explore More Button */}
                        <button
                          onClick={handleExploreClick}
                          className="px-8 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                          Explore More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevDestination}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 rounded-full p-4 shadow-xl transition-all hover:scale-110 border border-gray-200"
          aria-label="Previous destination"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextDestination}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 rounded-full p-4 shadow-xl transition-all hover:scale-110 border border-gray-200"
          aria-label="Next destination"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Our Accommodations Section */}
      <section ref={accommodationsSectionRef} className="py-12 lg:py-16 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/50 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-teal-400 rounded-lg rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-teal-400 rounded-lg -rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-teal-300 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 mb-6">
              Our Accommodations
            </h2>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Thoughtfully designed rooms and suites that blend Indian charm with modern luxury.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Room Categories */}
            <div className="lg:col-span-1 space-y-4">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  id={`room-${room.id}`}
                  onClick={() => {
                    setSelectedRoom(room);
                    setGuests(Math.min(guests, room.guests));
                  }}
                  className={`p-5 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedRoom.id === room.id
                      ? 'bg-teal-600 text-white shadow-lg transform scale-105'
                      : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200'
                  }`}
                >
                  <h3 className={`text-lg font-semibold mb-2 ${selectedRoom.id === room.id ? 'text-white' : 'text-gray-900'}`}>
                    {room.title}
                  </h3>
                  <p className={`text-xs mb-2 ${selectedRoom.id === room.id ? 'text-teal-100' : 'text-gray-600'}`}>
                    {room.size} sq m • {room.guests} Guests
                  </p>
                  <p className={`text-xl font-bold ${selectedRoom.id === room.id ? 'text-white' : 'text-gray-900'}`}>
                    ₹{room.price}
                    <span className={`text-xs font-normal ml-1 ${selectedRoom.id === room.id ? 'text-teal-100' : 'text-gray-600'}`}>
                      /night
                    </span>
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column - Main Content */}
            <div className="lg:col-span-2">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Left - Images */}
                <div className="space-y-4">
                  <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl group">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${selectedRoom.image})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    </div>
                  </div>
                  <div className="relative h-40 rounded-xl overflow-hidden shadow-lg">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${rooms.find(r => r.id !== selectedRoom.id)?.image || rooms[1].image})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Right - Details & Booking */}
                <div className="space-y-5">
                  {/* Room Title */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">
                      {selectedRoom.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3">
                      {selectedRoom.size} sq m • {selectedRoom.guests} Guests
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">
                      {selectedRoom.description}
                    </p>
                  </div>

                  {/* Room Amenities */}
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-3">Room Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedRoom.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-xs text-gray-700">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking Form */}
                  <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-200">
                    <h4 className="text-base font-semibold text-gray-900 mb-5">Book This Room</h4>
                    
                    {/* Guests Counter */}
                    <div className="mb-5">
                      <label className="block text-xs font-medium text-gray-700 mb-2">Guests</label>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={decrementGuests}
                          className="w-8 h-8 rounded-full border border-gray-300 hover:border-teal-600 flex items-center justify-center transition-colors disabled:opacity-50"
                          disabled={guests <= 1}
                        >
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="text-lg font-semibold text-gray-900 min-w-[30px] text-center">{guests}</span>
                        <button
                          onClick={incrementGuests}
                          className="w-8 h-8 rounded-full border border-gray-300 hover:border-teal-600 flex items-center justify-center transition-colors disabled:opacity-50"
                          disabled={guests >= selectedRoom.guests}
                        >
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Nights Counter */}
                    <div className="mb-5">
                      <label className="block text-xs font-medium text-gray-700 mb-2">Nights</label>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={decrementNights}
                          className="w-8 h-8 rounded-full border border-gray-300 hover:border-teal-600 flex items-center justify-center transition-colors disabled:opacity-50"
                          disabled={nights <= 1}
                        >
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="text-lg font-semibold text-gray-900 min-w-[30px] text-center">{nights}</span>
                        <button
                          onClick={incrementNights}
                          className="w-8 h-8 rounded-full border border-gray-300 hover:border-teal-600 flex items-center justify-center transition-colors"
                        >
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Total Price */}
                    <div className="mb-5 pb-5 border-b border-gray-200">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-sm font-semibold text-gray-900">Total Price:</span>
                        <span className="text-xl font-bold text-teal-600">
                          ₹{totalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 text-right">
                        ₹{selectedRoom.price} × {nights} {nights === 1 ? 'night' : 'nights'}
                      </p>
                    </div>

                    {/* Book Now Button */}
                    <Link
                      href={`/book?room=${selectedRoom.id}&guests=${guests}&nights=${nights}`}
                      className="block w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 text-center text-sm font-semibold shadow-md hover:shadow-lg"
                    >
                      Book Now
                    </Link>
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

