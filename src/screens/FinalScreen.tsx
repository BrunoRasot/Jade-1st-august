import { motion } from 'framer-motion';

export const FinalScreen = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative z-10 px-6 text-center">
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 2 }}
        className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#F8C8DC] to-[#F4E2D8] mb-8"
      >
        Gracias por existir.
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="text-xl md:text-3xl font-serif text-white/70 italic mb-16"
      >
        Te quiero muchísimo.
      </motion.p>
      
      <motion.button 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-sm tracking-widest uppercase text-white/50 hover:text-white transition-colors border-b border-white/20 pb-1"
      >
        Volver a leer
      </motion.button>
    </section>
  );
};