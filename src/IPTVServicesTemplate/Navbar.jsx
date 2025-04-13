// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo1.png";
import './animations.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyles = ({ isActive }) =>
    `relative px-4 py-2 transition-all duration-300 ease-in-out group
    ${isActive 
      ? 'text-blue-400 font-medium' 
      : 'text-gray-300 hover:text-blue-400'}
    hover:scale-105`;

  const getNavBackground = () => {
    return isScrolled 
      ? 'bg-slate-900/90 backdrop-blur-lg shadow-lg shadow-black/5 border-b border-white/10' 
      : 'bg-transparent backdrop-blur-sm';
  };
  
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };
  
  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getNavBackground()}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with enhanced animation */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="h-10 w-auto filter drop-shadow-lg"
            />
          </motion.div>
          
          {/* Desktop Navigation with enhanced animations */}
          <div className="hidden md:flex items-center space-x-3">
            {[
              { to: "/", text: "Home" },
              { to: "/features", text: "Features" },
              { to: "/packages", text: "Packages" },
              { to: "/faq", text: "FAQ" },
              { to: "/contact", text: "Contact" }
            ].map((link, index) => (
              <div 
                key={link.to} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink 
                  to={link.to} 
                  className={navLinkStyles}
                >
                  {link.text}
                  <motion.span 
                    className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </NavLink>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button with enhanced styling */}
          <motion.button 
            className="md:hidden p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-white/10 backdrop-blur-sm shadow-lg hover:shadow-blue-500/20 transition-all duration-300" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X size={24} className="transform transition-transform duration-300 rotate-0 hover:rotate-90" />
            ) : (
              <Menu size={24} className="transform transition-transform duration-300 hover:scale-110" />
            )}
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu with animations */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-white/10">
                {[
                  { to: "/", text: "Home" },
                  { to: "/features", text: "Features" },
                  { to: "/packages", text: "Packages" },
                  { to: "/faq", text: "FAQ" },
                  { to: "/contact", text: "Contact" }
                ].map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink 
                      to={link.to} 
                      className="block px-4 py-3 my-1 rounded-xl text-gray-300 hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.text}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
