import React, { useState, useEffect } from 'react';
import { Zap, Play } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import iptv from "../assets/iptv1.jpg";
import { useDarkMode } from './DarkModeContext';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-r from-blue-950 to-purple-900 text-white' 
        : 'bg-gradient-to-r from-blue-500 to-purple-600 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div 
            className={`lg:w-1/2 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Experience TV Like Never Before
            </h1>
            <p className={`mt-6 text-xl max-w-3xl transition-all duration-1000 delay-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-100'
            } ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Unlimited channels, crystal-clear HD quality, and on-demand content at your fingertips. Welcome to the future of television.
            </p>
            <div className={`mt-10 flex items-center space-x-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <NavLink
                to="/packages/IPTV/"
                className={`group relative rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 py-3 px-6 ${
                  darkMode 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                <span className="relative z-10 flex items-center">
                  View Packages
                  <Zap className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                </span>
              </NavLink>
              <a
                href="#demo"
                className="group flex items-center text-current hover:text-blue-300 transition-all duration-300"
              >
                <Play className="mr-2 transform transition-transform duration-300 group-hover:scale-110" />
                <span className={`relative after:content-[''] after:absolute after:h-0.5 after:left-0 after:bottom-0 after:transition-all after:duration-300 group-hover:after:w-full ${
                  darkMode ? 'after:bg-blue-300' : 'after:bg-white'
                } after:w-0`}>
                  Watch Demo
                </span>
              </a>
            </div>
          </div>
          <div 
            className={`mt-12 lg:mt-0 lg:w-1/2 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={iptv}
                alt="IPTV Experience"
                className="rounded-lg shadow-xl transition-transform duration-500 transform group-hover:scale-105"
              />
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                darkMode 
                  ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20' 
                  : 'bg-gradient-to-r from-blue-500/10 to-purple-600/10'
              }`} />
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-lg group-hover:ring-white/20 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-20 transition-opacity duration-1000 delay-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${darkMode ? 'bg-gradient-to-t from-gray-900' : 'bg-gradient-to-t from-gray-100'}`} />
    </div>
  );
};

export default HeroSection;