import { motion } from 'framer-motion';

export const FallingHearts = () => {
  const hearts = Array.from({ length: 25 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((_, i) => {
        const size = Math.random() * 20 + 10;
        const left = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = Math.random() * 15 + 20;
        const isBlurred = Math.random() > 0.5;

        return (
          <motion.div
            key={i}
            className="absolute text-white/20"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              top: '-10%',
              filter: isBlurred ? 'blur(4px)' : 'blur(0px)',
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              opacity: [0, isBlurred ? 0.3 : 0.6, 0],
              rotate: [0, Math.random() * 90 - 45, Math.random() * 180],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: 'linear',
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
};