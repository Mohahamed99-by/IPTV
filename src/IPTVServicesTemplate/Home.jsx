import React from 'react';
import VideoSection from './VideoSection';
import HeroSection from './HeroSection';
import IPTVPackages from './IPTVPackages';
import Footer from './Footer';


const Home = () => {
  

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <VideoSection />
        <IPTVPackages />
        <Footer />
      </div>
    </div>
  );
};

export default Home;