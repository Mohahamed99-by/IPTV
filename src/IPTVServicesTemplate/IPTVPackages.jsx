import React from 'react'
import IPTVPackage from './IPTVPackage';
import { Tv, Globe, Zap } from 'lucide-react';


function IPTVPackages() {
    const packages = [
        {
          title: "Basic Package",
          description: "Access to 100+ channels including news, sports, and entertainment",
          price: "$9.99/month",
          icon: <Tv size={32} color="white" />
        },
        {
          title: "Premium Package",
          description: "300+ channels with HD quality and on-demand content",
          price: "$19.99/month",
          icon: <Globe size={32} color="white" />
        },
        {
          title: "Ultimate Package",
          description: "500+ channels, 4K quality, multiple device support, and exclusive content",
          price: "$29.99/month",
          icon: <Zap size={32} color="white" />
        }
      ];
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Choose Your IPTV Package
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <IPTVPackage key={index} {...pkg} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default IPTVPackages
