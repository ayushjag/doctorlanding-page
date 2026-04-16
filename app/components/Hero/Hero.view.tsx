'use client';

import { motion } from 'framer-motion';
import { useHeroPresenter } from './Hero.presenter';

export default function Hero() {
  const { stats } = useHeroPresenter();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-gray-50/90 z-10" />
        {/* Replace with your actual clinic background image */}
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
          alt="Clinic Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center mt-7">
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gray-200 shadow-sm mb-6"
        >
          <span className="text-xs font-semibold text-gray-600">Trusted by 10,000+ patients</span>
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-5 h-5 rounded-full bg-teal-100 border-2 border-white flex items-center justify-center text-[10px] text-teal-700 font-bold">
                +
              </div>
            ))}
          </div>
        </motion.div>

        {/* Headlines */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 leading-tight"
        >
          Your <span className="italic text-teal-600 font-serif">Health</span>, Our <br className="hidden md:block"/> Priority
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Book appointments, consult expert doctors, and manage your health seamlessly—all in one place with our next-generation clinical workspace.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto bg-teal-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-all">
            Book Appointment
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-gray-700 hover:bg-white/50 transition-all">
            <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
              ▶
            </span>
            Watch How It Works
          </button>
        </motion.div>
      </div>

      {/* Floating Dashboard Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl mt-16 mx-auto"
      >
        <div className="bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8">
          {/* Mockup Sidebar */}
          <div className="w-full md:w-48 flex flex-col gap-4 border-r border-gray-100 pr-4 hidden md:flex">
             <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-4"></div>
             <div className="text-xs font-bold text-teal-600 tracking-wider">■ DASHBOARD</div>
             <div className="text-xs font-medium text-gray-400">□ Schedule</div>
             <div className="text-xs font-medium text-gray-400">□ Patients</div>
          </div>

          {/* Mockup Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-800">Good Morning, Dr. Smith</h3>
                <p className="text-xs text-gray-400 mt-1">Today is October 24th, 2024</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-50 flex flex-col justify-between">
                  <span className="text-[10px] font-bold text-gray-400 mb-2">{stat.label}</span>
                  <span className={`text-3xl font-bold ${stat.colorClass}`}>{stat.value}</span>
                </div>
              ))}
            </div>
            
            {/* Fake progress bars */}
            <div className="mt-6 bg-white p-4 rounded-xl shadow-sm border border-gray-50">
               <div className="h-2 w-1/3 bg-teal-100 rounded mb-3"></div>
               <div className="h-2 w-full bg-gray-100 rounded mb-2"></div>
               <div className="h-2 w-4/5 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}