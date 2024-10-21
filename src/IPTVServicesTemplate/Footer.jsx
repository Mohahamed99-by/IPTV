import React from 'react';
import { Instagram, Facebook, Send } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 mt-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a 
            href="Https://instagram.com/pcforsale_hcs" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-400 transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://www.facebook.com/people/hcsshop/61556091580831/?mibextid=ZbWKwL" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-400 transition-colors duration-300"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a 
            href="https://t.me/pcmedsale" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-400 transition-colors duration-300"
            aria-label="Telegram"
          >
            <Send size={24} />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center md:text-right text-sm">
          <p>&copy; {new Date().getFullYear()} IPTV Services. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;