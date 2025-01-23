import React from 'react';
import HeroSection from './HeroSection';
import Features from './Features';
import Contact from './Contact';
import VideoSection from './VideoSection';
import FAQ from './FAQ';
import IPTVPackages from './IPTVPackages';

const Home = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto flex-grow">
        <HeroSection />
        <VideoSection />
       <Features />
        <FAQ />
        <IPTVPackages />
        <Contact />
      </div>
   
    </div>
  );
};

export default Home;
