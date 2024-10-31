import React, { useContext } from 'react';
import { Instagram, Facebook, Send } from 'lucide-react';
import { DarkModeContext } from './DarkModeContext';

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);
  const currentYear = new Date().getFullYear(); // Calculate current year once

  return (
    <footer
      className={`p-4 text-center transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'
      }`}
    >
      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://instagram.com"
          aria-label="Visit our Instagram page"
          className={`transition-colors ${darkMode ? 'hover:text-pink-400' : 'hover:text-blue-400'}`}
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://facebook.com"
          aria-label="Visit our Facebook page"
          className={`transition-colors ${darkMode ? 'hover:text-blue-500' : 'hover:text-blue-600'}`}
        >
          <Facebook size={20} />
        </a>
        <a
          href="mailto:contact@iptvservices.com"
          aria-label="Send us an email"
          className={`transition-colors ${darkMode ? 'hover:text-green-500' : 'hover:text-green-400'}`}
        >
          <Send size={20} />
        </a>
      </div>

      {/* Copyright Section */}
      <p className="text-sm">
        © {currentYear} IPTV Services. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
