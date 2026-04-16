'use client';

import { motion } from 'framer-motion';

// --- Static Data ---
const contactDetails = [
  {
    id: 1,
    title: 'Our Clinic',
    desc: '123 Health Boulevard, Medical District, NY 10001',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Email Support',
    desc: 'care@medicare.clinical',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Emergency Phone',
    desc: '+1 (800) MED-CARE',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.89-1.46-5.35-3.92-6.81-6.81l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
];

const footerLinks = {
  resources: ['Patient Portal', 'Support', 'Emergency Info'],
  company: ['About Us', 'Careers', 'Press Kit'],
  legal: ['Privacy Policy', 'Terms of Service'],
};

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const formVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function ContactAndFooter() {
  return (
    <>
      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left side: Content & Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
                Get in <span className="italic text-teal-600">Touch</span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-gray-500 text-base leading-relaxed mb-12 max-w-md">
                Have questions about our services or need to reschedule? Our patient support team is available 24/7 to assist you.
              </motion.p>

              <div className="flex flex-col gap-8">
                {contactDetails.map((detail) => (
                  <motion.div key={detail.id} variants={itemVariants} className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-teal-600 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      {detail.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1">{detail.title}</h4>
                      <p className="text-sm text-gray-500">{detail.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side: Form Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={formVariants}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-teal-900/5 border border-gray-100 relative z-10"
            >
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">Quick Inquiry</h3>
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">First Name</label>
                    <input type="text" placeholder="John" className="bg-gray-50 border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-teal-500 outline-none transition-all placeholder:text-gray-300" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Last Name</label>
                    <input type="text" placeholder="Doe" className="bg-gray-50 border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-teal-500 outline-none transition-all placeholder:text-gray-300" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Inquiry Type</label>
                  <select className="bg-gray-50 border-none rounded-xl px-4 py-3.5 text-sm text-gray-600 focus:ring-2 focus:ring-teal-500 outline-none transition-all appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Book Appointment</option>
                    <option>Billing Question</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Message</label>
                  <textarea rows={4} placeholder="How can we help?" className="bg-gray-50 border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-teal-500 outline-none transition-all resize-none placeholder:text-gray-300"></textarea>
                </div>

                <button type="button" className="mt-4 w-full bg-teal-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-teal-600/20 hover:bg-teal-700 hover:shadow-teal-700/30 transition-all duration-300 transform active:scale-[0.98]">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            
            {/* Brand/Logo Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="text-teal-600">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" />
                  </svg>
                </div>
                <span className="font-serif text-2xl font-semibold text-gray-900 tracking-wide">
                  MediCare
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                Leading the future of clinical care with empathetic technology and human expertise. 
              </p>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-[10px] font-bold tracking-widest text-gray-900 uppercase mb-5">Resources</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                {footerLinks.resources.map(link => (
                  <li key={link}><a href="#" className="hover:text-teal-600 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-bold tracking-widest text-gray-900 uppercase mb-5">Company</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                {footerLinks.company.map(link => (
                  <li key={link}><a href="#" className="hover:text-teal-600 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold tracking-widest text-gray-900 uppercase mb-5">Legal</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                {footerLinks.legal.map(link => (
                  <li key={link}><a href="#" className="hover:text-teal-600 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Copyright Row */}
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-8 gap-4">
            <p className="text-xs text-gray-400">
              © 2024 MediCare Clinical Editorial. All rights reserved.
            </p>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-teal-600 transition-colors">
                {/* Simple Social Icon (Twitter/X style) */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-teal-600 transition-colors">
                {/* LinkedIn style */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}