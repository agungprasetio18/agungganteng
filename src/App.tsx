/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Inventory from './components/Inventory';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Features/Stats Bar */}
        <section className="bg-red-600 py-12 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            {[
              { label: 'Authorized Dealer', value: 'DUCATI · BMW · HONDA' },
              { label: 'Financing Available', value: 'LOW INTEREST RATES' },
              { label: 'Worldwide Shipping', value: 'DOOR-TO-DOOR SERVICE' },
              { label: 'Certified Service', value: 'EXPERT MECHANICS' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <span className="block text-[10px] font-black uppercase tracking-widest text-black/40 mb-1 italic">
                  {stat.label}
                </span>
                <span className="block text-xl font-black text-white italic tracking-tight italic">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        <Inventory />
        
        {/* About Section */}
        <section id="about" className="py-24 bg-black px-6 border-y border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/5] relative z-10 overflow-hidden skew-x-[-2deg]">
                <img 
                  src="https://images.unsplash.com/photo-1595155731313-5f7bd22c7430?q=80&w=800&auto=format&fit=crop" 
                  alt="Showroom" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 aspect-video bg-red-600 z-0 hidden lg:block" />
              <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 z-20 hidden lg:block">
                <span className="writing-mode-vertical-rl rotate-180 text-[100px] font-black text-white/5 uppercase tracking-tighter select-none">
                  LEGACY
                </span>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.4em] block italic">
                Our Story
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
                BUILT ON <span className="text-red-600">PASSION</span> & PRECISION.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Di Agung Motorsport, kami tidak hanya menjual motor. Kami memberikan kunci menuju kebebasan. 
                Dengan pengalaman lebih dari 15 tahun di industri otomotif, kami telah membantu ribuan pengendara 
                menemukan partner perjalanan sejati mereka.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-white font-black text-4xl italic mb-2 tracking-tighter">15+</h4>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-white font-black text-4xl italic mb-2 tracking-tighter">5k+</h4>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Happy Riders</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
