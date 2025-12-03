'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

interface Room {
  id: number;
  title: string;
  size: string;
  guests: number;
  price: string;
  description: string;
  image: string;
  amenities: string[];
}

const rooms: Room[] = [
  {
    id: 1,
    title: 'Standard Rooms',
    size: '35',
    guests: 2,
    price: '8,999',
    description: 'Our Standard Rooms offer comfort and elegance with modern amenities. Perfect for business travelers and couples seeking a comfortable stay with all essential facilities.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80',
    amenities: ['Free WiFi', 'Smart TV', 'Room Service', 'Work Desk', 'Air Conditioning', 'Mini Bar', 'Safe Deposit Box', 'City View'],
  },
  {
    id: 2,
    title: 'Deluxe Suites',
    size: '55',
    guests: 4,
    price: '15,999',
    description: 'Spacious suites with premium amenities and stunning views. Ideal for families and guests who desire extra space and luxury during their stay.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=80',
    amenities: ['Free WiFi', 'Smart TV', 'Room Service', 'Work Desk', 'Air Conditioning', 'Mini Bar', 'Safe Deposit Box', 'City View', 'Balcony', 'Jacuzzi'],
  },
  {
    id: 3,
    title: 'Premium Luxury',
    size: '80',
    guests: 4,
    price: '25,999',
    description: 'Ultimate luxury with personalized butler service. Experience the pinnacle of hospitality with our most exclusive accommodations.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=80',
    amenities: ['Free WiFi', 'Smart TV', 'Room Service', 'Work Desk', 'Air Conditioning', 'Mini Bar', 'Safe Deposit Box', 'City View', 'Balcony', 'Jacuzzi', 'Butler Service', 'Private Pool'],
  },
];

export default function AccommodationsPage() {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [guests, setGuests] = useState(2);
  const [nights, setNights] = useState(1);
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
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Header Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 mb-6">
              Our Accommodations
            </h1>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              Thoughtfully designed rooms and suites that blend Indian charm with modern luxury.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section ref={sectionRef} className="py-8 lg:py-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Room Categories */}
            <div className="lg:col-span-1 space-y-6">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  onClick={() => setSelectedRoom(room)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedRoom.id === room.id
                      ? 'bg-teal-600 text-white shadow-xl transform scale-105'
                      : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  <h3 className={`text-xl font-semibold mb-2 ${selectedRoom.id === room.id ? 'text-white' : 'text-gray-900'}`}>
                    {room.title}
                  </h3>
                  <p className={`text-sm mb-3 ${selectedRoom.id === room.id ? 'text-teal-100' : 'text-gray-600'}`}>
                    {room.size} sq m • {room.guests} Guests
                  </p>
                  <p className={`text-2xl font-bold ${selectedRoom.id === room.id ? 'text-white' : 'text-gray-900'}`}>
                    ₹{room.price}
                    <span className={`text-sm font-normal ml-1 ${selectedRoom.id === room.id ? 'text-teal-100' : 'text-gray-600'}`}>
                      /night
                    </span>
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column - Main Content */}
            <div className="lg:col-span-2">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left - Image */}
                <div className="space-y-4">
                  <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${selectedRoom.image})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                  </div>
                  {/* Smaller Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${rooms.find(r => r.id !== selectedRoom.id)?.image || rooms[1].image})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Right - Details & Booking */}
                <div className="space-y-6">
                  {/* Room Title */}
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                      {selectedRoom.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                      {selectedRoom.size} sq m • {selectedRoom.guests} Guests
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed mb-6">
                      {selectedRoom.description}
                    </p>
                  </div>

                  {/* Room Amenities */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Room Amenities</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedRoom.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking Form */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Book This Room</h3>
                    
                    {/* Guests Counter */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={decrementGuests}
                          className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-teal-600 flex items-center justify-center transition-colors"
                          disabled={guests <= 1}
                        >
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="text-xl font-semibold text-gray-900 min-w-[40px] text-center">{guests}</span>
                        <button
                          onClick={incrementGuests}
                          className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-teal-600 flex items-center justify-center transition-colors"
                          disabled={guests >= selectedRoom.guests}
                        >
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Nights Counter */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nights</label>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={decrementNights}
                          className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-teal-600 flex items-center justify-center transition-colors"
                          disabled={nights <= 1}
                        >
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="text-xl font-semibold text-gray-900 min-w-[40px] text-center">{nights}</span>
                        <button
                          onClick={incrementNights}
                          className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-teal-600 flex items-center justify-center transition-colors"
                        >
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Total Price */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="text-base font-semibold text-gray-900">Total Price:</span>
                        <span className="text-2xl font-bold text-teal-600">
                          ₹{totalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 text-right">
                        ₹{selectedRoom.price} × {nights} {nights === 1 ? 'night' : 'nights'}
                      </p>
                    </div>

                    {/* Book Now Button */}
                    <Link
                      href={`/book?room=${selectedRoom.id}&guests=${guests}&nights=${nights}`}
                      className="block w-full px-6 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 text-center font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
