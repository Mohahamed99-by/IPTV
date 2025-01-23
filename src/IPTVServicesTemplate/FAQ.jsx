import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Tv, Zap } from 'lucide-react';

const faqs = [
  {
    question: 'What channels are included in your IPTV service?',
    answer: 'Our IPTV service includes over 10,000+ live channels from around the world. You ll get access to sports channels, movies, entertainment, news, kids content, and more. All major networks and premium channels are included in our packages.'
  },
  {
    question: 'What devices are compatible with your service?',
    answer: 'Our service is compatible with a wide range of devices including: Smart TVs (Samsung, LG, Android TV), Amazon Fire Stick, Android TV Box, MAG devices, Formuler, smartphones (iOS/Android), tablets, and computers/laptops. We provide setup guides for all supported devices.'
  },
  {
    question: 'How stable is your IPTV service?',
    answer: 'We maintain a 99.9% uptime with our premium servers located worldwide. Our infrastructure is built for reliability and performance, ensuring minimal buffering and high-quality streaming. We also provide 24/7 monitoring to quickly resolve any issues.'
  },
  {
    question: 'What streaming quality do you offer?',
    answer: 'We offer multiple streaming qualities to suit your needs: 4K Ultra HD (where available), Full HD 1080p, HD 720p, and SD quality. The streaming quality automatically adjusts based on your internet connection to ensure smooth playback.'
  },
  {
    question: 'Do you provide EPG (TV Guide) service?',
    answer: 'Yes, we provide a comprehensive Electronic Program Guide (EPG) for most channels. This includes program schedules, show descriptions, and upcoming program information. Our EPG is regularly updated to ensure accuracy.'
  },
  {
    question: 'Can I record shows or use catch-up TV?',
    answer: 'Yes! Our service includes catch-up TV functionality for many channels, allowing you to watch shows from the past 7 days. Additionally, some of our supported apps allow you to record your favorite shows for later viewing.'
  },
  {
    question: 'What is your channel update policy?',
    answer: 'We continuously monitor and update our channel list to ensure all channels are working properly. New channels are added regularly, and any issues with existing channels are typically resolved within hours. We also take channel requests from our subscribers.'
  },
  {
    question: 'How do I get support if I need help?',
    answer: 'We offer 24/7 customer support through multiple channels: Live chat on our website, email support, and a dedicated support ticket system. Our average response time is under 30 minutes, and we provide comprehensive setup guides and troubleshooting documentation.'
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-[100svh] py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <span className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-blue-500/10 text-blue-400 ring-1 ring-inset ring-blue-400/20">
              Support & Help
            </span>
            <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-300">
              Everything you need to know about our IPTV service
            </p>
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16 space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200" />
                <div className="relative rounded-lg bg-slate-900/50 backdrop-blur-sm ring-1 ring-white/10 transition duration-300 group-hover:ring-white/20 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between focus:outline-none group"
                  >
                    <span className="text-base sm:text-lg font-medium text-white group-hover:text-blue-400 transition-colors pr-4">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                    )}
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16 text-center">
            <div className="inline-flex items-center justify-center p-0.5 sm:p-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
              <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-slate-900/90 backdrop-blur-sm">
                <p className="text-sm sm:text-base text-gray-300 flex items-center justify-center gap-1.5 sm:gap-2">
                  <Tv className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  Still have questions?{' '}
                  <a href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center gap-1">
                    Contact our support team
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
