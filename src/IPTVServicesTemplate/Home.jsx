import React from 'react';
import { Tv, Globe, Zap } from 'lucide-react';
import VideoSection from './VideoSection';
import HeroSection from './HeroSection';
import IPTVPackages from './IPTVPackages';


const Home = () => {
  

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <VideoSection />
        <IPTVPackages />
      </div>
    </div>
  );
};

export default Home;