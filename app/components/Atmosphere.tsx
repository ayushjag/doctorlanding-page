'use client';

import { motion } from 'framer-motion';

// --- Static Data ---
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop', // Large Lobby
    alt: 'Modern Clinic Waiting Area',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop', // Lab/Tech
    alt: 'Advanced Laboratory Equipment',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop', // Equipment
    alt: 'Treatment Room',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop', // Doctor Patient
    alt: 'Doctor Consultation',
  },
];

// --- Animation Variants ---
// Note: Added `as const` to the ease array to fix the TypeScript error!
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

export default function Atmosphere() {
  return (
    <div className="bg-[#FAFAFA] overflow-hidden">
      {/* --- CLINIC ATMOSPHERE GALLERY --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
            Our Clinic <span className="italic text-teal-600">Atmosphere</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
        >
          {/* Left Large Image */}
          <motion.div
            variants={imageVariants}
            className="md:col-span-6 h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden group shadow-sm"
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>

          {/* Right Column Grid */}
          <div className="md:col-span-6 flex flex-col gap-4 md:gap-6">
            {/* Top Wide Image */}
            <motion.div
              variants={imageVariants}
              className="h-[200px] md:h-[288px] rounded-[2rem] overflow-hidden group shadow-sm"
            >
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </motion.div>

            {/* Bottom Two Images */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 h-[200px] md:h-[288px]">
              <motion.div
                variants={imageVariants}
                className="rounded-[2rem] overflow-hidden group shadow-sm"
              >
                <img
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </motion.div>
              <motion.div
                variants={imageVariants}
                className="rounded-[2rem] overflow-hidden group shadow-sm"
              >
                <img
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- TESTIMONIAL SECTION --- */}
      <section className="relative py-24 px-6">
        {/* Decorative Background Quote SVG */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 17H17L19 13V7H13V13H16L14 17ZM6 17H9L11 13V7H5V13H8L6 17Z" />
          </svg>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          {/* 5 Stars SVG */}
          <div className="flex justify-center gap-1.5 mb-8">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 leading-snug md:leading-tight mb-10">
            "The level of care at MediCare is truly exceptional. From the ease of booking on the app to the thoughtful consultation with Dr. Jenkins, I felt truly heard and cared for."
          </h3>

          {/* Author */}
          <div className="flex flex-col items-center justify-center gap-3 mt-8">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" 
                alt="Samantha Reed" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-gray-900 font-serif">Samantha Reed</p>
              <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1">
                Patient Since 2022
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}