import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useDarkMode } from './DarkModeContext'; // Adjust path as needed

const Contact = () => {
  const { darkMode, toggleDarkMode } = useDarkMode(); // Access dark mode context

  return (
    <div className={`bg-gradient-to-br mt-24 p-8 rounded-xl shadow-lg max-w-md mx-auto 
                     ${darkMode ? 'from-gray-800 to-gray-900' : 'from-blue-50 to-indigo-100'}`}>
      <h2 className={`text-3xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        Contact Us
      </h2>
      <div className="space-y-6">
        <a 
          href="mailto:med.chemaou@gmail.com" 
          className={`flex items-center p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group 
                      ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div className={`p-3 rounded-full transition-colors duration-300 
                          ${darkMode ? 'bg-blue-900 group-hover:bg-blue-700' : 'bg-blue-100 group-hover:bg-blue-200'}`}>
            <Mail className={`${darkMode ? 'text-blue-300' : 'text-blue-600'}`} size={24} />
          </div>
          <span className={`ml-4 group-hover:text-blue-600 transition-colors duration-300 
                           ${darkMode ? 'text-gray-200 group-hover:text-blue-400' : 'text-gray-700'}`}>
            med.chemaou@gmail.com
          </span>
        </a>
        <a 
          href="tel:+212620077755" 
          className={`flex items-center p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group 
                      ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div className={`p-3 rounded-full transition-colors duration-300 
                          ${darkMode ? 'bg-green-900 group-hover:bg-green-700' : 'bg-green-100 group-hover:bg-green-200'}`}>
            <Phone className={`${darkMode ? 'text-green-300' : 'text-green-600'}`} size={24} />
          </div>
          <span className={`ml-4 group-hover:text-green-600 transition-colors duration-300 
                           ${darkMode ? 'text-gray-200 group-hover:text-green-400' : 'text-gray-700'}`}>
            +212 620 077755
          </span>
        </a>
      </div>
      <p className={`mt-8 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        We're here to help! Reach out to us anytime.
      </p>
    </div>
  );
};

export default Contact;
