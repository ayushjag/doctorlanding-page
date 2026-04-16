'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar.view';
import ContactAndFooter from '../components/ContactAndFooter';

// --- Shared Animation Constants ---
const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export default function GalleryPage() {
  return (
    <main className="font-sans bg-[#FAFAFA] min-h-screen pb-10">
      <Navbar />
      
      {/* ================= HERO SECTION ================= */}
      <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
            Our <span className="italic text-gray-500">Clinical</span> Environments
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            A curated look inside our state-of-the-art facilities, where precision meets empathy in every corner of patient care.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= BENTO GALLERY GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }} 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Row 1, Left: Large Reception (Spans 8 cols) */}
          <motion.div variants={fadeUp} className="md:col-span-8 group relative rounded-[2rem] overflow-hidden shadow-sm aspect-[16/9] md:aspect-auto md:h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10 opacity-80" />
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop" 
              alt="Reception" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <span className="text-[10px] font-bold tracking-widest text-teal-300 uppercase mb-2 block">Facility</span>
              <h3 className="text-2xl md:text-3xl font-serif text-white italic">The Wellness Center Reception</h3>
            </div>
          </motion.div>

          {/* Row 1, Right: Tech Device (Spans 4 cols) */}
          <motion.div variants={fadeUp} className="md:col-span-4 bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col group h-[400px]">
            <div className="flex-1 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800&auto=format&fit=crop" 
                alt="Diagnostic Tech" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
            <div className="p-6 bg-white z-10">
              <span className="text-[10px] font-bold tracking-widest text-teal-600 uppercase mb-1 block">Diagnostic Tech</span>
              <h3 className="text-sm font-bold text-gray-900">Precision Laser Systems</h3>
            </div>
          </motion.div>

          {/* Row 2 & 3, Left: Tall Portrait Image (Spans 4 cols, 2 rows high) */}
          <motion.div variants={fadeUp} className="md:col-span-4 md:row-span-2 relative rounded-[2rem] overflow-hidden shadow-sm group h-[500px] md:h-[100%] min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=800&auto=format&fit=crop" 
              alt="Our Team" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-white/90 backdrop-blur text-[10px] font-bold tracking-widest text-teal-700 uppercase px-4 py-2 rounded-full shadow-sm">
                Meet Our Team
              </span>
            </div>
          </motion.div>

          {/* Row 2, Middle Right: Small Screen Image (Spans 4 cols) */}
          <motion.div variants={fadeUp} className="md:col-span-4 bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col group h-[280px]">
            <div className="flex-1 overflow-hidden bg-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                alt="Recovery Suites" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
            <div className="p-5 bg-white z-10">
              <h3 className="text-base font-serif italic text-gray-800">Private Recovery Suites</h3>
            </div>
          </motion.div>

          {/* Row 2, Far Right: Brain Image (Spans 4 cols) */}
          <motion.div variants={fadeUp} className="md:col-span-4 bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col group h-[280px]">
            <div className="flex-1 overflow-hidden bg-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop" 
                alt="Advanced Imaging" 
                className="w-full h-full object-cover opacity-90 transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
            <div className="p-5 bg-white z-10">
              <h3 className="text-base font-serif italic text-gray-800">Advanced Imaging</h3>
            </div>
          </motion.div>

          {/* Row 3, Bottom Right wide: Surgery Room (Spans 8 cols) */}
          <motion.div variants={fadeUp} className="md:col-span-8 rounded-[2rem] overflow-hidden shadow-sm group h-[300px] md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1200&auto=format&fit=crop" 
              alt="Surgery Room" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>

        </motion.div>
      </section>

      {/* ================= CALL TO ACTION SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }} 
          variants={fadeUp}
          className="bg-gradient-to-br from-[#EEF4F6] to-[#E2EAEF] rounded-[3rem] p-12 md:p-20 text-center shadow-inner relative overflow-hidden"
        >
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 blur-3xl rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-6 leading-tight">
              Experience the <span className="italic text-gray-500">Difference</span> in Person
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10">
              Schedule a facility tour or book your first consultation with our award-winning medical team today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="w-full sm:w-auto bg-teal-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-all duration-300 transform hover:-translate-y-0.5">
                Schedule a Tour
              </button>
              <button className="w-full sm:w-auto bg-white/60 backdrop-blur-md text-gray-700 font-bold py-3.5 px-8 rounded-xl border border-white/50 hover:bg-white transition-all duration-300">
                View Patient Services
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#FAFAFA] border-t border-gray-100 pt-16 pb-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-gray-800">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" /></svg>
              <span className="font-serif text-xl font-bold tracking-wide">MediCare</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Setting the standard for editorial medical excellence through technology and human-centric design.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-gray-800 uppercase mb-5">Explore</h4>
            <ul className="flex flex-col gap-3 text-xs text-gray-500">
              <li><a href="#" className="hover:text-teal-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-gray-800 uppercase mb-5">Patient Portal</h4>
            <ul className="flex flex-col gap-3 text-xs text-gray-500">
              <li><a href="#" className="hover:text-teal-600 transition-colors">Find a Doctor</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors underline underline-offset-4 decoration-gray-300 hover:decoration-teal-600">Patient Portal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-gray-800 uppercase mb-5">Contact</h4>
            <ul className="flex flex-col gap-4 text-xs text-gray-500">
              <li><a href="#" className="hover:text-teal-600 transition-colors">Support</a></li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>122 Clinical Way, Boston MA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200/60 pt-8 gap-4 text-xs text-gray-400">
          <p>© 2024 MediCare Clinical Editorial. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" aria-label="Website" className="hover:text-teal-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </a>
            <a href="#" aria-label="Email" className="hover:text-teal-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
            <a href="#" aria-label="Share" className="hover:text-teal-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}