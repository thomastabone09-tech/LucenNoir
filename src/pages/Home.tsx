import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { products } from '../data';

export function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=2000&auto=format&fit=crop")',
            transform: 'scale(1.05)' // For slight parallax feel if we animate
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-transparent"></div>
          <div className="absolute inset-0 bg-obsidian-950/30 backdrop-blur-[2px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[11px] uppercase tracking-[0.6em] text-silver-400 mb-6">Winter 2024 Collection</span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-light italic text-white drop-shadow-2xl"
          >
            Darkness<br/>Refined.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-xl text-silver-400 text-sm leading-relaxed mb-6 font-light italic"
          >
            Where high-end streetwear meets precision tailoring. An exploration of silhouette, texture, and the luxury born from shadow.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 mt-10"
          >
            <Link to="/shop" className="group relative px-10 py-4 bg-white text-obsidian-950 font-bold tracking-[0.3em] uppercase text-[10px] overflow-hidden transition-all hover:bg-silver-300">
              <span className="relative z-10 flex items-center">
                Shop Menswear
              </span>
            </Link>
            <Link to="/lookbook" className="px-10 py-4 border border-white/20 text-white font-medium tracking-[0.3em] uppercase text-[10px] hover:bg-white/5 transition-colors glass-card backdrop-blur-sm">
              Lookbook
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-8 tracking-wide">THE ARCHITECTURE OF SHADOW</h2>
          <p className="text-silver-400 leading-relaxed max-w-2xl mx-auto text-lg">
            Every garment is a study in precision. We blend modernist architectural lines with the raw, uncompromising energy of dark streetwear. This is not just clothing; it is armor for the modern elite.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-obsidian-900/50 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-serif text-3xl text-white tracking-wider">NEW ARRIVALS</h2>
            <Link to="/shop" className="text-silver-400 hover:text-white uppercase tracking-widest text-xs flex items-center transition-colors group">
              View All <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <Link to={`/shop`} className="block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-obsidian-900 mb-6">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {product.hoverImage && (
                      <img 
                        src={product.hoverImage}
                        alt={`${product.name} alternate view`}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="glass-card p-6 absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-white font-serif tracking-wide text-lg mb-1">{product.name}</h3>
                    <p className="text-silver-400 text-sm tracking-widest">${product.price}</p>
                  </div>
                  {/* Default state info */}
                  <div className="group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-silver-200 tracking-wider text-sm mb-1">{product.name}</h3>
                    <p className="text-silver-400 text-xs tracking-widest">${product.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
