'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar.view';
import ContactAndFooter from '../components/ContactAndFooter';

// --- Shared Animation Constants ---
const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

// --- Sub-components ---

function AboutHero() {
  return (
    <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="max-w-lg"
        >
          <motion.span variants={fadeUp} className="text-[10px] font-bold tracking-widest text-teal-600 uppercase mb-6 block">
            Established 1994
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-[1.1] mb-8">
            The <span className="italic text-gray-500">Clinical</span> <br />
            Authority in <br />
            Human Health.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-600 text-base leading-relaxed">
            MediCare is more than a SaaS provider; we are the bridge between advanced diagnostic precision and the warmth of patient-centered care.
          </motion.p>
        </motion.div>

        {/* Right Graphic/Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 aspect-[4/3] shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop" 
            alt="Advanced Clinical Technology" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-teal-500/20 blur-[80px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="pb-20 max-w-7xl mx-auto px-6 md:px-12">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="relative bg-[#EEF2F4] rounded-[2.5rem] p-10 md:p-20 overflow-hidden"
      >
        {/* Background Watermark SVG (Briefcase/Cross) */}
        <div className="absolute -right-10 -bottom-10 md:right-10 md:-bottom-20 text-white/50 pointer-events-none">
          <svg className="w-64 h-64 md:w-96 md:h-96" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2zm-3 9H9v2H7v-2H5v-2h2v-2h2v2h2v2z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl">
          <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-8 block">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-snug md:leading-tight mb-10">
            "To redefine the standard of medical care through <span className="italic text-teal-600">empathetic technology</span>, ensuring every diagnosis is a step toward a more human-centric future."
          </h2>
          <p className="text-sm text-gray-500">
            — Dr. Elias Vance, Founder & Chief Medical Officer
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function CoreValues() {
  const values = [
    {
      id: 1,
      title: 'Absolute Integrity',
      desc: 'We operate with the precision of a surgeon and the transparency of a clear lens. Data ethics is our baseline.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 008.38 21.05a.75.75 0 00.6-.15c2.78-2.22 5.02-4.99 6.52-8.19a.75.75 0 00-.67-1.07H11.5v-3.5h3.04a.75.75 0 00.73-.56c.35-1.46.54-3.02.54-4.63 0-.27 0-.54-.01-.81a.75.75 0 00-.47-.63l-2.82-1.35zM9.5 13v-1.5h-2v1.5h2zm4-3H11V8.5h2.5V10z" clipRule="evenodd" />
          <path d="M9.75 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Radical Empathy',
      desc: 'Beyond the charts, we see the person. Every feature we build starts with a human problem that needs solving.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Clinical Innovation',
      desc: 'Status quo is the enemy of recovery. We push the boundaries of what health-tech can achieve daily.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09l2.846.813-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mb-12"
      >
        <h2 className="text-4xl font-serif text-gray-900">
          Core <span className="italic text-gray-500">Values</span>
        </h2>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {values.map((val) => (
          <motion.div key={val.id} variants={fadeUp} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-50 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-8">
              {val.icon}
            </div>
            <h3 className="text-xl font-serif italic text-gray-900 mb-4">{val.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Team() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
      {/* Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
      >
        <div className="max-w-lg">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">
            The <span className="italic text-gray-500">Clinical</span> Collective
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            A multi-disciplinary team of practitioners, data scientists, and designers working at the intersection of health and digital intelligence.
          </p>
        </div>
        <a href="#" className="inline-flex items-center text-[10px] font-bold tracking-widest text-teal-600 uppercase hover:text-teal-700 transition-colors">
          Join Our Team
        </a>
      </motion.div>

      {/* Grid */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        {/* Large Card (Spans 2 columns) */}
        <motion.div variants={fadeUp} className="md:col-span-2 group cursor-pointer">
          <div className="w-full aspect-[4/3] md:aspect-video rounded-[2rem] overflow-hidden mb-5 bg-gray-100 relative shadow-sm">
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200&auto=format&fit=crop" 
              alt="Dr. Sarah Jensen" 
              className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000 ease-out"
            />
          </div>
          <div className="flex justify-between items-start px-2">
            <div>
              <h3 className="text-xl font-serif italic text-gray-900 mb-1">Dr. Sarah Jensen</h3>
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Head of Diagnostics</p>
            </div>
            <svg className="w-5 h-5 text-gray-300 group-hover:text-teal-600 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </motion.div>

        {/* Small Card 1 */}
        <motion.div variants={fadeUp} className="md:col-span-1 group cursor-pointer">
          <div className="w-full aspect-square rounded-[2rem] overflow-hidden mb-5 bg-gray-100 relative shadow-sm">
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop" 
              alt="Marcus Thorne" 
              className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000 ease-out"
            />
          </div>
          <div className="px-2">
            <h3 className="text-xl font-serif text-gray-900 mb-1">Marcus Thorne</h3>
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Chief Tech Officer</p>
          </div>
        </motion.div>

        {/* Small Card 2 */}
        <motion.div variants={fadeUp} className="md:col-span-1 group cursor-pointer">
          <div className="w-full aspect-square rounded-[2rem] overflow-hidden mb-5 bg-gray-100 relative shadow-sm">
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" 
              alt="Amina Qureshi" 
              className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000 ease-out"
            />
          </div>
          <div className="px-2">
            <h3 className="text-xl font-serif text-gray-900 mb-1">Amina Qureshi</h3>
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Patient Advocacy</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="font-sans bg-gray-50">
      <Navbar />
      <AboutHero />
      <Mission />
      <CoreValues />
      <Team />
      <ContactAndFooter />
    </main>
  );
}
