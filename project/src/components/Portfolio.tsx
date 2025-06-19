import React, { useState, useEffect } from 'react';
import { X, Filter, Heart, Eye, Camera } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [visibleItems, setVisibleItems] = useState<PortfolioItem[]>([]);

  const categories = [
    { id: 'all', label: 'All Work', icon: Camera },
    { id: 'weddings', label: 'Weddings', icon: Heart },
    { id: 'portraits', label: 'Portraits', icon: Eye },
    { id: 'events', label: 'Events', icon: Camera },
    { id: 'landscapes', label: 'Landscapes', icon: Camera }
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Sunset Wedding Ceremony',
      category: 'weddings',
      image: 'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A beautiful outdoor wedding ceremony captured during golden hour.'
    },
    {
      id: 2,
      title: 'Corporate Headshot',
      category: 'portraits',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional headshot for executive team member.'
    },
    {
      id: 3,
      title: 'Product Launch Event',
      category: 'events',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Corporate event photography for tech company product launch.'
    },
    {
      id: 4,
      title: 'Mountain Landscape',
      category: 'landscapes',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Breathtaking mountain vista captured at dawn.'
    },
    {
      id: 5,
      title: 'Bridal Portrait',
      category: 'weddings',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant bridal portrait with natural lighting.'
    },
    {
      id: 6,
      title: 'Family Portrait',
      category: 'portraits',
      image: 'https://images.pexels.com/photos/1128783/pexels-photo-1128783.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Warm family portrait session in outdoor setting.'
    },
    {
      id: 7,
      title: 'Concert Performance',
      category: 'events',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Live music performance captured with dramatic lighting.'
    },
    {
      id: 8,
      title: 'Ocean Sunset',
      category: 'landscapes',
      image: 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Serene ocean sunset with vibrant colors.'
    },
    {
      id: 9,
      title: 'Wedding Reception',
      category: 'weddings',
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Joyful wedding reception dance floor moments.'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    setVisibleItems([]);
    const timer = setTimeout(() => {
      filteredItems.forEach((item, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, item]);
        }, index * 100);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const openLightbox = (item: PortfolioItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my favorite moments captured through the lens
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-yellow-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="masonry gap-4">
          {visibleItems.map((item, index) => (
            <div
              key={item.id}
              className={`masonry-item group cursor-pointer fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(item)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;