import { motion } from 'motion/react';
import { Motorcycle } from '../types';
import { Settings2, Zap, Weight } from 'lucide-react';

export default function MotorcycleCard({ motorcycle }: { motorcycle: Motorcycle; key?: string | number }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="sleek-card group flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={motorcycle.image} 
          alt={motorcycle.name} 
          className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 scale-105 group-hover:scale-100"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-text-dim mb-2">
          {motorcycle.brand} &middot; {motorcycle.category}
        </h3>
        
        <div className="flex justify-between items-baseline mb-4">
          <h4 className="text-xl font-bold text-text-custom uppercase tracking-tight">
            {motorcycle.name}
          </h4>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-accent-custom">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase text-text-dim font-bold">Engine</span>
            <span className="text-sm font-mono text-text-custom">{motorcycle.engine}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] uppercase text-text-dim font-bold">Power</span>
            <span className="text-sm font-mono text-text-custom">{motorcycle.power}</span>
          </div>
        </div>

        <div className="mt-auto">
          <div className="text-lg font-bold text-primary mb-4">
            ${(motorcycle.price / 15000).toLocaleString()}
          </div>
          <button className="w-full bg-accent-custom text-text-custom py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-all duration-300">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
