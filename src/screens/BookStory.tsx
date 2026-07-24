import { motion } from 'framer-motion';

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
  // Le decimos a TypeScript que esto es estrictamente una tupla de 4 números
  const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section className="flex flex-col items-center justify-start w-full relative z-10 py-20">
      
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

      {/* Párrafos - Cada uno ocupa espacio propio para lectura aislada */}
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

      {/* Firma */}
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 2.5, ease: easing }}
        viewport={{ once: true, margin: "-20%" }}
        className="min-h-[80vh] flex flex-col items-center justify-center text-center w-full"
      >
        <p className="text-xl md:text-3xl font-serif text-white/50 mb-8 italic">Con mucho cariño,</p>
        <p className="text-5xl md:text-7xl font-serif text-white tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
          Bruno <span className="text-3xl inline-block animate-pulse-slow ml-2">🤍</span>
        </p>
      </motion.div>

    </section>
  );
};