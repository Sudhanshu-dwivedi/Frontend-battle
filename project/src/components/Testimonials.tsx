import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
  location: string;
}

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah & Michael Johnson',
      role: 'Wedding Couple',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Alex captured our wedding day perfectly! Every moment was beautifully documented, and the photos exceeded our expectations. The attention to detail and artistic vision is incredible.',
      location: 'New York, NY'
    },
    {
      id: 2,
      name: 'Jennifer Martinez',
      role: 'Corporate Executive',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Professional, creative, and a pleasure to work with. Alex delivered stunning headshots that perfectly represent our brand. Highly recommend for any corporate photography needs.',
      location: 'Manhattan, NY'
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Event Organizer',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Outstanding work at our corporate event. Alex was unobtrusive yet captured all the important moments. The photos were delivered quickly and were exactly what we needed.',
      location: 'Brooklyn, NY'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Bride',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'From our engagement session to our wedding day, Alex was amazing. The photos are artistic, emotional, and tell our story beautifully. We couldn\'t be happier!',
      location: 'Queens, NY'
    },
    {
      id: 5,
      name: 'Robert Thompson',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Excellent portraiture work for our company profiles. Alex understood our vision and delivered photos that perfectly capture our team\'s personality and professionalism.',
      location: 'Staten Island, NY'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - here's what our happy clients have to say
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-gray-50 dark:bg-gray-900 p-8 md:p-12 text-center">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <Quote className="w-12 h-12 text-yellow-500 opacity-50" />
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover shadow-lg"
                      />
                      <div className="text-left">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          {testimonial.role}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-500">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-yellow-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              Ready to Create Your Own Story?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join our satisfied clients and let us capture your special moments
            </p>
            <button className="bg-white text-yellow-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 hover-glow">
              Book Your Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;