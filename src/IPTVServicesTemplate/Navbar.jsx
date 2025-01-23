// src/components/Navbar.js
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
    `relative px-4 py-2 transition-all duration-300 ease-in-out group
    ${isActive 
      ? 'text-blue-400 font-medium' 
      : 'text-gray-300 hover:text-blue-400'}
    hover:scale-105`;

  const getNavBackground = () => {
    return isScrolled 
      ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg border-b border-white/10' 
      : 'bg-transparent';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavBackground()}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={navLinkStyles}>
              Home
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </NavLink>
            <NavLink to="/features" className={navLinkStyles}>
              Features
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </NavLink>
           
            <NavLink to="/packages" className={navLinkStyles}>
              Packages
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </NavLink>
            <NavLink to="/faq" className={navLinkStyles}>
              FAQ
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </NavLink>
            <NavLink to="/contact" className={navLinkStyles}>
              Contact
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </NavLink>
          </div>

          <div className="flex items-center gap-6">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-xl bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all duration-300" 
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
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-2 border-t border-white/10">
            {[
              { to: "/", text: "Home" },
              { to: "/features", text: "Features" },
              { to: "/packages", text: "Packages" },
              { to: "/faq", text: "FAQ" },
              { to: "/contact", text: "Contact" }
            ].map(link => (
              <NavLink 
                key={link.to}
                to={link.to} 
                className="block px-4 py-3 rounded-xl text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
