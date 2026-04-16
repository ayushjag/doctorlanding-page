'use client';

import { motion } from 'framer-motion';

// --- Static Data ---
const specialists = [
  {
    id: 1,
    name: 'Dr. Sarah Jenkins',
    role: 'SENIOR CARDIOLOGIST',
    // Premium placeholder images from Unsplash
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
    buttonText: 'Book Dr. Jenkins',
  },
  {
    id: 2,
    name: 'Dr. Marcus Thorne',
    role: 'NEUROLOGY EXPERT',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
    buttonText: 'Book Dr. Thorne',
  },
  {
    id: 3,
    name: 'Dr. Elena Rodriguez',
    role: 'PEDIATRIC SURGEON',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop',
    buttonText: 'Book Dr. Rodriguez',
  },
];

// --- Slower, On-Scroll Animation Variants ---
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } // Slow, smooth ease
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Slower stagger between cards
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } 
  },
};

// --- Component ---
export default function Specialists() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section - Triggers when 20% in view */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headerVariants}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Meet Our <span className="italic text-teal-600">Specialists</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Our team of world-class physicians combines expertise with a compassionate approach to patient care.
          </p>
        </motion.div>

        {/* Specialists Grid - Triggers when 20% in view */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {specialists.map((doc) => (
            <motion.div 
              key={doc.id}
              variants={cardVariants}
              className="group flex flex-col items-center"
            >
              {/* Image Container with Hover Effect */}
              <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 mb-6 relative shadow-sm">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-1000 ease-out"
                />
              </div>

              {/* Text & Button Content */}
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-1">
                {doc.name}
              </h3>
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-5">
                {doc.role}
              </p>
              
              <button className="bg-gray-50 text-gray-700 hover:bg-teal-600 hover:text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 shadow-sm">
                {doc.buttonText}
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}