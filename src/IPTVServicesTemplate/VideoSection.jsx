import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, ChevronRight, Rewind, FastForward, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import videoSrc from '../assets/Video.mp4';
import './animations.css';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  
  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', () => setIsHovering(true));
      container.addEventListener('mouseleave', () => setIsHovering(false));
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', () => setIsHovering(true));
        container.removeEventListener('mouseleave', () => setIsHovering(false));
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    setIsMuted((prev) => {
      const newMuteState = !prev;
      videoRef.current.muted = newMuteState;
      return newMuteState;
    });
  };
  
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    if (newVolume === 0) {
      setIsMuted(true);
      videoRef.current.muted = true;
    } else if (isMuted) {
      setIsMuted(false);
      videoRef.current.muted = false;
    }
  };
  
  const handleRewind = () => {
    const newTime = Math.max(videoRef.current.currentTime - 10, 0);
    videoRef.current.currentTime = newTime;
  };
  
  const handleFastForward = () => {
    const newTime = Math.min(videoRef.current.currentTime + 10, videoRef.current.duration);
    videoRef.current.currentTime = newTime;
  };

  const handleTimeUpdate = () => {
    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(progress);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
    const newTime = clickPosition * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        {/* Animated background particles */}
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
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span 
              className="inline-block text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 py-1 px-2 sm:px-3 bg-blue-500/10 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Watch Demo
            </motion.span>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Experience IPTV Like Never Before
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-blue-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Discover the future of streaming entertainment
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="relative perspective-1000"
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              transform: isHovering ? `rotateX(${(mousePosition.y - 0.5) * -5}deg) rotateY(${(mousePosition.x - 0.5) * 5}deg)` : 'rotateX(0deg) rotateY(0deg)',
              transition: 'transform 0.3s ease-out'
            }}
          >
            {/* Enhanced 3D glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl sm:rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
            
            {/* Particle effects around the video */}
            <div className="absolute -inset-10 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-2 h-2 rounded-full bg-blue-400 opacity-70"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${5 + Math.random() * 5}s ease-in-out ${Math.random() * 5}s infinite`
                  }}
                />
              ))}
            </div>
            
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl">
              <div className="aspect-w-16 aspect-h-9">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src={videoSrc}
                  muted={isMuted}
                  playsInline
                  loop
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                />
              </div>

              {/* Video overlay with enhanced 3D effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <motion.button
                        onClick={handlePlayPause}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-md border border-white/30 flex items-center justify-center group/play hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        whileHover={{ scale: 1.1, boxShadow: '0 0 25px rgba(59, 130, 246, 0.7)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white group-hover/play:text-blue-400 transition-colors" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Enhanced Controls */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-3 sm:p-5 opacity-0 group-hover:opacity-100 transition-all duration-500"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: isHovering ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Enhanced Progress bar with preview */}
                <div className="relative mb-3 sm:mb-5">
                  <div 
                    className="relative h-1.5 sm:h-2 bg-white/20 rounded-full cursor-pointer overflow-hidden group/progress"
                    onClick={handleProgressClick}
                  >
                    <motion.div 
                      className="absolute h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                      style={{ width: `${progress}%` }}
                      whileHover={{ height: '150%' }}
                      transition={{ duration: 0.2 }}
                    />
                    <div className="absolute h-3 w-3 sm:h-4 sm:w-4 bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)] -mt-0.5 sm:-mt-1 opacity-0 group-hover/progress:opacity-100 transition-opacity duration-300" style={{ left: `calc(${progress}% - 6px)` }}></div>
                  </div>
                  
                  {/* Time indicators */}
                  <div className="flex justify-between mt-1 text-xs sm:text-sm text-white/80">
                    <span>{formatTime(videoRef.current?.currentTime || 0)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 sm:space-x-3">
                    {/* Rewind button */}
                    <motion.button
                      onClick={handleRewind}
                      className="p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Rewind className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </motion.button>
                    
                    {/* Play/Pause button */}
                    <motion.button
                      onClick={handlePlayPause}
                      className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-colors"
                      whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      ) : (
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      )}
                    </motion.button>
                    
                    {/* Fast forward button */}
                    <motion.button
                      onClick={handleFastForward}
                      className="p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FastForward className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </motion.button>

                    {/* Volume control with slider */}
                    <div className="relative flex items-center">
                      <motion.button
                        onClick={handleMute}
                        onMouseEnter={() => setShowVolumeSlider(true)}
                        className="p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        ) : (
                          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        )}
                      </motion.button>
                      
                      <AnimatePresence>
                        {showVolumeSlider && (
                          <motion.div 
                            className="absolute left-full ml-2 bg-black/80 backdrop-blur-md rounded-full px-2 py-1 flex items-center space-x-1"
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 'auto' }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2 }}
                            onMouseLeave={() => setShowVolumeSlider(false)}
                          >
                            <input 
                              type="range" 
                              min="0" 
                              max="1" 
                              step="0.01" 
                              value={volume}
                              onChange={handleVolumeChange}
                              className="w-20 accent-blue-500"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 sm:space-x-3">
                    {/* Settings button */}
                    <motion.button
                      className="p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </motion.button>
                    
                    {/* Fullscreen button */}
                    <motion.button
                      onClick={() => videoRef.current.requestFullscreen()}
                      className="p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Features grid with animations */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { 
                title: "HD Streaming", 
                description: "Experience crystal clear 4K quality with our advanced streaming technology",
                icon: <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 12H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.5 15L15.5 12L12.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
              },
              { 
                title: "Multi-device", 
                description: "Seamlessly watch on any device with our synchronized cloud platform",
                icon: <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 16.95H6.21C2.84 16.95 2 16.11 2 12.74V6.74C2 3.37 2.84 2.53 6.21 2.53H16.74C20.11 2.53 20.95 3.37 20.95 6.74" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 21.47V16.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
              },
              { 
                title: "24/7 Support", 
                description: "Our dedicated team is always available to help with any questions or issues",
                icon: <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index + 1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                {/* Card glow effect */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-25 blur group-hover:opacity-75 transition duration-500"></div>
                
                <div className="relative flex items-start space-x-4 p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 overflow-hidden">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center z-10 group-hover:from-blue-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                    {feature.icon}
                  </div>
                  
                  <div className="flex-1 z-10">
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">{feature.title}</h3>
                    <p className="mt-1 text-sm sm:text-base text-blue-200 group-hover:text-blue-100 transition-colors duration-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
         </div>
       </div>
     </div>
   );
 };

export default VideoSection;
