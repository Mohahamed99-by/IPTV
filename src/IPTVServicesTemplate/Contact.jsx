import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Send, CheckCircle, AlertCircle, MessageCircle, User, Mail } from 'lucide-react';

const Notification = ({ type, message, onClose }) => {
  return (
    <div 
      className={`fixed top-4 right-4 z-50 p-3 sm:p-4 rounded-lg shadow-2xl flex items-center space-x-3 transform transition-all duration-300 max-w-[calc(100vw-2rem)] sm:max-w-md ${
        type === 'success' 
          ? 'bg-gradient-to-r from-green-400 to-green-600 text-white' 
          : 'bg-gradient-to-r from-red-400 to-red-600 text-white'
      }`}
    >
      {type === 'success' ? (
        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
      )}
      <div className="flex-grow min-w-0">
        <p className="font-bold text-sm sm:text-base">
          {type === 'success' ? 'Success' : 'Error'}
        </p>
        <p className="text-xs sm:text-sm truncate">{message}</p>
      </div>
      <button 
        onClick={onClose} 
        className="ml-2 sm:ml-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 flex-shrink-0"
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
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        {notification.show && (
          <Notification 
            type={notification.type} 
            message={notification.message}
            onClose={() => setNotification({ show: false, type: '', message: '' })}
          />
        )}
        
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-3 sm:mb-4">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-300">
              Have a question or want to work together? We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Contact Information Section */}
            <div className="rounded-2xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl p-6 sm:p-8">
              <div className="mb-8 sm:mb-12">
                <MessageCircle 
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-blue-400" 
                />
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4 text-white">Contact Information</h2>
                <p className="text-center text-sm sm:text-base text-blue-200">
                  Our team is ready to assist you with any questions or concerns.
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4 text-blue-200 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Our team responds within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 text-blue-200 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base break-all">med.chemaou@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="rounded-2xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-blue-200">Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                      <User className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full p-3 sm:p-4 pl-10 sm:pl-12 text-sm sm:text-base rounded-xl bg-white/5 border border-white/10 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/50 text-white placeholder-blue-200/60 focus:outline-none transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-blue-200">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full p-3 sm:p-4 pl-10 sm:pl-12 text-sm sm:text-base rounded-xl bg-white/5 border border-white/10 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/50 text-white placeholder-blue-200/60 focus:outline-none transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-blue-200">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-xl bg-white/5 border border-white/10 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/50 text-white placeholder-blue-200/60 focus:outline-none transition-all duration-300"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className={`w-full p-3 sm:p-4 rounded-xl flex items-center justify-center space-x-2 sm:space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base ${
                    isLoading 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-[1.02]'
                  }`}
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold">{isLoading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;