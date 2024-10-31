import { useState, useRef, useContext } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import videoSrc from '../assets/Video.mp4';
import { DarkModeContext } from './DarkModeContext';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

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

  return (
    <div className="max-w-4xl mx-auto my-12 px-4">
      <h2 className={`text-3xl font-bold text-center mb-8 tracking-tight ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
        Experience IPTV Like Never Before
      </h2>
      
      <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900">
        <div className="aspect-w-16 aspect-h-9">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={videoSrc}
            muted={isMuted}
            autoPlay={false}
            playsInline
            loop
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handlePlayPause}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white" />
              )}
            </button>

            <button
              onClick={handleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
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

      <p className={`text-sm text-center mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        Watch our demo to see the future of streaming entertainment
      </p>
    </div>
  );
};

export default VideoSection;
