import React from 'react';
import { Tv, Globe, Zap, Shield, Clock, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Tv className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "HD Quality Content",
      description: "Experience crystal-clear streaming with our HD and 4K quality channels"
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Global Coverage",
      description: "Access channels from around the world with our international coverage"
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Fast Streaming",
      description: "Enjoy buffer-free streaming with our high-speed servers"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Secure Connection",
      description: "Your streaming experience is protected with advanced encryption"
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "24/7 Support",
      description: "Our dedicated team is always ready to help you"
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Multi-device Support",
      description: "Watch on your TV, computer, tablet, or smartphone"
    }
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <span className="inline-block text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 py-1 px-3 bg-blue-500/10 rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4 sm:mb-6">
              Premium Features
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
              Experience the best in IPTV streaming with our cutting-edge features and reliable service
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative h-full"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                
                <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:transform hover:-translate-y-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center mb-4 sm:mb-6">
                    <div className="text-blue-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-200">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
