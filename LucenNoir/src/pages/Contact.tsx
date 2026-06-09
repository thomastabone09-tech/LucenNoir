import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <div className="w-full min-h-screen pt-24 pb-32 px-6 flex items-center relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 item-center">
        
        {/* Left Col - Info */}
        <div className="flex flex-col justify-center space-y-12 pr-0 md:pr-12">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl text-white tracking-[0.15em] mb-6"
            >
              CLIENT SERVICES
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-silver-400 font-light leading-relaxed max-w-md text-sm"
            >
              For inquiries regarding private appointments, bespoke tailoring, or existing orders, please reach out to our dedicated concierge.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-6">
              <Mail className="w-5 h-5 text-silver-300 mt-1" />
              <div>
                <h4 className="text-white text-xs tracking-widest uppercase mb-1">Email</h4>
                <p className="text-silver-400 text-sm">concierge@lucennoir.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <Phone className="w-5 h-5 text-silver-300 mt-1" />
              <div>
                 <h4 className="text-white text-xs tracking-widest uppercase mb-1">Phone</h4>
                 <p className="text-silver-400 text-sm">+1 (800) 555-0199</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <MapPin className="w-5 h-5 text-silver-300 mt-1" />
              <div>
                 <h4 className="text-white text-xs tracking-widest uppercase mb-1">Atelier</h4>
                 <p className="text-silver-400 text-sm leading-relaxed">
                   742 Shadowline Ave.<br/>
                   Design District<br/>
                   New York, NY 10012
                 </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Col - Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass-card p-10 md:p-14 relative z-20 shadow-2xl shadow-obsidian-900/50 border border-silver-100/10">
            <h3 className="font-serif text-2xl text-white tracking-widest mb-8 text-center">SEND INQUIRY</h3>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-transparent border-b border-silver-600 focus:border-white py-3 text-white placeholder-transparent focus:outline-none transition-colors peer"
                  placeholder="Name"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-3 text-silver-500 text-xs tracking-widest uppercase transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-white peer-valid:-top-4 peer-valid:text-[10px] pointer-events-none"
                >
                  Full Name
                </label>
              </div>

               <div className="relative group">
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-transparent border-b border-silver-600 focus:border-white py-3 text-white placeholder-transparent focus:outline-none transition-colors peer"
                  placeholder="Email"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-3 text-silver-500 text-xs tracking-widest uppercase transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-white peer-valid:-top-4 peer-valid:text-[10px] pointer-events-none"
                >
                  Email Address
                </label>
              </div>

               <div className="relative group">
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-silver-600 focus:border-white py-3 text-white placeholder-transparent focus:outline-none transition-colors peer resize-none"
                  placeholder="Message"
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-0 top-3 text-silver-500 text-xs tracking-widest uppercase transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-white peer-valid:-top-4 peer-valid:text-[10px] pointer-events-none"
                >
                  Your Message
                </label>
              </div>

              <button 
                type="submit"
                className="w-full bg-white text-obsidian-950 font-medium tracking-widest uppercase text-xs py-4 hover:bg-silver-200 transition-colors mt-8"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
