import { motion } from 'framer-motion';

export const LetterOpen = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 50, rotateX: 20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="w-72 h-48 glass-panel rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer"
      >
        <div className="absolute inset-0 border-t-[100px] border-t-white/10 border-l-[144px] border-l-transparent border-r-[144px] border-r-transparent origin-top transition-transform duration-1000 group-hover:-rotate-x-180" />
        <p className="font-serif text-[#F4E2D8] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300 text-lg">
          Para ti...
        </p>
      </motion.div>
    </section>
  );
};