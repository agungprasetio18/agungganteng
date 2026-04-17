import { motion } from 'motion/react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-custom/90 backdrop-blur-md sleek-border-bottom px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-1"
        >
          <span className="text-2xl font-black tracking-tighter text-text-custom uppercase">
            Agung<span className="text-primary">Motorsport</span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
          <a href="#" className="text-text-custom hover:text-primary transition-opacity">Home</a>
          <a href="#inventory" className="text-text-custom opacity-70 hover:opacity-100 hover:text-primary transition-all">Inventory</a>
          <a href="#about" className="text-text-custom opacity-70 hover:opacity-100 hover:text-primary transition-all">About</a>
          <a href="#contact" className="text-text-custom opacity-70 hover:opacity-100 hover:text-primary transition-all">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className="text-text-custom/70 hover:text-primary">
            <Search size={20} />
          </button>
          <button className="text-text-custom/70 hover:text-primary relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center text-white">0</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4 text-center uppercase tracking-widest text-sm"
        >
          <a href="#" onClick={() => setIsOpen(false)} className="text-white">Home</a>
          <a href="#inventory" onClick={() => setIsOpen(false)} className="text-white/70">Inventory</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-white/70">About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-white/70">Contact</a>
        </motion.div>
      )}
    </nav>
  );
}
