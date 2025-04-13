import React, { useState, useEffect, useRef } from 'react';
import { Zap, Play, Tv, Globe, Wifi, Shield, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import iptv from "../assets/iptv1.jpg";
import { motion } from 'framer-motion';
import './animations.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={heroRef}
      className={`relative overflow-hidden text-white min-h-[100svh]`}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(79, 70, 229, 0.15) 0%, transparent 50%), 
                   conic-gradient(from 225deg at 50% 50%, #0f172a 0deg, #1e3a8a 120deg, #581c87 240deg, #0f172a 360deg)`
      }}
    >
      {/* Modern grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]"></div>
      
      {/* Animated 3D particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-10 blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Animated light beams */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute h-[300px] w-[40px] top-[-10%] left-[5%] bg-blue-400 blur-3xl rotate-[35deg] animate-beam"></div>
        <div className="absolute h-[400px] w-[30px] bottom-[-10%] right-[15%] bg-purple-400 blur-3xl rotate-[-40deg] animate-beam animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 relative z-10">
        <div className="lg:flex lg:items-center lg:gap-16 lg:justify-between">
          {/* Left Content */}
          <motion
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl lg:max-w-none lg:w-1/2"
          >
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-2 mb-4 sm:mb-6"
            >
              <span className="relative group overflow-hidden bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 text-xs sm:text-sm font-medium px-4 sm:px-5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                <span className="relative z-10 flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-blue-300" />
                  Premium IPTV Service
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
            >
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 pb-1">Stream Without</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 pb-1">Limits</span>
              <div className="absolute -z-10 w-full h-1/2 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl"></div>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl max-w-3xl text-blue-100/80 leading-relaxed"
            >
              Access over <span className="text-white font-semibold">10,000+ channels</span> and VOD content worldwide. Enjoy premium entertainment with crystal-clear HD quality and uninterrupted streaming on any device, anywhere.  
            </motion.p>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-sm"
            >
              {[
                { icon: <Tv />, text: "10,000+ Channels" },
                { icon: <Globe />, text: "Global Content" },
                { icon: <Shield />, text: "Secure Streaming" },
                { icon: <Wifi />, text: "24/7 Support" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                  className="flex items-center space-x-3 backdrop-blur-sm bg-white/5 rounded-xl px-3 py-2.5 border border-white/10"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-300">
                    {item.icon}
                  </div>
                  <span className="text-blue-50">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-10 sm:mt-12 flex flex-col xs:flex-row items-start xs:items-center space-y-4 xs:space-y-0 xs:space-x-6"
            >
              <NavLink
                to="/packages"
                className="group relative inline-flex items-center justify-center rounded-xl py-3 sm:py-4 px-6 sm:px-8 text-sm font-medium tracking-wide text-white overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 w-full h-full border border-white/10 rounded-xl"></span>
                <span className="absolute -inset-px bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 rounded-[11px] group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors duration-300"></span>
                <span className="relative z-10 flex items-center whitespace-nowrap">
                  Explore Packages
                  <Zap className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                </span>
              </NavLink>
              
              <a
                href="#demo"
                className="group flex items-center text-blue-300 hover:text-blue-200 transition-all duration-300"
              >
                <div className="relative mr-3 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10">
                  <Play className="w-4 h-4 text-blue-300 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute inset-0 rounded-full border border-blue-400/30 group-hover:scale-110 transition-transform duration-300"></span>
                </div>
                <span className="relative text-sm sm:text-base after:content-[''] after:absolute after:h-0.5 after:left-0 after:bottom-0 after:bg-blue-400/30 after:transition-all after:duration-300 group-hover:after:w-full after:w-0 whitespace-nowrap">
                  Watch How It Works
                </span>
              </a>
            </motion.div>
          </motion>

          {/* Right Content - Image */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-12 lg:mt-0 lg:w-1/2"
          >
            <div className="relative group perspective-1000">
              {/* 3D Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-70 transition-all duration-700 group-hover:duration-200"></div>
              
              {/* Glass card effect */}
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 bg-white/5 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
                {/* Reflective overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <img
                  src={iptv}
                  alt="IPTV Experience"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  loading="eager"
                />
                
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 group-hover:opacity-0 transition-opacity duration-500" />
                
                {/* Floating elements */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md bg-black/30 rounded-xl border border-white/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-sm text-white font-medium">Live Streaming</span>
                    </div>
                    <div className="text-xs text-white/70 bg-white/10 px-2 py-1 rounded-md">4K Ultra HD</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
