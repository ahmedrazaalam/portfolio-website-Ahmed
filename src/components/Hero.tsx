import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MessageCircle, Github, Linkedin, Instagram } from 'lucide-react';
import TypewriterText from './TypewriterText';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-blue-900/40">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)", // blue-500
              "radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)", // cyan-500
              "radial-gradient(circle at 40% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)", // indigo-500
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold block sm:inline">
              Ahmedraza Alam
            </span>{' '}
            👋
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05, ease: "easeOut" }}
            className="text-xl md:text-2xl text-slate-300 mb-4"
          >
            <TypewriterText text="💡 Business Analyst | Data Scientist | AI Researcher" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, ease: "easeOut" }}
            className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming business operations through AI-driven insights and data analytics.
            <br />
            <span className="text-blue-400">
              Business Intelligence | Predictive Analytics | AI Strategy | ROI Optimization | Risk Management
            </span>
          </motion.p>
        </motion.div>

        {/* One-liner pitch box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">🚀 One-Liner Pitch</h2>
            <p className="text-slate-300 leading-relaxed">
              Passionate about turning complex data into practical business insights
              to drive strategic decisions. I help connect AI with real-world value by driving smarter decisions and efficient operations. Currently pursuing 
              Masters in Business Analytics & AI at Nottingham Trent University, UK.
            </p>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-150 flex items-center space-x-2"
          >
            <span>💼 View Projects</span>
            <ArrowRight size={20} />
          </motion.a>

          <motion.a
            href="https://docs.google.com/document/d/1_qjFtGZAy7WjuKV-hRaC0GX6il_uf5NQ3f2SLlmwAjM/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-slate-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors duration-150 flex items-center space-x-2"
          >
            <Download size={20} />
            <span>📄 Download Resume</span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-blue-400/50 text-blue-400 px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-400/10 transition-colors duration-150 flex items-center space-x-2"
          >
            <MessageCircle size={20} />
            <span>📬 Let's Talk</span>
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, ease: "easeOut" }}
          className="flex items-center justify-center space-x-6"
        >
          {[
            { icon: Github, href: 'https://github.com/ahmedrazaalam', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/ahmedraza-alam', label: 'LinkedIn' },
            { icon: Instagram, href: 'https://instagram.com/ahmedraza_alam', label: 'Instagram' }
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="w-12 h-12 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-150"
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
