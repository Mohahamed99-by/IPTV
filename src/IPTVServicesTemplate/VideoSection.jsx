import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, ChevronRight } from 'lucide-react';
import videoSrc from '../assets/Video.mp4';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

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
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="inline-block text-blue-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 py-1 px-2 sm:px-3 bg-blue-500/10 rounded-full">
              Watch Demo
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4 sm:mb-6">
              Experience IPTV Like Never Before
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 mb-4">
              Discover the future of streaming entertainment
            </p>
          </div>
          
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            
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

              {/* Video overlay - only visible when hovering */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={handlePlayPause}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group/play hover:scale-110 transition-transform duration-300"
                    >
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white group-hover/play:text-blue-400 transition-colors" />
                    </button>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-2 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Progress bar */}
                <div 
                  className="relative h-1 mb-2 sm:mb-4 bg-white/20 rounded-full cursor-pointer overflow-hidden"
                  onClick={handleProgressClick}
                >
                  <div 
                    className="absolute h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <button
                      onClick={handlePlayPause}
                      className="p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                      ) : (
                        <Play className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                      )}
                    </button>

                    <button
                      onClick={handleMute}
                      className="p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                      ) : (
                        <Volume2 className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                      )}
                    </button>

                    <span className="text-xs sm:text-sm text-white/80 hidden sm:inline">
                      {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
                    </span>
                  </div>

                  <button
                    onClick={() => videoRef.current.requestFullscreen()}
                    className="p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Maximize2 className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
            {[
              { title: "HD Streaming", description: "Crystal clear quality" },
              { title: "Multi-device", description: "Watch on any device" },
              { title: "24/7 Support", description: "Always here to help" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-blue-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
