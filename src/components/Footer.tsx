import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] sleek-border-top pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-1">
              <span className="text-xl font-black tracking-tighter text-text-custom uppercase">
                Agung<span className="text-primary">Motorsport</span>
              </span>
            </div>
            <p className="text-text-dim text-sm leading-relaxed max-w-xs">
              Official Dealer of Premium Performance Showcasing the world's most elite superbikes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-text-dim hover:text-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-text-dim hover:text-primary transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-text-dim hover:text-primary transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-text-custom font-bold uppercase text-[10px] tracking-widest mb-8">Navigation</h4>
            <ul className="space-y-4 text-text-dim text-xs font-medium uppercase tracking-widest">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#inventory" className="hover:text-primary transition-colors">Inventory</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Service</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-custom font-bold uppercase text-[10px] tracking-widest mb-8">Official</h4>
            <ul className="space-y-4 text-text-dim text-xs font-medium uppercase tracking-widest">
              <li><a href="#" className="hover:text-primary transition-colors">Legal Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-custom font-bold uppercase text-[10px] tracking-widest mb-8">Newsletter</h4>
            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full bg-accent-custom border border-accent-custom px-4 py-3 text-white text-[10px] focus:outline-none focus:border-primary transition-colors"
                />
                <button className="absolute right-2 top-1.5 bg-primary text-white px-3 py-1.5 text-[10px] font-bold uppercase hover:brightness-110 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-accent-custom pt-12">
          <p className="text-text-dim text-[10px] uppercase font-bold tracking-widest">
            &copy; 2026 Agung Motorsport. Jakarta, Indonesia.
          </p>
          <p className="text-text-dim text-[10px] uppercase font-bold tracking-widest">
            Official Dealer of Premium Performance
          </p>
        </div>
      </div>
    </footer>
  );
}
