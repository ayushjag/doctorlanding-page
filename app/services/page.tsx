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

export default function ServicesPage() {
  return (
    <main className="font-sans bg-[#FAFAFA] min-h-screen pb-10">
      <Navbar />
      
      {/* ================= HERO SECTION ================= */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeUp} className="inline-block mb-6">
            <span className="bg-teal-100 text-teal-700 text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              Our Expertise
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-[1.1] mb-6">
            Healthcare <span className="italic text-gray-600">Redefined</span> <br />
            through Digital Precision.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Experience a new standard of clinical excellence. Our services combine advanced technology with deeply empathetic human care.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= MAIN SERVICES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-6">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Left: General Medicine (Takes 2 columns) */}
          <motion.div variants={fadeUp} className="lg:col-span-2 bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden group">
            {/* Decorative SVG Curve */}
            <div className="absolute top-0 right-0 w-64 h-64 text-[#F4F7F6] pointer-events-none transform translate-x-10 -translate-y-10 group-hover:scale-105 transition-transform duration-700">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="100" cy="0" r="100" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 text-teal-600 mb-6">
                {/* Stethoscope SVG */}
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.99 18.75v-3.75m0 0a4.5 4.5 0 01-4.5-4.5v-3.75h9v3.75a4.5 4.5 0 01-4.5 4.5zM6 6.75h12M4.5 21h15" />
                </svg>
              </div>
              <h2 className="text-3xl font-serif text-gray-900 mb-4">
                <span className="italic">General</span> Medicine & Consultations
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-lg mb-8">
                Comprehensive care for individuals and families, focusing on prevention, diagnosis, and treatment of common illnesses with a holistic perspective.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm text-gray-600 mb-10 max-w-md">
                {['Annual Physicals', 'Chronic Care', 'Immunizations', 'Screenings'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                    {item}
                  </div>
                ))}
              </div>

              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors">
                Explore General Care 
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: Emergency Response (Takes 1 column) */}
          <motion.div variants={fadeUp} className="lg:col-span-1 bg-[#096B5A] rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden shadow-lg shadow-teal-900/10">
            {/* SVG Dot Pattern Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle fill="currentColor" cx="2" cy="2" r="1.5"></circle>
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
              </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-10 h-10 text-white mb-6">
                {/* Siren/Light SVG */}
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-serif italic mb-4">Emergency Response</h2>
              <p className="text-teal-100 text-sm leading-relaxed mb-8 flex-grow">
                Immediate, critical care available 24/7. Our digital triage system ensures priority for life-threatening situations.
              </p>

              <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm mb-6 border border-white/20">
                <p className="text-[10px] font-bold tracking-widest text-teal-200 uppercase mb-1">Average Wait Time</p>
                <p className="text-2xl font-serif italic">8 Minutes</p>
              </div>

              <button className="w-full bg-white text-[#096B5A] font-bold py-3.5 rounded-xl hover:bg-teal-50 transition-colors shadow-md">
                Call Hotline
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SECONDARY SERVICES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1 */}
          <motion.div variants={fadeUp} className="bg-[#F8F9FA] rounded-[1.5rem] p-8 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-teal-600 mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
            </div>
            <h3 className="text-xl font-serif text-gray-900 mb-3 italic">Cardiology</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">Advanced heart screenings, stress tests, and personalized vascular management programs.</p>
            <a href="#" className="text-[10px] font-bold tracking-widest text-teal-600 uppercase hover:text-teal-800 transition-colors">Specialist Profile</a>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUp} className="bg-[#F8F9FA] rounded-[1.5rem] p-8 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-teal-600 mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <h3 className="text-xl font-serif text-gray-900 mb-3 italic">Neurology</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">Diagnostic neuro-imaging and therapeutic plans for neurological health and recovery.</p>
            <a href="#" className="text-[10px] font-bold tracking-widest text-teal-600 uppercase hover:text-teal-800 transition-colors">Learn More</a>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUp} className="bg-[#F8F9FA] rounded-[1.5rem] p-8 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-teal-600 mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>
            </div>
            <h3 className="text-xl font-serif text-gray-900 mb-3 italic">Pediatrics</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">Focused care for the physical, emotional, and social health of children from birth through adolescence.</p>
            <a href="#" className="text-[10px] font-bold tracking-widest text-teal-600 uppercase hover:text-teal-800 transition-colors">Find a Pediatrician</a>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= DIAGNOSTIC LAB ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
          className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Left Image */}
          <motion.div variants={fadeUp} className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" 
              alt="Advanced Laboratory" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
            />
            <h3 className="absolute bottom-6 left-6 right-6 text-white text-2xl font-serif italic z-20">
              The future of clinical diagnostics is here.
            </h3>
          </motion.div>

          {/* Right Content */}
          <motion.div variants={fadeUp} className="p-4 md:pl-8">
            <h2 className="text-3xl font-serif text-gray-900 mb-10">Advanced <span className="italic text-gray-500">Diagnostic</span> Lab</h2>
            
            <div className="flex flex-col gap-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-teal-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a1.5 1.5 0 01-1.5 1.5H6.94c-.882 0-1.782.342-2.458.983a10.553 10.553 0 00-3.232 7.739c0 5.485 5.59 10.025 12.75 10.025 7.16 0 12.75-4.54 12.75-10.025a10.553 10.553 0 00-3.232-7.739c-.676-.641-1.576-.983-2.458-.983h-2.56a1.5 1.5 0 01-1.5-1.5v0z" /></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Genomic Screening</h4>
                  <p className="text-sm text-gray-500">Personalized health insights based on your unique DNA markers.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-teal-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5zM13.5 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5z" /></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Precision Radiology</h4>
                  <p className="text-sm text-gray-500">High-resolution MRI and CT scanning with AI-assisted analysis.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-teal-600 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Rapid Bloodwork</h4>
                  <p className="text-sm text-gray-500">Same-day results for essential panels via our digital portal.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= VIRTUAL CARE CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
          className="bg-[#EAECEE] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="max-w-lg">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              Can't make it <span className="italic text-gray-500">In-Person?</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              Our virtual care platform allows you to consult with top-tier specialists from the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-600 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20">
                Start Virtual Visit
              </button>
              <button className="bg-white text-gray-700 font-bold py-3.5 px-6 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200">
                How it works
              </button>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="w-full md:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-gray-400/20">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop" 
              alt="Telehealth consultation" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= FINAL CTA & FOOTER ================= */}
      <section className="text-center pt-16 pb-24 px-6 border-b border-gray-100">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Ready to prioritize your <span className="italic text-gray-500">Wellness?</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto mb-10">
            Join over 10,000 patients who have chosen a smarter, more personalized way to manage their healthcare journey.
          </p>
          <button className="bg-teal-600 text-white font-bold py-4 px-10 rounded-full hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20">
            Schedule Now
          </button>
        </motion.div>
      </section>

      {/* Footer with Newsletter */}
      <footer className="bg-[#FAFAFA] pt-16 pb-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-teal-600">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" /></svg>
              <span className="font-serif text-xl font-bold text-gray-900 tracking-wide">MediCare</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">Setting the gold standard for clinical care and digital health integration.</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-gray-900 uppercase mb-5">Resources</h4>
            <ul className="flex flex-col gap-3 text-xs text-gray-500">
              <li><a href="#" className="hover:text-teal-600">Patient Portal</a></li>
              <li><a href="#" className="hover:text-teal-600">Support</a></li>
              <li><a href="#" className="hover:text-teal-600">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-gray-900 uppercase mb-5">Legal</h4>
            <ul className="flex flex-col gap-3 text-xs text-gray-500">
              <li><a href="#" className="hover:text-teal-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-600">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-gray-900 uppercase mb-5">Newsletter</h4>
            <p className="text-xs text-gray-500 mb-4">Monthly health insights delivered to your inbox.</p>
            <div className="flex items-center bg-white border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-teal-500 transition-shadow p-1">
              <input type="email" placeholder="email@address.com" className="w-full px-3 py-2 text-xs border-none outline-none" />
              <button className="bg-[#096B5A] text-white p-2 rounded-lg hover:bg-teal-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-8 gap-4 text-xs text-gray-400">
          <p>© 2024 MediCare Clinical Editorial. All rights reserved.</p>
          <div className="flex gap-4">
            <svg className="w-4 h-4 hover:text-teal-600 cursor-pointer" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            <svg className="w-4 h-4 hover:text-teal-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
          </div>
        </div>
      </footer>
    </main>
  );
}