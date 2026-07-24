import { motion } from 'framer-motion';

interface Props {
  text: string;
  delay?: number;
  className?: string;
}

export const Typewriter = ({ text, delay = 0, className = "" }: Props) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
    hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
  };

  return (
    <motion.p 
      variants={container} 
      initial="hidden" 
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`font-serif leading-relaxed ${className}`}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};