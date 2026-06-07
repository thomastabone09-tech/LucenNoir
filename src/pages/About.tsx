import { motion } from 'motion/react';

export function About() {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-obsidian-950">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-silver-100/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-graphite-600/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 py-32 relative z-10">
        
        <header className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl text-white tracking-[0.2em] mb-6"
          >
            THE HOUSE OF LUCENNOIR
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[1px] w-24 bg-silver-400 mx-auto"
          />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 item-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[3/4] relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-obsidian-900 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1594968973184-9040a5a79963?q=80&w=1000&auto=format&fit=crop" 
              alt="Atelier" 
              className="w-full h-full object-cover filter contrast-125 grayscale-[30%]"
            />
            <div className="absolute inset-0 border border-silver-100/10 scale-95 transition-transform duration-700 group-hover:scale-100 z-20 pointer-events-none"></div>
          </motion.div>

          <div className="flex flex-col justify-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-silver-300 to-transparent"></div>
              <h3 className="font-serif text-2xl text-white tracking-widest mb-4">LUXURY BORN FROM SHADOW</h3>
              <p className="text-silver-400 leading-relaxed font-light">
                Founded on the principle that true elegance operates in the negative space. LucenNoir eschews loud branding in favor of structural perfection, uncompromising material quality, and a color palette drawn entirely from the night sky.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card p-10 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-silver-300 to-transparent"></div>
              <h3 className="font-serif text-2xl text-white tracking-widest mb-4">THE ARCHITECTURE</h3>
              <p className="text-silver-400 leading-relaxed font-light">
                Each garment is constructed with architectural rigor. We source our textiles from heritage mills in Biella, Italy, and innovative technical fabricators in Japan, fusing classical draping with brutalist resilience.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
