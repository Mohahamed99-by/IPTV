import React from 'react';
import IPTVPackage from './IPTVPackage';

// Correct imports for images
import image1 from "../assets/img/image1.jpeg";
import image2 from '../assets/img/image2.jpeg';
import image3 from '../assets/img/image3.jpeg';

const IPTVPackages = () => {
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
      price: "$24.99/6 months",
      originalPrice: "$27.99/6 months",
      MonthsFree: "+1 Month Free",
      icon: image2,  // Correctly assign the image
    },
    {
      title: "Ultimate Package",
      description: "500+ channels, 4K quality, multiple device support, and exclusive content",
      price: "$34.99/year",
      originalPrice: "$36.99/year",
      MonthsFree: "+3 Months Free",
      icon: image3,  // Correctly assign the image
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 py-1 px-3 bg-blue-500/10 rounded-full">
              Pricing Plans
            </span>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
              Choose Your IPTV Package
            </h1>
            <p className="text-xl text-blue-300 mb-4">
              Get 3 months free with any package!
            </p>
            <p className="text-blue-200/80 max-w-2xl mx-auto">
              Select the perfect plan for your entertainment needs. All packages include HD channels, 24/7 support, and regular updates.
            </p>
          </div>

          {/* Feature highlights before packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "HD Quality", description: "Crystal clear streaming" },
              { title: "24/7 Support", description: "Always here to help" },
              { title: "Regular Updates", description: "New channels added weekly" }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <IPTVPackage {...pkg} />
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-20 text-center">
            <p className="text-blue-200 mb-4">Trusted by thousands of users worldwide</p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-blue-300/80">
                <span className="block text-2xl font-bold">10K+</span>
                <span className="text-sm">Active Users</span>
              </div>
              <div className="text-blue-300/80">
                <span className="block text-2xl font-bold">99.9%</span>
                <span className="text-sm">Uptime</span>
              </div>
              <div className="text-blue-300/80">
                <span className="block text-2xl font-bold">24/7</span>
                <span className="text-sm">Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IPTVPackages;
