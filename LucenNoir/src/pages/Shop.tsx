import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data';
import { ShoppingBag, ZoomIn } from 'lucide-react';

export function Shop() {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Jackets', 'Pants', 'Sweaters', 'Tees', 'Accessories'];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="w-full min-h-screen pt-12 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white tracking-widest mb-4">COLLECTION</h1>
          <p className="text-silver-400 max-w-2xl mx-auto text-sm tracking-widest uppercase">
            Curated pieces for the uncompromising.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 tracking-widest uppercase text-xs transition-all duration-300 border ${
                activeFilter === category 
                  ? 'border-white text-obsidian-950 bg-white' 
                  : 'border-silver-600 text-silver-300 hover:border-silver-400 hover:text-white glass'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-obsidian-900 mb-6 cursor-pointer">
                   <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {product.hoverImage && (
                    <img 
                      src={product.hoverImage}
                      alt={`${product.name} alternate view`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  )}
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-white text-obsidian-950 text-[10px] font-bold px-3 py-1 tracking-widest uppercase z-10 scale-90">
                      New
                    </div>
                  )}
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-obsidian-950/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="bg-white/10 hover:bg-white text-white hover:text-obsidian-950 w-12 h-12 rounded-full border border-white/20 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                    <button className="bg-white/10 hover:bg-white text-white hover:text-obsidian-950 w-12 h-12 rounded-full border border-white/20 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 delay-75 transform translate-y-4 group-hover:translate-y-0">
                      <ZoomIn className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-silver-200 tracking-wider text-sm mb-1 group-hover:text-white transition-colors">{product.name}</h3>
                    <p className="text-silver-500 text-xs tracking-widest uppercase">{product.category}</p>
                  </div>
                  <span className="text-white tracking-widest text-sm">${product.price}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
