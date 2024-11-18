import React, { useContext } from 'react';
import IPTVPackage from './IPTVPackage';
import { DarkModeContext } from './DarkModeContext';

// Correct imports for images
import image1 from "../assets/img/image1.jpeg";
import image2 from '../assets/img/image2.jpeg';
import image3 from '../assets/img/image3.jpeg';

function IPTVPackages() {
  const { darkMode } = useContext(DarkModeContext); // Use the custom hook

  // Replace icons with images
  const packages = [
    {
      title: "Basic Package",
      description: "Access to 100+ channels including news, sports, and entertainment",
      price: "$14.99/month",
      originalPrice: "$16.99/month",
      MonthsFree: "+1 week Free",
      icon: image1,  // Correctly assign the image
    },
    {
      title: "Premium Package",
      description: "300+ channels with HD quality and on-demand content",
      price: "$24.99/month",
      originalPrice: "$27.99/month",
      MonthsFree: "+1 Month Free",
      icon: image2,  // Correctly assign the image
    },
    {
      title: "Ultimate Package",
      description: "500+ channels, 4K quality, multiple device support, and exclusive content",
      price: "$34.99/month",
      originalPrice: "$36.99/month",
      MonthsFree: "+3 Months Free",
      icon: image3,  // Correctly assign the image
    }
  ];

  return (
    <div className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
          Choose Your IPTV Package
        </h1>
      
        <p className={`text-xl text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-12`}>
          Get 3 months free with any package!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <IPTVPackage key={index} {...pkg} isDarkMode={darkMode} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default IPTVPackages;
