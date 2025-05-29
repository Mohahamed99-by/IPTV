
// Modern IPTV Navbar Component - 2025 Design
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, Zap, Package, HelpCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo1.png";
import './animations.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Navigation items with modern icons
  const navigationItems = [
    { to: "/", text: "Home", icon: Home },
    { to: "/features", text: "Features", icon: Zap },
    { to: "/packages", text: "Packages", icon: Package },
    { to: "/faq", text: "FAQ", icon: HelpCircle },
    { to: "/contact", text: "Contact", icon: Phone }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-700/50'
          : 'bg-transparent backdrop-blur-sm'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>

      <nav className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo Section */}
            <motion.div
              className="flex items-center space-x-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <img
                  src={logo}
                  alt="IPTV Logo"
                  className="h-10 w-auto relative z-10 transition-all duration-300 group-hover:brightness-110"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  IPTV Services
                </h1>
              </div>
            </motion.div>
          
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.to}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 group ${
                          isActive
                            ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 shadow-lg'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                        }`
                      }
                    >
                      <IconComponent size={18} className="transition-all duration-300 group-hover:scale-110" />
                      <span className="text-sm font-medium">{item.text}</span>

                      {/* Active indicator */}
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                        initial={{ scale: 0, x: '-50%' }}
                        animate={{ scale: hoveredItem === index ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </NavLink>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              aria-label="Toggle navigation menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-slate-700/50 bg-slate-900/95 backdrop-blur-xl"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                {navigationItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.to}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                            isActive
                              ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                              : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        <IconComponent size={20} />
                        <span>{item.text}</span>
                      </NavLink>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;

