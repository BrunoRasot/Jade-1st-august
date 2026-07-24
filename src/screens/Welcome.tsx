import { motion } from 'framer-motion';

export const Welcome = ({ onStart }: { onStart: () => void }) => {
  return (
    <motion.div 
      exit={{ opacity: 0, filter: "blur(20px)" }}
      transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030303]"
    >
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F8C8DC]/5 via-transparent to-transparent opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
        className="text-center px-6 relative z-10 flex flex-col items-center"
      >
        <h1 className="text-2xl md:text-4xl font-serif text-white/60 mb-16 tracking-[0.05em] leading-loose font-light">
          Hay historias que merecen ser <br/>
          <span className="text-white italic tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            recordadas para siempre.
          </span>
        </h1>
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="relative px-14 py-4 rounded-full glass-panel text-white/80 uppercase tracking-[0.3em] text-xs transition-all duration-700 hover:text-white hover:bg-white/10 overflow-hidden group"
        >
          <span className="relative z-10 font-light">Comenzar</span>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};