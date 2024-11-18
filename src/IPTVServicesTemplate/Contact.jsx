import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { useDarkMode } from './DarkModeContext'; // Adjust path as needed

const Contact = () => {
  const { darkMode } = useDarkMode();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const { name, email, message } = formData;
    const encodedMessage = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`container mx-auto px-4 py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className={`max-w-xl mx-auto rounded-2xl shadow-2xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="text-center mb-10">
          <MessageCircle 
            className={`mx-auto mb-4 ${darkMode ? 'text-white' : 'text-blue-600'}`} 
            size={48} 
          />
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Get in Touch
          </h2>
          <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            We'd love to hear from you
          </p>
        </div>
        
        <div className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border-2 focus:outline-none focus:ring-2 
              ${darkMode 
                ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-500' 
                : 'bg-white text-gray-800 border-gray-300 focus:ring-blue-400'
              }`}
          />
          
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border-2 focus:outline-none focus:ring-2 
              ${darkMode 
                ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-500' 
                : 'bg-white text-gray-800 border-gray-300 focus:ring-blue-400'
              }`}
          />
          
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full p-3 rounded-lg border-2 focus:outline-none focus:ring-2 
              ${darkMode 
                ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-500' 
                : 'bg-white text-gray-800 border-gray-300 focus:ring-blue-400'
              }`}
          ></textarea>
          
          <button
            onClick={handleSubmit}
            className={`w-full p-3 rounded-lg flex items-center justify-center space-x-2 
              ${darkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
              } transition-colors duration-300`}
          >
            <Send size={20} />
            <span>Send Message</span>
          </button>
        </div>
        
        <p className={`mt-6 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          We typically respond within 24 hours
        </p>
      </div>
    </div>
  );
};

export default Contact;