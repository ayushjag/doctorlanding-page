'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useNavbarPresenter } from './Navbar.presenter';

export default function Navbar() {
  const { navItems, isScrolled, isMobileMenuOpen, toggleMobileMenu } = useNavbarPresenter();

  return (
    <>
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

          {/* Desktop CTA */}
          <Link href="/#contact" className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:bg-teal-700 transition-colors"
            >
              Book Appointment
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-gray-900"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl z-40 md:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6">
              {/* Mobile Links */}
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={toggleMobileMenu}
                    className="text-lg font-medium text-gray-700 hover:text-teal-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <Link href="/#contact" onClick={toggleMobileMenu} className="mt-8">
                <button className="w-full bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-teal-700 transition-colors">
                  Book Appointment
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMobileMenu}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
