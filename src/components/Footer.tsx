import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'Quick Links': [
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Resume', href: '#resume' },
      { name: 'Contact', href: '#contact' }
    ],
    'Technologies': [
      { name: 'React & Next.js', href: '#' },
      { name: 'Node.js & Express', href: '#' },
      { name: 'MongoDB', href: '#' },
      { name: 'IoT & Arduino', href: '#' }
    ],
    'Connect': [
      { name: 'GitHub', href: 'https://github.com/atiqueanwar' },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/atiqueanwar' },
      { name: 'Instagram', href: 'https://instagram.com/atiqueanwar' },
      { name: 'Email', href: 'mailto:atique.anwar@email.com' }
    ]
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center">
                <span className="text-slate-900 font-bold text-xl">A</span>
              </div>
              <div>
                <div className="text-white font-semibold text-xl">Ahmedraza Alam</div>
                <div className="text-slate-400 text-sm">Full-Stack Developer</div>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Crafting intelligent, scalable, and aesthetic web experiences. 
              Bridging the physical and digital worlds through code.
            </p>
            <div className="flex items-center space-x-4">
              {[
                { icon: Github, href: 'https://github.com/atiqueanwar', color: 'hover:text-gray-400' },
                { icon: Linkedin, href: 'https://linkedin.com/in/atiqueanwar', color: 'hover:text-blue-400' },
                { icon: Instagram, href: 'https://instagram.com/atiqueanwar', color: 'hover:text-pink-400' },
                { icon: Mail, href: 'mailto:atique.anwar@email.com', color: 'hover:text-emerald-400' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-slate-400 text-sm mb-4 md:mb-0">
              <span>© 2024 Ahmedraza Alam. Made with</span>
              <Heart className="text-red-400" size={16} />
              <span>and lots of ☕</span>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-slate-400 text-sm">
                Built with React + Vite + Tailwind CSS
              </div>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-emerald-400/10 border border-emerald-400/30 rounded-full flex items-center justify-center text-emerald-400 hover:bg-emerald-400/20 transition-all duration-300"
              >
                <ArrowUp size={18} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Fun Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-8 pt-8 border-t border-slate-800"
        >
          <p className="text-slate-500 text-sm italic">
            "Code is like humor. When you have to explain it, it's bad." - Cory House
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;