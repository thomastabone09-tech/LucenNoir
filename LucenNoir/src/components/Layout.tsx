import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { motion, AnimatePresence } from 'motion/react';

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-obsidian-950 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#1a1c2c] rounded-full blur-[120px] opacity-40 pointer-events-none z-0 hover:bg-transparent"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-obsidian-800 rounded-full blur-[150px] opacity-30 pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-grow pt-24" // padding to account for fixed nav
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}
