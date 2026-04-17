import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg-custom px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <div className="inline-block px-3 py-1 bg-accent-custom text-text-custom text-[9px] font-bold uppercase tracking-widest mb-4 rounded-full">
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-custom uppercase tracking-tight mb-8">
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent-custom rounded-full flex items-center justify-center text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-text-custom font-bold uppercase text-[10px] tracking-widest mb-1">Jakarta Showroom</h4>
                <p className="text-text-dim text-sm leading-relaxed">
                  Jl. Raya Motorsport No. 101, <br />
                  Jakarta Selatan, Indonesia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent-custom rounded-full flex items-center justify-center text-primary">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-text-custom font-bold uppercase text-[10px] tracking-widest mb-1">Phone</h4>
                <p className="text-text-dim text-sm leading-relaxed">+62 (21) 500-AGUNG</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 bg-card-custom border border-accent-custom p-8 md:p-12 rounded-lg">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-dim">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-accent-custom border border-accent-custom px-4 py-3 text-text-custom text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-dim">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-accent-custom border border-accent-custom px-4 py-3 text-text-custom text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-text-dim">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-accent-custom border border-accent-custom px-4 py-3 text-text-custom text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="I'm interested in..."
              />
            </div>

            <button className="w-full bg-primary text-white py-4 text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-primary/20">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
