import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Mail, MessageCircle, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './animations.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 right-0 h-16 -translate-y-full overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full text-slate-900/30" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="relative">
        {/* Enhanced grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]"></div>
        
        {/* Enhanced animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/3 left-1/3 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          {/* Enhanced Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {/* Company Info */}
            <motion.div 
              className="text-center md:text-left space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div>
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  IPTV Services
                </h4>
                <p className="text-sm sm:text-base text-blue-200 leading-relaxed max-w-md mx-auto md:mx-0">
                  Delivering seamless streaming experiences with cutting-edge technology and reliable service.
                </p>
              </div>
              
              {/* Quick Links */}
              <div className="mt-6">
                <h5 className="text-lg font-semibold text-white mb-3">Quick Links</h5>
                <ul className="space-y-2">
                  <li>
                    <a href="/features" className="text-blue-200 hover:text-blue-400 transition-colors duration-300 flex items-center justify-center md:justify-start">
                      <span className="mr-2 text-xs">›</span> Features
                    </a>
                  </li>
                  <li>
                    <a href="/packages" className="text-blue-200 hover:text-blue-400 transition-colors duration-300 flex items-center justify-center md:justify-start">
                      <span className="mr-2 text-xs">›</span> Packages
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="text-blue-200 hover:text-blue-400 transition-colors duration-300 flex items-center justify-center md:justify-start">
                      <span className="mr-2 text-xs">›</span> FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="text-center space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href="mailto:support@iptvservices.com" className="text-blue-200 hover:text-blue-400 transition-colors duration-300">
                    support@iptvservices.com
                  </a>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  <a href="https://wa.me/212620077755" className="text-blue-200 hover:text-blue-400 transition-colors duration-300">
                    WhatsApp Support
                  </a>
                </li>
              </ul>
              
              {/* Newsletter */}
              <div className="mt-6 px-4">
                <h5 className="text-lg font-semibold text-white mb-3">Subscribe to Newsletter</h5>
                <div className="relative mt-2">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                  />
                  <button className="mt-2 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div 
              className="text-center md:text-right space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Connect With Us
              </h4>
              <div className="flex justify-center md:justify-end space-x-3 sm:space-x-4">
                <motion.a 
                  href="https://instagram.com/" 
                  aria-label="Instagram"
                  className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-white/10 text-blue-400 hover:text-pink-400 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-12" />
                </motion.a>
                <motion.a 
                  href="https://facebook.com/" 
                  aria-label="Facebook"
                  className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-white/10 text-blue-400 hover:text-blue-400 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-12" />
                </motion.a>
                <motion.a 
                  href="https://twitter.com/" 
                  aria-label="Twitter"
                  className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-white/10 text-blue-400 hover:text-blue-400 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-12" />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  aria-label="LinkedIn"
                  className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-white/10 text-blue-400 hover:text-blue-400 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-12" />
                </motion.a>
              </div>
              
              {/* App badges */}
              <div className="mt-8">
                <h5 className="text-lg font-semibold text-white mb-3 md:text-right">Download Our App</h5>
                <div className="flex flex-col sm:flex-row justify-center md:justify-end space-y-3 sm:space-y-0 sm:space-x-3">
                  <a href="#" className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.954 11.616L15.911 8.65899L6.36499 2.24299C6.30114 2.19858 6.22966 2.16893 6.15499 2.15599L12.954 11.616Z" fill="#4285F4"/>
                        <path d="M16.415 14.965L20.856 12.476C21.135 12.312 21.328 12.042 21.328 11.741C21.328 11.44 21.135 11.169 20.856 11.005L16.415 8.51599L13.26 11.741L16.415 14.965Z" fill="#EA4335"/>
                        <path d="M2.66699 2.60799C2.61699 2.72999 2.58899 2.86199 2.58899 2.99999V21C2.58899 21.138 2.61699 21.27 2.66699 21.392L12.017 11.741L2.66699 2.60799Z" fill="#FBBC05"/>
                        <path d="M12.954 11.866L6.15499 21.326C6.22966 21.313 6.30114 21.284 6.36499 21.239L15.911 14.823L12.954 11.866Z" fill="#34A853"/>
                      </svg>
                      <div>
                        <div className="text-xs text-blue-200">GET IT ON</div>
                        <div className="text-sm font-semibold text-white">Google Play</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.941 1.66699C16.6539 1.66699 18.0219 2.95699 18.0989 4.65699C19.8769 5.17099 21.1669 6.83999 21.1669 8.83299V19.167C21.1669 21.65 19.1499 23.667 16.6669 23.667H7.33388C4.85088 23.667 2.83388 21.65 2.83388 19.167V8.83299C2.83388 6.83999 4.12388 5.17099 5.90188 4.65699C5.97888 2.95699 7.34688 1.66699 9.05988 1.66699H14.941Z" fill="url(#paint0_linear_apple)"/>
                        <path d="M12.0001 7.66699C10.1591 7.66699 8.66675 9.15999 8.66675 11.001C8.66675 12.842 10.1591 14.334 12.0001 14.334C13.8411 14.334 15.3334 12.842 15.3334 11.001C15.3334 9.15999 13.8411 7.66699 12.0001 7.66699Z" fill="white"/>
                        <defs>
                          <linearGradient id="paint0_linear_apple" x1="12.0004" y1="1.66699" x2="12.0004" y2="23.667" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FBFBFC"/>
                            <stop offset="1" stopColor="#CECFD4"/>
                          </linearGradient>
                        </defs>
                      </svg>
                      <div>
                        <div className="text-xs text-blue-200">Download on the</div>
                        <div className="text-sm font-semibold text-white">App Store</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Copyright */}
          <div className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="text-sm sm:text-base text-blue-200">
                © {currentYear} IPTV Services. All Rights Reserved.
              </p>
              <div className="mt-4 sm:mt-0 flex items-center space-x-4">
                <a href="/privacy" className="text-xs sm:text-sm text-blue-200 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
                <a href="/terms" className="text-xs sm:text-sm text-blue-200 hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <span className="text-xs text-blue-300/70 flex items-center">
                Made with <Heart className="w-3 h-3 mx-1 text-pink-400" /> for streaming enthusiasts
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;