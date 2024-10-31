import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import logo from "../assets/logo1.png";
import { DarkModeContext } from './DarkModeContext';
import "./styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyles = ({ isActive }) =>
    `relative px-4 py-2 transition-all duration-300 ease-in-out 
    ${isActive 
      ? `font-bold ${darkMode ? 'text-blue-400' : 'text-white'}` 
      : `${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-white hover:text-blue-200'}`}
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 
    after:h-0.5 after:transition-all after:duration-300 
    hover:after:w-full ${isActive ? 'after:w-full' : ''} 
    ${darkMode ? 'after:bg-blue-400' : 'after:bg-white'}`;

  const getNavBackground = () => {
    if (darkMode) {
      return isScrolled 
        ? 'bg-gray-900/95 shadow-lg' 
        : 'bg-gray-900';
    }
    return isScrolled 
      ? 'bg-gradient-to-r from-blue-600/95 to-purple-700/95 shadow-lg' 
      : 'bg-gradient-to-r from-blue-500 to-purple-600';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavBackground()}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <img 
            src={logo} 
            alt="Logo" 
            className="h-10 w-auto sm:h-12 transition-transform duration-300 hover:scale-105"
          />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/IPTV/" className={navLinkStyles}>Home</NavLink>
            <NavLink to="/packages/IPTV" className={navLinkStyles}>Packages</NavLink>
            <NavLink to="/contact/IPTV" className={navLinkStyles}>Contact</NavLink>
          </div>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle Button */}
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-blue-600 text-yellow-300 hover:bg-blue-700'
              }`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <Sun size={20} className="transition-transform duration-300" />
              ) : (
                <Moon size={20} className="transition-transform duration-300" />
              )}
            </button>

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
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-2 space-y-1">
            {[
              { to: "/IPTV", text: "Home" },
              { to: "/packages/IPTV", text: "Packages" },
              { to: "/contact/IPTV", text: "Contact" }
            ].map((link) => (
              <NavLink 
                key={link.to}
                to={link.to} 
                className={`block px-4 py-2 rounded-lg transition-colors duration-300 ${
                  darkMode 
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-blue-400' 
                    : 'text-white hover:bg-white/10'
                }`}
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