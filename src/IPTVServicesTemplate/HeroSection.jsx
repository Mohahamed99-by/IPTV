import React, { useState, useEffect } from 'react';
import { Zap, Play, Tv, Globe, Wifi } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import iptv from "../assets/iptv1.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white min-h-[100svh]`}>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 relative">
        <div className="lg:flex lg:items-center lg:gap-12 lg:justify-between">
          {/* Left Content */}
          <div 
            className={`max-w-2xl lg:max-w-none lg:w-1/2 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <span className="bg-blue-500/10 text-blue-400 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 rounded-full border border-blue-400/20">
                Premium IPTV Service
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 leading-tight">
              Stream Without Limits
            </h1>
            
            <p className={`mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-3xl transition-all duration-1000 delay-300 text-gray-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              Access over 10,000+ channels and VOD content worldwide. Enjoy premium entertainment with crystal-clear HD quality and uninterrupted streaming.
            </p>
            
            <div className="mt-6 sm:mt-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <Tv className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span>10,000+ Channels</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span>Global Content</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span>24/7 Support</span>
              </div>
            </div>

            <div className={`mt-8 sm:mt-10 flex flex-col xs:flex-row items-start xs:items-center space-y-4 xs:space-y-0 xs:space-x-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <NavLink
                to="/packages"
                className="group relative inline-flex items-center justify-center rounded-full py-2.5 sm:py-3 px-5 sm:px-6 text-sm font-medium tracking-wide text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span className="relative z-10 flex items-center whitespace-nowrap">
                  Explore Packages
                  <Zap className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                </span>
              </NavLink>
              
              <a
                href="#demo"
                className="group flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300"
              >
                <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 group-hover:scale-110" />
                <span className="relative text-sm sm:text-base after:content-[''] after:absolute after:h-0.5 after:left-0 after:bottom-0 after:bg-blue-400/50 after:transition-all after:duration-300 group-hover:after:w-full after:w-0 whitespace-nowrap">
                  Watch How It Works
                </span>
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div 
            className={`mt-8 lg:mt-0 lg:w-1/2 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={iptv}
                  alt="IPTV Experience"
                  className="w-full h-full object-cover rounded-lg shadow-2xl transition-transform duration-500 transform group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:opacity-0 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
