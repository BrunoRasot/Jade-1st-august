import { useEffect, useRef, useState } from 'react';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { motion } from 'framer-motion';
import bgMusic from '../assets/music/Rewritethestart.mp3';

export const MusicPlayer = ({ isPlaying }: { isPlaying: boolean }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.volume = 0;
      
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          let vol = 0;
          const fadeInterval = setInterval(() => {
            if (vol < 0.4) {
              vol += 0.05;
              audioRef.current!.volume = vol;
            } else {
              clearInterval(fadeInterval);
            }
          }, 300);
        }).catch(error => {
          console.error("El navegador bloqueó el autoplay:", error);
        });
      }
    }
  }, [isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: isPlaying ? 1 : 0 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <audio ref={audioRef} src={bgMusic} loop />
      <button 
        onClick={toggleMute}
        className="p-3 rounded-full glass-panel text-white hover:bg-white/10 transition-all duration-300"
      >
        {isMuted ? <HiVolumeOff size={24} /> : <HiVolumeUp size={24} />}
      </button>
    </motion.div>
  );
};