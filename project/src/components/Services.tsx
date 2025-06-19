import React, { useState } from 'react';
import { Camera, Heart, Users, Mountain, Edit, Clock, MapPin, Star } from 'lucide-react';

interface Service {
  id: string;
  icon: any;
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  popular?: boolean;
}

const Services: React.FC = () => {
  const [pricingToggle, setPricingToggle] = useState<'hourly' | 'package'>('package');

  const services: Service[] = [
    {
      id: 'wedding',
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Complete wedding day coverage with artistic storytelling and candid moments.',
      features: [
        'Full day coverage (8-10 hours)',
        'Pre-wedding consultation',
        '500+ edited high-resolution photos',
        'Online gallery with download rights',
        'Engagement session included',
        'Second photographer option'
      ],
      price: pricingToggle === 'package' ? '$2,500' : '$200/hr',
      duration: 'Full Day'
    },
    {
      id: 'portrait',
      icon: Camera,
      title: 'Portrait Sessions',
      description: 'Professional headshots and personal portraits that capture your unique personality.',
      features: [
        '1-2 hour session',
        'Multiple outfit changes',
        '25+ edited photos',
        'High-resolution digital files',
        'Print release included',
        'Studio or outdoor location'
      ],
      price: pricingToggle === 'package' ? '$350' : '$150/hr',
      duration: '1-2 Hours',
      popular: true
    },
    {
      id: 'events',
      icon: Users,
      title: 'Corporate Events',
      description: 'Professional event photography for conferences, parties, and corporate gatherings.',
      features: [
        'Event coverage (2-6 hours)',
        'Candid and posed shots',
        '100+ edited photos',
        'Same-day preview gallery',
        'Commercial usage rights',
        'Team headshots available'
      ],
      price: pricingToggle === 'package' ? '$800' : '$120/hr',
      duration: '2-6 Hours'
    },
    {
      id: 'landscape',
      icon: Mountain,
      title: 'Landscape & Nature',
      description: 'Stunning landscape photography for personal or commercial use.',
      features: [
        'Location scouting',
        'Golden hour shooting',
        '15+ edited photos',
        'Ultra high-resolution files',
        'Weather contingency planning',
        'Drone photography option'
      ],
      price: pricingToggle === 'package' ? '$450' : '$100/hr',
      duration: '2-4 Hours'
    }
  ];

  const additionalServices = [
    {
      icon: Edit,
      title: 'Photo Editing & Retouching',
      description: 'Professional editing services for your existing photos.',
      price: '$25-50 per photo'
    },
    {
      icon: Clock,
      title: 'Rush Delivery',
      description: '24-48 hour turnaround for urgent projects.',
      price: '+50% of base price'
    },
    {
      icon: MapPin,
      title: 'Travel Photography',
      description: 'Destination photography with travel included.',
      price: 'Custom quote'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
            Services & Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Professional photography services tailored to capture your special moments
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`font-medium ${pricingToggle === 'hourly' ? 'text-yellow-500' : 'text-gray-500'}`}>
              Hourly
            </span>
            <button
              onClick={() => setPricingToggle(pricingToggle === 'hourly' ? 'package' : 'hourly')}
              className="relative w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-200 focus:outline-none"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-yellow-500 rounded-full transition-transform duration-200 ${
                  pricingToggle === 'package' ? 'transform translate-x-6' : ''
                }`}
              ></div>
            </button>
            <span className={`font-medium ${pricingToggle === 'package' ? 'text-yellow-500' : 'text-gray-500'}`}>
              Package
            </span>
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`relative group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border ${
                  service.popular ? 'border-yellow-500 ring-2 ring-yellow-500/20' : 'border-gray-200 dark:border-gray-700'
                } fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900/50 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{service.duration}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{service.price}</div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 hover-glow">
                  Book Now
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
            Additional Services
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Enhance your photography experience with these add-on services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group fade-in-up`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900/50 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <div className="text-lg font-semibold text-yellow-600 dark:text-yellow-400">{service.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;