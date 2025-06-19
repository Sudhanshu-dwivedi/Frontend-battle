import React, { useState, useEffect } from 'react';
import { ChevronDown, Camera, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const heroImages = [
    'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setIsTyping(false);
    }, 3500);

    return () => clearTimeout(typingTimer);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Parallax Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          {/* Animated Headline */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
            <span className={isTyping ? 'typewriter' : ''}>
              Capturing Moments,
            </span>
            <br />
            <span className="text-gradient block mt-2">
              Creating Memories
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 fade-in-up stagger-1">
            Professional Photography for Weddings, Portraits & Events
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up stagger-2">
            <button
              onClick={scrollToPortfolio}
              className="group relative px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full hover-glow ripple transition-all duration-300 flex items-center space-x-2"
            >
              <Camera className="w-5 h-5" />
              <span>View Portfolio</span>
            </button>
            
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-full ripple transition-all duration-300 flex items-center space-x-2"
            >
              <Heart className="w-5 h-5" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Professional Badge */}
          <div className="mt-12 fade-in-up stagger-3">
            <div className="glass-effect rounded-full px-6 py-3 inline-flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Available for Bookings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToPortfolio}
          className="text-white hover:text-yellow-400 transition-colors duration-200"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-yellow-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;