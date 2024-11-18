import React, { useContext } from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Send, Phone, MapPin, Mail } from 'lucide-react';
import { DarkModeContext } from './DarkModeContext';

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={`px-6 py-12 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100' 
          : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h4 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              IPTV Services
            </h4>
            <p className="text-sm mb-4 opacity-80">
              Delivering seamless streaming experiences with cutting-edge technology and reliable service.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <Mail size={16} className="opacity-70" />
                <span className="text-sm">med.chemaou@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone size={16} className="opacity-70" />
                <span className="text-sm">+212 620 077755</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin size={16} className="opacity-70" />
                <span className="text-sm">123 IPTV Street, Rabat City</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Connect With Us
            </h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="https://instagram.com" 
                aria-label="Instagram"
                className={`transition-all duration-300 hover:scale-110 ${
                  darkMode 
                    ? 'text-gray-300 hover:text-pink-400' 
                    : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://facebook.com" 
                aria-label="Facebook"
                className={`transition-all duration-300 hover:scale-110 ${
                  darkMode 
                    ? 'text-gray-300 hover:text-blue-400' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                aria-label="Twitter"
                className={`transition-all duration-300 hover:scale-110 ${
                  darkMode 
                    ? 'text-gray-300 hover:text-blue-300' 
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                <Twitter size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                aria-label="LinkedIn"
                className={`transition-all duration-300 hover:scale-110 ${
                  darkMode 
                    ? 'text-gray-300 hover:text-blue-500' 
                    : 'text-gray-600 hover:text-blue-700'
                }`}
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-6 border-t border-opacity-20 border-gray-500">
          <p className="text-sm opacity-70">
            © {currentYear} IPTV Services. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;