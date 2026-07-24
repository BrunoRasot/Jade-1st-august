import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const letterParagraphs = [
  "Hay personas que llegan a la vida de uno de una forma tan inesperada que, cuando te das cuenta de todo lo que significan, ya es demasiado tarde para fingir que son alguien más.",
  "Tú fuiste una de esas personas.",
  "Nunca imaginé que una conversación pudiera convertirse en tantas sonrisas, que unas llamadas terminarían siendo parte de mis días o que alguien pudiera hacerme sentir tan tranquilo simplemente por estar ahí.",
  "Poco a poco te fuiste convirtiendo en alguien importante para mí, sin prisas, sin darme cuenta, simplemente sucedió.",
  "Conocerte ha sido una de esas casualidades que agradezco profundamente. Porque detrás de cada charla encontré a una mujer fuerte, divertida, inteligente, noble y con un corazón que vale muchísimo.",
  "Una persona que me enseñó que las conexiones más bonitas nacen cuando uno es simplemente uno mismo.",
  "Cuando por fin pude verte en persona entendí que había recuerdos que jamás iba a olvidar. No fue un momento perfecto porque todo fuera de película, sino porque fue real.",
  "Porque estabas tú. Y eso bastó para que ese día encontrara un lugar especial en mi memoria.",
  "Con el tiempo también entendí algo muy importante: querer a alguien no significa apresurar sus tiempos. Todos llevamos procesos diferentes, heridas distintas y momentos en los que necesitamos pensar más en nosotros mismos antes de abrirle completamente la puerta a alguien más.",
  "Y quiero que sepas que lo entiendo.",
  "Sería mentira decir que no me gustaría que algún día fueras mi novia. Claro que me gustaría. Me hace ilusión imaginar lo bonito que podría ser compartir más momentos contigo, construir recuerdos nuevos y poder llamarte mi compañera.",
  "No es un secreto; es un deseo sincero que nace de todo lo bueno que veo en ti.",
  "Pero también sería injusto pedirte que corras cuando tu corazón necesita caminar.",
  "Por eso no quiero que este detalle sea una presión ni una manera de convencerte de algo. Quiero que sea exactamente lo contrario: un recordatorio de que eres una persona muy especial para mí, independientemente del nombre que tenga lo nuestro hoy.",
  "Si algún día nuestros caminos vuelven a encontrarse en el mismo momento, seré muy feliz. Y si para que eso ocurra hace falta tiempo, entonces dejaré que el tiempo haga su trabajo.",
  "Mientras tanto, seguiré disfrutando de conocerte, de hablar contigo, de reír contigo y de valorar cada instante que compartimos.",
  "Porque las mejores historias no siempre empiezan con un \"sí\" inmediato; algunas comienzan con paciencia, respeto y la decisión de cuidar lo que se siente.",
  "Hoy no te escribo porque seas mi novia.",
  "Te escribo porque eres la mujer que ocupa un lugar muy especial en mi corazón.",
  "Y porque, aunque todavía no pueda llamarte así, me hace ilusión pensar que quizá algún día la vida nos regale esa oportunidad.",
  "Hasta entonces, no quiero prometerte una espera infinita ni hacerte sentir responsable de mis sentimientos.",
  "Solo quiero que sepas que aquí hay alguien que te aprecia de verdad, que cree en ti y que, mientras ambos sigamos eligiendo compartir este camino, estará feliz de seguir conociéndote.",
  "Gracias por aparecer en mi vida.",
  "Y gracias por ser tú."
];

export const BookStory = () => {
  const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  // Lógica de deslizamiento automático suave
  useEffect(() => {
    let animationFrameId: number;

    const smoothScroll = () => {
      if (isAutoScrolling) {
        // Ajusta este número (0.6) para cambiar la velocidad. Mayor = más rápido
        window.scrollBy({ top: 0.6, left: 0, behavior: 'auto' });
        animationFrameId = requestAnimationFrame(smoothScroll);
      }
    };

    if (isAutoScrolling) {
      animationFrameId = requestAnimationFrame(smoothScroll);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isAutoScrolling]);

  // Detener el auto-scroll si el usuario toca la pantalla o hace scroll manual
  useEffect(() => {
    const handleUserInteraction = () => setIsAutoScrolling(false);
    
    window.addEventListener('wheel', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);
    
    return () => {
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-start w-full relative z-10 py-20">
      
      {/* Botón flotante de Lectura Automática */}
      <div className="fixed bottom-10 right-10 z-50">
        <button
          onClick={() => setIsAutoScrolling(!isAutoScrolling)}
          className={`px-6 py-3 rounded-full backdrop-blur-xl border border-white/10 shadow-lg text-xs uppercase tracking-widest transition-all duration-500 ${
            isAutoScrolling 
              ? 'bg-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
              : 'bg-black/40 text-white/50 hover:text-white hover:bg-white/10'
          }`}
        >
          {isAutoScrolling ? 'Pausar Lectura' : 'Lectura Automática'}
        </button>
      </div>

      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 2.5, ease: easing }}
        viewport={{ once: true, margin: "-100px" }}
        className="min-h-[80vh] flex flex-col items-center justify-center text-center w-full"
      >
        <h2 className="text-5xl md:text-7xl font-serif text-white/90 italic tracking-wide drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          Para Jade
        </h2>
        <div className="w-[1px] h-32 bg-gradient-to-b from-white/30 to-transparent mt-16" />
      </motion.div>

      {/* Párrafos */}
      <div className="max-w-2xl w-full px-6 flex flex-col">
        {letterParagraphs.map((paragraph, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: easing }}
            viewport={{ once: true, margin: "-20%" }}
            className="min-h-[60vh] flex items-center justify-center w-full"
          >
            <p
              className={`font-serif leading-[2.2] tracking-[0.02em] ${
                paragraph.length < 50 
                  ? "text-2xl md:text-4xl text-center text-white italic drop-shadow-md" 
                  : "text-lg md:text-[22px] text-justify text-gray-300 font-light"
              }`}
            >
              {paragraph}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Firma y Ositos */}
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 2.5, ease: easing }}
        viewport={{ once: true, margin: "-20%" }}
        className="min-h-[80vh] flex flex-col items-center justify-center text-center w-full"
      >
        {/* Contenedor elegante para el GIF importado automáticamente */}
        <div className="bg-white/5 p-4 rounded-[2rem] backdrop-blur-sm border border-white/10 mb-8 shadow-2xl">
          <img 
            src="https://media.tenor.com/mOXZ6-U6V1YAAAAi/milk-and-mocha-bear.gif" 
            alt="Milk y Mocha" 
            className="w-32 h-32 object-contain mix-blend-normal"
          />
        </div>

        <p className="text-xl md:text-3xl font-serif text-white/50 mb-8 italic">Con mucho cariño,</p>
        <p className="text-5xl md:text-7xl font-serif text-white tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
          Bruno <span className="text-3xl inline-block animate-pulse-slow ml-2">🤍</span>
        </p>
      </motion.div>

    </section>
  );
};