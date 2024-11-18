import React, { useContext } from 'react';
import VideoSection from './VideoSection';
import HeroSection from './HeroSection';
import IPTVPackages from './IPTVPackages';
import Footer from './Footer';
import Contact from './Contact';
import { DarkModeContext } from './DarkModeContext';


const Home = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`min-h-screen flex flex-col py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto flex-grow">
        <HeroSection />
        <VideoSection />
        <IPTVPackages />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
