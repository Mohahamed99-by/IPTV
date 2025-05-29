import { useState, useRef, useEffect } from 'react';
import { Gift, Sparkles, Star, Zap, Shield } from 'lucide-react';

const WHATSAPP_NUMBER = "212620077755";

const IPTVPackage = ({ title, description, price, icon, MonthsFree, originalPrice }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const openWhatsApp = () => {
    const message = encodeURIComponent(`I'm interested in purchasing the ${title} package priced at ${price} (including the 3 months free promotion). Can you provide more information?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const features = [
    { text: "No Contract Required", icon: <Shield className="w-3.5 h-3.5" /> },
    { text: "24/7 Customer Support", icon: <Sparkles className="w-3.5 h-3.5" /> },
    { text: "4K Quality Streaming", icon: <Star className="w-3.5 h-3.5" /> },
    { text: "Multi-device Support", icon: <Zap className="w-3.5 h-3.5" /> }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      className="relative group h-full transform transition-all duration-700 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Advanced Glow Effects */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-2xl blur opacity-20 group-hover:opacity-60 transition-all duration-500"></div>

      {/* Dynamic Mouse Follow Effect */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-2xl opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
          }}
        />
      )}

      <div className="relative h-full rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80 border border-white/10 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
        {/* Modern Popular Badge */}
        {title === "Premium Package" && (
          <div className="absolute top-4 right-4 md:top-5 md:right-5 z-10">
            <div className="relative group/badge">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur opacity-60 group-hover/badge:opacity-100 transition-opacity duration-300"></div>
              <span className="relative inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs font-bold bg-gradient-to-r from-amber-400/90 to-orange-500/90 text-white border border-amber-300/30 shadow-lg">
                <Star className="w-3 h-3 mr-1 animate-pulse" />
                Popular
              </span>
            </div>
          </div>
        )}

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-cyan-400/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="p-6 sm:p-7 md:p-8 flex flex-col h-full relative z-10">
          {/* Enhanced Image container with 3D effect */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-6 md:mb-8 mx-auto group/image">
            {/* Outer glow ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-spin-slow opacity-60 group-hover/image:opacity-100 transition-opacity duration-500"></div>
            {/* Middle ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '12s'}}></div>
            {/* Inner background */}
            <div className="absolute inset-0.5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full"></div>
            {/* Image container */}
            <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 p-1">
              <img
                src={icon}
                alt={`${title} icon`}
                className="w-full h-full object-cover rounded-full transition-all duration-700 group-hover/image:scale-110 group-hover/image:rotate-3 filter group-hover/image:brightness-110"
              />
              {/* Reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Package details */}
          <div className="flex-grow space-y-5 sm:space-y-6 md:space-y-7">
            {/* Enhanced Title with better typography */}
            <div className="text-center space-y-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 drop-shadow-sm">
                {title}
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto opacity-60"></div>
            </div>

            {/* Enhanced Description */}
            <p className="text-center text-slate-300 text-sm sm:text-base leading-relaxed font-medium tracking-wide px-2">
              {description}
            </p>

            {/* Enhanced Price section with better visual hierarchy */}
            <div className="text-center space-y-3">
              <div className="flex items-baseline justify-center space-x-3">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-500 tracking-tight">
                  {price}
                </span>
                {originalPrice && (
                  <span className="text-sm sm:text-base line-through text-slate-400/60 font-medium">
                    {originalPrice}
                  </span>
                )}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
                per month
              </div>
            </div>

            {/* Enhanced Free months badge with modern design */}
            <div className="relative group/badge">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl blur opacity-30 group-hover/badge:opacity-60 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-emerald-400/15 to-green-400/15 border border-emerald-400/30 text-emerald-300 text-sm font-bold px-4 py-3 rounded-2xl flex items-center justify-center space-x-2 backdrop-blur-sm">
                <Gift size={16} className="text-emerald-400 animate-pulse" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-green-300">{MonthsFree}</span>
              </div>
            </div>

            {/* Enhanced Features list with modern icons */}
            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group/feature flex items-center space-x-3 text-sm sm:text-base text-slate-200 p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400/20 to-green-400/20 border border-emerald-400/30 flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <span className="font-medium tracking-wide group-hover/feature:text-white transition-colors duration-300">{feature.text}</span>
                  <div className="flex-grow h-px bg-gradient-to-r from-slate-600/50 to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Enhanced WhatsApp button with modern design */}
            <div className="relative group/button">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 rounded-2xl blur opacity-40 group-hover/button:opacity-70 transition-opacity duration-300"></div>
              <button
                onClick={openWhatsApp}
                className="relative w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white text-sm sm:text-base font-bold transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98] border border-green-400/20"
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>

                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 fill-current relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.90-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="relative z-10 font-bold tracking-wide">Contact on WhatsApp</span>

                {/* Animated arrow */}
                <div className="relative z-10 ml-2 transform transition-transform duration-300 group-hover/button:translate-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPTVPackage;
