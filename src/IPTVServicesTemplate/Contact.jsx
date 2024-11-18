import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Send, MapPin, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';

const Notification = ({ type, message, onClose }) => {
  return (
    <div 
      className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center space-x-3 ${
        type === 'success' 
          ? 'bg-green-100 text-green-800' 
          : 'bg-red-100 text-red-800'
      }`}
    >
      {type === 'success' ? (
        <CheckCircle className="w-6 h-6 text-green-600" />
      ) : (
        <AlertCircle className="w-6 h-6 text-red-600" />
      )}
      <div>
        <p className="font-semibold">
          {type === 'success' ? 'Success' : 'Error'}
        </p>
        <p className="text-sm">{message}</p>
      </div>
      <button 
        onClick={onClose} 
        className="ml-4 hover:bg-gray-200 rounded-full p-1"
      >
        ✕
      </button>
    </div>
  );
};

const Contact = () => {
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
    
    // Automatically hide notification after 5 seconds
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Replace these with your actual IDs 
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
    <div className="container mx-auto px-4 py-16 relative">
      {/* Notification System */}
      {notification.show && (
        <Notification 
          type={notification.type} 
          message={notification.message}
          onClose={() => setNotification({ show: false, type: '', message: '' })}
        />
      )}

      <div className="grid md:grid-cols-2 gap-12 items-center">
      
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="5"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full p-3 rounded-lg text-white flex items-center justify-center space-x-2 transition-colors duration-300 
                ${isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                }`}
            >
              <Send className="w-5 h-5" />
              <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;