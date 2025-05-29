import { useState } from 'react';
import { Gift, Check } from 'lucide-react';

const WHATSAPP_NUMBER = "212620077755";

const IPTVPackage = ({ title, description, price, icon, MonthsFree, originalPrice }) => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(`I'm interested in purchasing the ${title} package priced at ${price} (including the 3 months free promotion). Can you provide more information?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const features = [
    "No Contract Required",
    "24/7 Customer Support",
    "4K Quality Streaming",
    "Multi-device Support"
  ];

  return (
    <div className="relative group h-full">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
      
      <div className="relative h-full rounded-2xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl">
        {/* Popular tag for Premium package */}
        {title === "Premium Package" && (
          <div className="absolute top-4 right-4 md:top-5 md:right-5">
            <span className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-400/20 to-purple-400/20 text-blue-300 border border-blue-400/30">
              Popular
            </span>
          </div>
        )}

        <div className="p-4 sm:p-6 md:p-8 flex flex-col h-full">
          {/* Image container with gradient border */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-6 md:mb-8 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-0.5 bg-slate-900 rounded-full"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden">
              <img 
                src={icon} 
                alt={`${title} icon`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
          </div>

          {/* Package details */}
          <div className="flex-grow space-y-4 sm:space-y-5 md:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {title}
            </h3>
            <p className="text-center text-blue-200 text-xs sm:text-sm leading-relaxed">
              {description}
            </p>

            {/* Price section */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {price}
                </span>
                <span className="text-xs sm:text-sm line-through text-blue-300/50">
                  {originalPrice}
                </span>
              </div>
            </div>

            {/* Free months badge */}
            <div className="bg-gradient-to-r from-green-400/10 to-emerald-400/10 border border-green-400/20 text-green-300 text-xs sm:text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl flex items-center justify-center space-x-2">
              <Gift size={14} className="text-green-400" />
              <span>{MonthsFree}</span>
            </div>

            {/* Features list */}
            <div className="space-y-2 sm:space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs sm:text-sm text-blue-200">
                  <Check size={14} className="text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp button */}
            <button 
              onClick={openWhatsApp}
              className="w-full mt-4 py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white text-sm sm:text-base font-semibold transition duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.90-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="whitespace-nowrap">Contact on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPTVPackage;
