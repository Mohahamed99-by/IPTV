import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyles = ({ isActive }) =>
    `relative px-4 py-2 text-white transition-all duration-300 ease-in-out
    ${isActive ? 'font-bold' : 'hover:text-blue-200'}
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 
    after:h-0.5 after:bg-white after:transition-all after:duration-300
    hover:after:w-full ${isActive ? 'after:w-full' : ''}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gradient-to-r from-blue-600/95 to-purple-700/95 shadow-lg' : 
      'bg-gradient-to-r from-blue-500 to-purple-600'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-10 w-auto sm:h-12 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/IPTV/" className={navLinkStyles}>
              Home
            </NavLink>
            <NavLink to="/packages/IPTV" className={navLinkStyles}>
              Packages
            </NavLink>
            <NavLink to="/contact/IPTV" className={navLinkStyles}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-300" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="transform transition-transform duration-300 rotate-0 hover:rotate-90" />
            ) : (
              <Menu size={24} className="transform transition-transform duration-300 hover:scale-110" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-2 space-y-1">
            <NavLink 
              to="/IPTV" 
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/packages/IPTV" 
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Packages
            </NavLink>
            <NavLink 
              to="/contact/IPTV" 
              className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;