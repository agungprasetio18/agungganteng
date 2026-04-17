import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MOTORCYCLES } from '../constants';
import { Category } from '../types';
import MotorcycleCard from './MotorcycleCard';

export default function Inventory() {
  const [filter, setFilter] = useState<Category>('All');
  
  const categories: Category[] = ['All', 'Sport', 'Adventure', 'Classic', 'Scooter'];

  const filteredItems = filter === 'All' 
    ? MOTORCYCLES 
    : MOTORCYCLES.filter(item => item.category === filter);

  return (
    <section id="inventory" className="py-24 bg-bg-custom px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="inline-block px-3 py-1 bg-accent-custom text-text-custom text-[9px] font-bold uppercase tracking-widest mb-4 rounded-full">
              Full Inventory
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-custom uppercase tracking-tight">
              AVAILABLE <span className="text-primary">MODELS</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-primary border-primary text-white' 
                    : 'bg-accent-custom border-accent-custom text-text-dim hover:text-text-custom hover:border-text-dim'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((motor) => (
              <MotorcycleCard key={motor.id} motorcycle={motor} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
