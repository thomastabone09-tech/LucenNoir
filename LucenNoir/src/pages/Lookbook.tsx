import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { lookbookImages } from '../data';

export function Lookbook() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="w-full relative bg-obsidian-950">
      
      {/* Intro Header */}
      <div className="h-screen w-full flex items-center justify-center sticky top-0 bg-obsidian-950 px-6 z-0">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-5xl md:text-7xl text-white tracking-[0.15em] mb-6"
          >
            VOLUME III
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-silver-400 max-w-lg mx-auto uppercase tracking-[0.2em] text-xs leading-relaxed"
          >
            A study in silhouette and shadow. Exploring the tension between classical tailoring and modern brutalism.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 w-[1px] h-24 bg-gradient-to-b from-silver-400 to-transparent mx-auto"
          />
        </div>
      </div>

      {/* Gallery Sections */}
      <div className="relative z-10">
        {lookbookImages.map((src, index) => {
          return (
            <LookbookSection 
              key={index} 
              src={src} 
              index={index} 
            />
          );
        })}
      </div>

      <div className="h-[50vh] flex items-center justify-center bg-obsidian-950 relative z-10 border-t border-silver-100/5">
         <h2 className="font-serif text-2xl tracking-[0.3em] text-silver-300">END OF VOLUME</h2>
      </div>
    </div>
  );
}

function LookbookSection({ src, index }: { src: string, index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <div ref={ref} className="h-[150vh] flex items-center justify-center p-6 md:p-24 relative overflow-hidden">
      <motion.div 
        style={{ y, scale, opacity }}
        className="w-full max-w-5xl aspect-[4/5] md:aspect-[16/9] relative origin-center"
      >
        <div className="absolute inset-0 bg-obsidian-950/20 z-10 mix-blend-multiply"></div>
        <img 
          src={src} 
          alt={`Lookbook look ${index + 1}`}
          className="w-full h-full object-cover filter grayscale-[20%] contrast-125"
        />
        
        {/* Editorial Text Overlay */}
        <div className="absolute bottom-12 left-12 z-20 mix-blend-difference text-white">
           <span className="font-sans text-xs tracking-[0.4em] mb-2 block">LOOK {String(index + 1).padStart(2, '0')}</span>
           <h3 className="font-serif text-2xl tracking-widest hidden md:block">NOIR COLLECTION</h3>
        </div>
      </motion.div>
    </div>
  )
}
