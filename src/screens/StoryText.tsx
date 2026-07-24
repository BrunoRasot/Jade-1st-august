import { Typewriter } from '../components/Typewriter';

export const StoryText = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10 text-center">
      <div className="max-w-2xl space-y-16">
        <Typewriter 
          text="Todo empezó sin planearlo, en un momento ordinario..." 
          className="text-3xl md:text-5xl text-[#FDE8F1]" 
          delay={0.2} 
        />
        <Typewriter 
          text="Y de repente, sin que me diera cuenta, te convertiste en la mejor coincidencia de mi vida." 
          className="text-2xl md:text-4xl text-white/70" 
          delay={1.2} 
        />
        <Typewriter 
          text="Cada día a tu lado es un capítulo nuevo que no quiero dejar de leer." 
          className="text-xl md:text-3xl text-white/50 italic" 
          delay={2.5} 
        />
      </div>
    </section>
  );
};