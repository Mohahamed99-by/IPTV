import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Send, CheckCircle, AlertCircle, MessageCircle, User, Mail } from 'lucide-react';
import { useDarkMode } from './DarkModeContext';

const Notification = ({ type, message, onClose }) => {
  return (
    <div 
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-2xl flex items-center space-x-3 transform transition-all duration-300 ${
        type === 'success' 
          ? 'bg-gradient-to-r from-green-400 to-green-600 text-white' 
          : 'bg-gradient-to-r from-red-400 to-red-600 text-white'
      }`}
    >
      {type === 'success' ? (
        <CheckCircle className="w-6 h-6" />
      ) : (
        <AlertCircle className="w-6 h-6" />
      )}
      <div>
        <p className="font-bold">
          {type === 'success' ? 'Success' : 'Error'}
        </p>
        <p className="text-sm">{message}</p>
      </div>
      <button 
        onClick={onClose} 
        className="ml-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-1"
      >
        ✕
      </button>
    </div>
  );
};

const Contact = () => {
  const { darkMode } = useDarkMode();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [notification, setNotification] = useState({ 
    show: false, 
    type: '', 
    message: '' 
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const SERVICE_ID = 'service_pt8ugbq'; 
    const TEMPLATE_ID = 'template_t4q59s4'; 
    const USER_ID = 'B-qBSDLg9GU-JVgmN';

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        setFormData({ name: '', email: '', message: '' });
        showNotification('success', 'Message sent successfully!');
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        showNotification('error', 'Failed to send message. Please try again.');
        setIsLoading(false);
      });
  };

  return (
    <div 
      className={`min-h-screen flex items-center justify-center px-4 py-16 relative ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
          : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900'
      }`}
    >
      {notification.show && (
        <Notification 
          type={notification.type} 
          message={notification.message}
          onClose={() => setNotification({ show: false, type: '', message: '' })}
        />
      )}
      
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Information Section */}
          <div 
            className={`p-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 ${
              darkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="mb-8">
              <MessageCircle 
                className={`w-16 h-16 mx-auto mb-4 ${
                  darkMode 
                    ? 'text-blue-400' 
                    : 'text-blue-600'
                }`} 
              />
              <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
              <p className="text-center opacity-70">
                Have a question or want to work together? Fill out the form and we'll get back to you.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User 
                  className={`w-6 h-6 ${
                    darkMode 
                      ? 'text-blue-300' 
                      : 'text-blue-600'
                  }`} 
                />
                <span>Our team responds within 24 hours</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail 
                  className={`w-6 h-6 ${
                    darkMode 
                      ? 'text-blue-300' 
                      : 'text-blue-600'
                  }`} 
                />
                <span>med.chemaou@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div 
            className={`p-8 rounded-xl shadow-2xl ${
              darkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User 
                      className={`w-5 h-5 ${
                        darkMode 
                          ? 'text-gray-400' 
                          : 'text-gray-500'
                      }`} 
                    />
                  </div>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:outline-none ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500' 
                        : 'bg-white border-gray-300 text-gray-800 focus:ring-blue-500'
                    }`}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail 
                      className={`w-5 h-5 ${
                        darkMode 
                          ? 'text-gray-400' 
                          : 'text-gray-500'
                      }`} 
                    />
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:outline-none ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500' 
                        : 'bg-white border-gray-300 text-gray-800 focus:ring-blue-500'
                    }`}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500' 
                      : 'bg-white border-gray-300 text-gray-800 focus:ring-blue-500'
                  }`}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full p-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                }`}
              >
                <Send className="w-5 h-5" />
                <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;