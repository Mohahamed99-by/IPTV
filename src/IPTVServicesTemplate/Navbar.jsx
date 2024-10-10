import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Assuming X is the close icon
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        
        <img src={logo} alt="" className='h-10 w-auto sm:h-12 mr-4'/>

        <div className="hidden md:flex space-x-4">
          <NavLink 
            to="/IPTV/" 
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "text-white hover:text-blue-200"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/packages/IPTV" 
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "text-white hover:text-blue-200"
            }
          >
            Packages
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) =>
              isActive ? "text-white font-bold" : "text-white hover:text-blue-200"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Hamburger Icon for mobile */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 to-purple-600p-4 space-y-4">
          <NavLink 
            to="/" 
            className="block text-white hover:text-blue-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/packages" 
            className="block text-white hover:text-blue-200"
            onClick={() => setIsOpen(false)}
          >
            Packages
          </NavLink>
          <NavLink 
            to="/contact" 
            className="block text-white hover:text-blue-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
