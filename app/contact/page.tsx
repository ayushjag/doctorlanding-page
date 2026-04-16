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

export default function ContactPage() {
  return (
    <main className="font-sans bg-[#FAFAFA] min-h-screen">
      <Navbar />
      
      {/* ================= HERO SECTION ================= */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto md:px-12">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 mb-6 leading-[1.1]">
            Get in <span className="italic text-gray-600">touch</span> with our <br className="hidden md:block"/>
            clinical team.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl">
            Whether you are a healthcare provider seeking to modernize your workflow or a patient with questions, our empathetic team is here to provide authority and care.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= CONTACT CONTENT GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.1 }} 
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6"
        >
          
          {/* ----- LEFT: FORM CARD (Spans 3 cols) ----- */}
          <motion.div variants={fadeUp} className="lg:col-span-3 bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-10">
                Send a <span className="italic">Message</span>
              </h2>

              <form className="flex flex-col gap-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Dr. Julian Reed" 
                      className="bg-[#F0F4F8] border-none rounded-2xl px-5 py-4 text-sm text-gray-800 focus:ring-2 focus:ring-teal-500 outline-none transition-all placeholder:text-gray-400" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="julian@medical.com" 
                      className="bg-[#F0F4F8] border-none rounded-2xl px-5 py-4 text-sm text-gray-800 focus:ring-2 focus:ring-teal-500 outline-none transition-all placeholder:text-gray-400" 
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2 mb-4">
                  <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                    Message
                  </label>
                  <textarea 
                    rows={6} 
                    placeholder="How can we assist you today?" 
                    className="bg-[#F0F4F8] border-none rounded-2xl px-5 py-4 text-sm text-gray-800 focus:ring-2 focus:ring-teal-500 outline-none transition-all placeholder:text-gray-400 resize-none" 
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="button" 
                  className="self-start bg-teal-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-3"
                >
                  Send Message
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>

          {/* ----- RIGHT: DETAILS & MAP (Spans 2 cols) ----- */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Details Card */}
            <motion.div variants={fadeUp} className="bg-[#EEF2F5] rounded-[2rem] p-8 md:p-10 flex-1 border border-gray-100/50">
              <h2 className="text-2xl font-serif text-gray-900 mb-8">
                Clinic <span className="italic">Details</span>
              </h2>
              
              <div className="flex flex-col gap-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-700 shadow-sm shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  </div>
                  <div className="pt-1">
                    <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1.5">Address</p>
                    <p className="text-sm font-medium text-gray-900 leading-tight">1221 Medical Plaza, Suite 400</p>
                    <p className="text-sm text-gray-600 mt-0.5">Rochester, MN 55902</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-700 shadow-sm shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.89-1.46-5.35-3.92-6.81-6.81l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  </div>
                  <div className="pt-1">
                    <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1.5">Phone</p>
                    <p className="text-sm font-medium text-gray-900 leading-tight">+1 (507) 555-0123</p>
                    <p className="text-xs text-gray-400 mt-1">Mon - Fri, 8am - 6pm</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-700 shadow-sm shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  </div>
                  <div className="pt-1">
                    <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1.5">Email</p>
                    <p className="text-sm font-medium text-gray-900 leading-tight">care@medicare-saas.com</p>
                    <p className="text-xs text-gray-400 mt-1">24/7 Support Portal Access</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map / Location Card */}
            <motion.div variants={fadeUp} className="bg-[#78C5B3] rounded-[2rem] overflow-hidden relative h-[240px] group shadow-inner">
              {/* Beautiful 3D Map Pin Placeholder from Unsplash */}
              <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=800&auto=format&fit=crop" 
                alt="Location Pin" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out mix-blend-overlay opacity-90"
              />
              
              {/* Floating Glassmorphism Label */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl flex justify-between items-center shadow-xl shadow-teal-900/10 border border-white">
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-teal-600 uppercase mb-1">Location</p>
                  <p className="text-sm font-bold text-gray-900">Main Medical Hub</p>
                </div>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-500 hover:bg-teal-50 hover:text-teal-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </button>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#FAFAFA] border-t border-gray-100 pt-20 pb-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 pr-8">
            <div className="flex items-center gap-2 mb-6 text-gray-800">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" /></svg>
              <span className="font-serif text-xl font-bold tracking-wide">MediCare</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Defining the future of clinical documentation through empathetic authority and design precision.
            </p>
          </div>
          
          {/* Links: Patient Portal */}
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-gray-800 uppercase mb-6">Patient Portal</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-teal-600 transition-colors">Dashboard</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Appointments</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Records</a></li>
            </ul>
          </div>

          {/* Links: Legal */}
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-gray-800 uppercase mb-6">Legal</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-teal-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Compliance</a></li>
            </ul>
          </div>
          
          {/* Links: Support */}
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-gray-800 uppercase mb-6">Support</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-teal-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors underline underline-offset-4 decoration-gray-300 hover:decoration-teal-600">Contact Support</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200/60 pt-8 gap-4 text-xs text-gray-400">
          <p>© 2024 MediCare Clinical Editorial. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" aria-label="Announcements" className="hover:text-teal-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            </a>
            <a href="#" aria-label="Global" className="hover:text-teal-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </a>
            <a href="#" aria-label="Medical Box" className="hover:text-teal-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2zm-3 9H9v2H7v-2H5v-2h2v-2h2v2h2v2z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}