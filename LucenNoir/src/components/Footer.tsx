import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-obsidian-950 border-t border-silver-100/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <div className="font-serif text-3xl tracking-[0.2em] text-white flex items-center mb-6">
              LUCEN<span className="mx-1 text-silver-400 inline-block transform -scale-x-100 font-light">N</span>OIR
            </div>
            <p className="text-silver-400 max-w-sm mb-8 text-sm leading-relaxed">
              Darkness refined. High-end menswear blending cinematic tailoring with modern architectural silhouettes.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-silver-400 hover:text-white transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-silver-400 hover:text-white transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-silver-400 hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif tracking-widest mb-6">SHOP</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-silver-400 hover:text-white text-sm transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop" className="text-silver-400 hover:text-white text-sm transition-colors">Outerwear</Link></li>
              <li><Link to="/shop" className="text-silver-400 hover:text-white text-sm transition-colors">Ready to Wear</Link></li>
              <li><Link to="/shop" className="text-silver-400 hover:text-white text-sm transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif tracking-widest mb-6">THE HOUSE</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-silver-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/lookbook" className="text-silver-400 hover:text-white text-sm transition-colors">Lookbook</Link></li>
              <li><Link to="/contact" className="text-silver-400 hover:text-white text-sm transition-colors">Client Services</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-silver-100/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-silver-500 text-xs tracking-widest mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LUCENNOIR. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 text-silver-500 text-xs tracking-widest">
            <Link to="#" className="hover:text-silver-300 transition-colors">PRIVACY</Link>
            <Link to="#" className="hover:text-silver-300 transition-colors">TERMS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
