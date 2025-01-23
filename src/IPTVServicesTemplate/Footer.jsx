import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-8 sm:py-12 md:py-16">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          {/* Grid Layout */}
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
            {/* Company Info */}
            <div className="text-center sm:text-left space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  IPTV Services
                </h4>
                <p className="text-sm sm:text-base text-blue-200 leading-relaxed max-w-md mx-auto sm:mx-0">
                  Delivering seamless streaming experiences with cutting-edge technology and reliable service.
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center sm:text-right space-y-4 sm:space-y-6">
              <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Connect With Us
              </h4>
              <div className="flex justify-center sm:justify-end space-x-3 sm:space-x-4">
                <a 
                  href="https://instagram.com/" 
                  aria-label="Instagram"
                  className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/10 text-blue-400 hover:text-pink-400 group"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-12" />
                </a>
                <a 
                  href="https://facebook.com/" 
                  aria-label="Facebook"
                  className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/10 text-blue-400 hover:text-blue-400 group"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-12" />
                </a>
                <a 
                  href="https://twitter.com/" 
                  aria-label="Twitter"
                  className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/10 text-blue-400 hover:text-blue-400 group"
                >
                  <Twitter className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-12" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  aria-label="LinkedIn"
                  className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/10 text-blue-400 hover:text-blue-400 group"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-12" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
            <p className="text-sm sm:text-base text-blue-200">
              {currentYear} IPTV Services. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;