import React, { useEffect, useRef, useState } from 'react';
import { Award, Camera, Heart, Users, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Camera, value: '500+', label: 'Photos Captured' },
    { icon: Heart, value: '100+', label: 'Happy Couples' },
    { icon: Users, value: '50+', label: 'Corporate Events' },
    { icon: Award, value: '15+', label: 'Awards Won' }
  ];

  const skills = [
    { name: 'Wedding Photography', level: 95 },
    { name: 'Portrait Photography', level: 90 },
    { name: 'Event Photography', level: 88 },
    { name: 'Photo Editing', level: 92 },
    { name: 'Drone Photography', level: 85 }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className={`relative ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional Photographer"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform group-hover:rotate-2 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-6 h-6" />
                  <div>
                    <div className="text-2xl font-bold">8+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`${isVisible ? 'fade-in-up stagger-1' : 'opacity-0'}`}>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-600 dark:text-gray-400">Based in New York City</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Hi, I'm Alex Thompson, a passionate photographer with over 8 years of experience 
              capturing life's most precious moments. I specialize in wedding photography, 
              portraits, and corporate events, always striving to tell unique stories through my lens.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              My approach combines technical expertise with artistic vision, ensuring that every 
              photograph not only captures the moment but also evokes the emotions and memories 
              that make it special.
            </p>

            {/* Personal Quote */}
            <blockquote className="border-l-4 border-yellow-500 pl-6 mb-8">
              <p className="text-xl font-dancing text-gray-700 dark:text-gray-300 italic">
                "Photography is not just about capturing what you see, but about revealing what you feel."
              </p>
              <cite className="text-sm text-gray-500 dark:text-gray-500 not-italic">- Alex Thompson</cite>
            </blockquote>

            {/* Skills */}
            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Skills & Expertise</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-yellow-500 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`text-center group ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900/50 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;