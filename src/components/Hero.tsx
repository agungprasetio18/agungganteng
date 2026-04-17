import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full flex items-center bg-bg-custom pt-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <span className="inline-block px-4 py-1 bg-accent-custom text-text-custom text-[10px] font-bold uppercase tracking-widest mb-6 rounded-full">
            Limited Edition 2026
          </span>
          <h1 className="text-6xl md:text-[72px] font-extrabold text-text-custom leading-[0.95] uppercase tracking-tight mb-6">
            UNLEASH <br /> 
            <span className="">THE POWER</span>
          </h1>
          <p className="max-w-[440px] text-text-dim text-lg md:text-xl leading-relaxed mb-8">
            Experience precision engineering and raw power. Agung Motorsport brings the world's most elite superbikes to your doorstep.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-10 py-4 text-sm font-bold uppercase tracking-widest shadow-xl shadow-primary/20"
            >
              Explore Models
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-[400px] md:h-[500px] w-full bg-gradient-to-br from-accent-custom to-black rounded-lg border border-accent-custom flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-5 whitespace-nowrap">
            <span className="text-[120px] font-black text-white select-none">RACING RED</span>
          </div>
          <div 
            className="w-4/5 h-3/5 bg-primary opacity-80 blur-[2px]" 
            style={{ clipPath: 'polygon(10% 80%, 40% 80%, 50% 20%, 90% 20%, 95% 40%, 80% 85%, 20% 85%)' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
