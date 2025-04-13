import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import Features from './Features';
import Contact from './Contact';
import VideoSection from './VideoSection';
import FAQ from './FAQ';
import IPTVPackages from './IPTVPackages';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import './animations.css';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced progress bar with glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left shadow-[0_0_10px_rgba(79,70,229,0.7)]"
        style={{ scaleX }}
      />

      {/* Dynamic background with interactive gradient */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-indigo-950 to-black animate-gradient-xy"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(79, 70, 229, 0.15) 0%, transparent 50%), 
                     conic-gradient(from 225deg at 50% 50%, #0f172a 0deg, #1e3a8a 120deg, #581c87 240deg, #0f172a 360deg)`
        }}
      />

      {/* Enhanced grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]"></div>

      {/* Noise texture overlay with improved opacity */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('/noise.png')] pointer-events-none" />
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-10 blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Animated light beams */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute h-[300px] w-[40px] top-[-10%] left-[5%] bg-blue-400 blur-3xl rotate-[35deg] animate-beam"></div>
        <div className="absolute h-[400px] w-[30px] bottom-[-10%] right-[15%] bg-purple-400 blur-3xl rotate-[-40deg] animate-beam animation-delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="relative">
        {/* Enhanced glass-effect navigation bar */}
        <div className="fixed top-0 left-0 right-0 backdrop-blur-md bg-white/5 border-b border-white/10 z-40 shadow-lg shadow-black/5" />

        {/* Content wrapper with improved max width */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
            {/* Hero Section with enhanced spacing and perspective */}
            <section className="pt-36 pb-20 perspective-1000">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <HeroSection />
              </motion.div>
            </section>

            {/* Video Section with enhanced parallax effect */}
            <motion.section
              className="py-20 relative z-10"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Section divider - top wave */}
                <div className="absolute top-0 left-0 right-0 h-16 -translate-y-full overflow-hidden">
                  <svg className="absolute bottom-0 w-full h-full text-slate-900/30" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
                    <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" fill="currentColor"/>
                  </svg>
                </div>
                <VideoSection />
              </div>
            </motion.section>

            {/* Features with enhanced modern grid layout */}
            <motion.section
              className="py-24 relative z-10"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Features />
            </motion.section>

            {/* FAQ with enhanced smooth animations */}
            <motion.section
              className="py-24 relative z-10"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Section divider - top wave */}
                <div className="absolute top-0 left-0 right-0 h-16 -translate-y-full overflow-hidden transform rotate-180">
                  <svg className="absolute bottom-0 w-full h-full text-slate-900/30" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
                    <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" fill="currentColor"/>
                  </svg>
                </div>
                <FAQ />
              </div>
            </motion.section>

            {/* IPTV Packages with enhanced hover effects */}
            <motion.section
              className="py-24 relative z-10"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <IPTVPackages />
            </motion.section>

            {/* Contact section with enhanced glass effect */}
            <motion.section
              className="py-24 mb-16 relative z-10"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Section divider - top wave */}
                <div className="absolute top-0 left-0 right-0 h-16 -translate-y-full overflow-hidden">
                  <svg className="absolute bottom-0 w-full h-full text-slate-900/30" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
                    <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" fill="currentColor"/>
                  </svg>
                </div>
                <Contact />
              </div>
            </motion.section>
          </motion.div>
          </AnimatePresence>
          
          {/* Scroll to top button */}
          <motion.button
            className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/20 z-50 opacity-0 hover:scale-110 transition-transform duration-300"
            style={{ opacity: scrollYProgress }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="fixed top-1/4 right-8 w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-20 blur-2xl animate-float"></div>
      <div className="fixed bottom-1/3 left-8 w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 blur-2xl animate-float animation-delay-2000"></div>
    </div>
  );
};

export default Home;
