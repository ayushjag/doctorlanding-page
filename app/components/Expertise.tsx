'use client';

import { motion, easeOut } from 'framer-motion';

// --- Static Data ---
const services = [
  {
    id: 1,
    title: 'General Consultation',
    description: 'Expert diagnostic services for common illnesses and preventive health checkups.',
    linkText: 'Learn more',
    isEmergency: false,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Dental Care',
    description: 'Advanced dental treatments ranging from routine cleaning to complex orthodontics.',
    linkText: 'Learn more',
    isEmergency: false,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Cardiology',
    description: 'Heart health monitoring, specialized cardiac tests, and surgical consultations.',
    linkText: 'Learn more',
    isEmergency: false,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Emergency Care',
    description: '24/7 Immediate medical attention for critical and life-threatening conditions.',
    linkText: 'Call Now',
    isEmergency: true,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  },
};

// --- Component ---
export default function Expertise() {
  return (
    <section id="services" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-lg">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-teal-600 uppercase mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight"
            >
              Comprehensive <br />
              <span className="italic text-gray-500">Healthcare</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-md md:text-right text-base leading-relaxed"
          >
            We provide a wide range of medical services tailored to your individual needs, ensuring the best care possible.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Icon Container */}
              <div 
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300
                  ${service.isEmergency 
                    ? 'bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white' 
                    : 'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white'
                  }`}
              >
                {service.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              {/* Action Link */}
              <a 
                href="#" 
                className={`inline-flex items-center gap-2 text-sm font-bold transition-colors
                  ${service.isEmergency ? 'text-red-500' : 'text-teal-600'}
                `}
              >
                {service.linkText}
                <motion.span 
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  {service.isEmergency ? '!' : '→'}
                </motion.span>
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}