import { motion } from 'framer-motion';

const events = [
  { title: "Nos conocimos ❤️", desc: "El instante en que mi vida cambió de ritmo y de color." },
  { title: "Nuestra primera conversación", desc: "Horas que parecieron minutos, y el miedo a que se acabara el tema." },
  { title: "El primer beso", desc: "El momento exacto en el que el tiempo se detuvo." },
  { title: "Hoy", desc: "Y pensar que esto es solo el comienzo de nuestra historia." }
];

export const TimelineScreen = () => {
  return (
    <section className="min-h-screen py-32 flex justify-center relative z-10 px-6">
      <div className="max-w-xl w-full border-l border-[#F8C8DC]/30 pl-8 space-y-24">
        {events.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-20%" }}
            className="relative"
          >
            <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-[#F8C8DC] shadow-[0_0_15px_rgba(248,200,220,0.6)]" />
            <h3 className="text-2xl font-serif text-white mb-3">{item.title}</h3>
            <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};