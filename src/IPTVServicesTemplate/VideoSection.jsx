import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import videoSrc from '../assets/Video.mp4';

const VideoSection = () => {
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Reference to the video element
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
    setIsMuted(!isMuted); // true 
    videoRef.current.muted = !isMuted; // Ensure the mute state is applied to the video element
  };

  return (
    <div className="max-w-4xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 tracking-tight">
        Experience IPTV Like Never Before
      </h2>
      
      <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900">
        {/* Video Container */}
        <div className="aspect-w-16 aspect-h-9">
          <video
            ref={videoRef} // Add reference to the video element
            className="w-full h-full object-cover"
            src={videoSrc}
            muted={isMuted}
            autoPlay={false}
            playsInline
            loop
          />
        </div>

        {/* Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center justify-between">
            {/* Play/Pause Button */}
            <button
              onClick={handlePlayPause}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white" />
              )}
            </button>

            {/* Volume Control */}
            <button
              onClick={handleMute}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 text-white" />
              ) : (
                <Volume2 className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Optional Caption */}
      <p className="text-sm text-gray-600 text-center mt-4">
        Watch our demo to see the future of streaming entertainment
      </p>
    </div>
  );
};

export default VideoSection;
