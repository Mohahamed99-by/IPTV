import React from 'react'
import IPTVPackage from './IPTVPackage';
import { Tv, Globe, Zap } from 'lucide-react';


function IPTVPackages() {
  const packages = [
    {
      title: "Basic Package",
      description: "Access to 100+ channels including news, sports, and entertainment",
      price: "$14.99/month",
      originalPrice: "$16.99/month",
      MonthsFree: "+1 week Free",
      icon: <Tv size={32} color="white" />
    },
    {
      title: "Premium Package",
      description: "300+ channels with HD quality and on-demand content",
      price: "$24.99/month",
      originalPrice: "$27.99/month",
      MonthsFree: "+1 Months Free",
      icon: <Globe size={32} color="white" />
    },
    {
      title: "Ultimate Package",
      description: "500+ channels, 4K quality, multiple device support, and exclusive content",
      price: "$34.99/month",
      originalPrice: "$36.99/month",
      MonthsFree: "+3 Months Free",
      icon: <Zap size={32} color="white" />
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Choose Your IPTV Package
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">Get 3 months free with any package!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <IPTVPackage key={index} {...pkg} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default IPTVPackages;