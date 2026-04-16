'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useNavbarPresenter } from './Navbar.presenter';

export default function Navbar() {
  const { navItems, isScrolled } = useNavbarPresenter();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-teal-600">
            {/* SVG Star/Cross Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" />
            </svg>
          </div>
          <span className="font-serif text-2xl font-semibold text-gray-900 tracking-wide">
            MediCare
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {navItems.map((item) => (
            <Link key={item.id} href={item.href} className="hover:text-teal-600 transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link href="/#contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:bg-teal-700 transition-colors"
          >
            Book Appointment
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
}