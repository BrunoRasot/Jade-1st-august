import { useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { AnimatePresence } from 'framer-motion';

import { MusicPlayer } from './components/MusicPlayer';
import { FallingHearts } from './components/FallingHearts';
import { Welcome } from './screens/Welcome';
import { BookStory } from './screens/BookStory';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <ReactLenis root>
      <MusicPlayer isPlaying={started} />
      
      <AnimatePresence>
        {!started && <Welcome onStart={() => setStarted(true)} />}
      </AnimatePresence>

      {started && (
        <main className="relative w-full min-h-screen bg-[#030303]">
          
          {/* Capas de fondo cinematográfico */}
          <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent z-0" />
          <div className="fixed inset-0 pointer-events-none bg-noise z-0" />
          
          <FallingHearts />
          
          {/* La historia */}
          <BookStory />
          
          {/* Footer minimalista */}
          <section className="pb-24 pt-10 flex justify-center relative z-10">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs tracking-[0.3em] font-light uppercase text-white/30 hover:text-white transition-all duration-500 border-b border-white/10 hover:border-white/50 pb-2"
            >
              Volver a leer
            </button>
          </section>

        </main>
      )}
    </ReactLenis>
  );
}

export default App;