import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code, User, Briefcase, FileText, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Tech Stack', href: '#tech', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Resume', href: '#resume', icon: FileText },
    { name: 'Contact', href: '#contact', icon: MessageCircle },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg">A</span>
            </div>
            <span className="text-white font-semibold text-xl">Ahmedraza Alam</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-slate-300 hover:text-blue-400 transition-colors duration-150 text-sm font-medium flex items-center space-x-2"
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-900 px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-800/95 backdrop-blur-xl rounded-2xl mt-4 p-6 border border-slate-700"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 py-3 transition-colors"
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold mt-4 block text-center"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;