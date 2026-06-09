import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, CustomIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Lookbook', path: '/lookbook' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-silver-200 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop Links (Left) */}
        <div className="hidden md:flex space-x-8 w-1/3">
          {navLinks.slice(0, 2).map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-[10px] font-medium text-silver-300 hover:text-white relative group tracking-[0.3em] uppercase"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-silver-200 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Logo (Center) */}
        <Link to="/" className="flex flex-col items-center justify-center w-1/3 group">
          <div className="font-serif text-2xl tracking-[0.5em] text-metallic flex items-center font-light">
            LUCEN
            {/* Mirrored N symbol integrated */}
            <span className="mx-1 text-silver-300 group-hover:text-white transition-colors inline-block transform -scale-x-100 font-light">N</span>
            OIR
          </div>
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent via-silver-400 to-transparent mt-1"></div>
        </Link>

        {/* Desktop Links & Cart (Right) */}
        <div className="hidden md:flex items-center justify-end space-x-8 w-1/3">
           {navLinks.slice(2).map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-[10px] font-medium text-silver-300 hover:text-white relative group tracking-[0.3em] uppercase"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-silver-200 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <button className="text-silver-300 hover:text-white transition-colors relative group">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-2 bg-silver-200 text-obsidian-950 text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
          </button>
        </div>

        {/* Mobile Cart Toggle */}
        <button className="md:hidden text-silver-300 hover:text-white transition-colors relative">
          <ShoppingBag className="w-6 h-6" />
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 bg-obsidian-950/95 backdrop-blur-xl z-50 flex flex-col pt-24 px-8"
          >
            <button 
              className="absolute top-6 right-6 text-silver-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col space-y-8 text-center mt-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl tracking-widest text-silver-200 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto mb-12 text-center text-silver-400 text-xs tracking-widest uppercase">
              Darkness Refined
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
