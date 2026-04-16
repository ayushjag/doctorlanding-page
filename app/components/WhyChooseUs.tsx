'use client';

import { motion, easeInOut } from 'framer-motion';

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, staggerChildren: 0.2 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } 
  },
};

// Sticker Entrance Animation
const stickerVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -20 },
  visible: (custom: { rotate: number }) => ({
    opacity: 1,
    scale: 1,
    rotate: custom.rotate,
    transition: { 
      type: "spring" as const, 
      stiffness: 100, 
      damping: 15
    }
  })
};

// Continuous Floating Animation (applied after entrance)
const floatAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: easeInOut
  }
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 bg-teal-50 overflow-hidden flex items-center justify-center min-h-[60vh]">
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        {/* --- FLOATING SVG STICKERS (Hidden on small mobile for clean view) --- */}
        
        {/* Top Left Sticker: Heart/Care */}
        <motion.div 
          custom={{ rotate: -12 }}
          variants={stickerVariants}
          className="hidden md:flex absolute -top-12 -left-24 lg:-left-40 bg-white p-4 rounded-3xl shadow-xl shadow-teal-900/5 items-center justify-center border border-teal-100"
        >
          <motion.div animate={floatAnimation} style={{ animationDelay: '0s' }}>
            <svg className="w-10 h-10 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Top Right Sticker: Sparkle/Excellence */}
        <motion.div 
          custom={{ rotate: 15 }}
          variants={stickerVariants}
          className="hidden md:flex absolute top-4 -right-20 lg:-right-32 bg-white p-3 rounded-full shadow-xl shadow-teal-900/5 items-center justify-center border border-teal-100"
        >
          <motion.div animate={floatAnimation} transition={{ delay: 1 }}>
            <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Bottom Left Sticker: Shield/Trust */}
        <motion.div 
          custom={{ rotate: 8 }}
          variants={stickerVariants}
          className="hidden md:flex absolute -bottom-16 -left-16 lg:-left-24 bg-white p-4 rounded-2xl shadow-xl shadow-teal-900/5 items-center justify-center border border-teal-100"
        >
          <motion.div animate={floatAnimation} transition={{ delay: 0.5 }}>
            <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Bottom Right Sticker: Clock/24-7 */}
        <motion.div 
          custom={{ rotate: -10 }}
          variants={stickerVariants}
          className="hidden md:flex absolute -bottom-8 -right-24 lg:-right-40 bg-white p-4 rounded-3xl shadow-xl shadow-teal-900/5 items-center justify-center border border-teal-100"
        >
          <motion.div animate={floatAnimation} transition={{ delay: 1.5 }}>
            <svg className="w-9 h-9 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </motion.div>
        </motion.div>

        {/* --- MAIN TEXT CONTENT --- */}
        <motion.span 
          variants={textVariants}
          className="text-sm font-bold tracking-widest text-teal-600 uppercase mb-6 block"
        >
          Why Choose MediCare
        </motion.span>
        
        <motion.h2 
          variants={textVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight mb-8"
        >
          Healthcare that entirely <br className="hidden md:block" />
          <span className="italic text-gray-500">revolves around you.</span>
        </motion.h2>

        <motion.p 
          variants={textVariants}
          className="text-gray-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          We’ve reimagined the clinic experience with state-of-the-art technology, deeply empathetic staff, and a calming environment designed for your absolute peace of mind.
        </motion.p>

      </motion.div>
    </section>
  );
}