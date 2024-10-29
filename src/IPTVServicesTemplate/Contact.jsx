import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-br mt-24 from-blue-50 to-indigo-100 p-8 rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
      <div className="space-y-6">
        <a 
          href="mailto:med.chemaou@gmail.com" 
          className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
        >
          <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
            <Mail className="text-blue-600" size={24} />
          </div>
          <span className="ml-4 text-gray-700 group-hover:text-blue-600 transition-colors duration-300">med.chemaou@gmail.com</span>
        </a>
        <a 
          href="tel:+212620077755" 
          className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
        >
          <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors duration-300">
            <Phone className="text-green-600" size={24} />
          </div>
          <span className="ml-4 text-gray-700 group-hover:text-green-600 transition-colors duration-300">+212 620 077755</span>
        </a>
      </div>
      <p className="mt-8 text-center text-gray-600 text-sm">
        We're here to help! Reach out to us anytime.
      </p>
    </div>
  );
};

export default Contact;