import React from 'react';
import { Camera, Heart, ArrowUp, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Wedding Photography', href: '#services' },
      { label: 'Portrait Sessions', href: '#services' },
      { label: 'Corporate Events', href: '#services' },
      { label: 'Landscape Photography', href: '#services' }
    ],
    quickLinks: [
      { label: 'About Me', href: '#about' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' }
    ],
    contact: [
      { icon: Phone, label: '+1 (555) 123-4567', href: 'tel:+15551234567' },
      { icon: Mail, label: 'alex@lensandlight.com', href: 'mailto:alex@lensandlight.com' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', handle: '@lensandlight' },
    { icon: Facebook, href: '#', label: 'Facebook', handle: 'Lens & Light Photography' },
    { icon: Twitter, href: '#', label: 'Twitter', handle: '@lensandlight' }
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg hover-glow transition-all duration-300 group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-200" />
      </button>

      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-playfair font-bold">Lens & Light</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Capturing life's most precious moments with artistic vision and professional expertise. 
              Based in New York City, serving clients worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-white transition-all duration-200 group"
                    aria-label={social.label}
                    title={social.handle}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Contact</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <li key={contact.label}>
                    <a
                      href={contact.href}
                      className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200 group"
                    >
                      <IconComponent className="w-4 h-4 text-yellow-500" />
                      <span>{contact.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-2 text-green-400 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for Bookings</span>
              </div>
              <p className="text-gray-400 text-sm">
                Currently accepting new projects for 2024
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get notified about new work and special offers
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Lens & Light Photography. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <button className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </button>
            <button className="hover:text-white transition-colors duration-200">
              Terms of Service
            </button>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in NYC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;