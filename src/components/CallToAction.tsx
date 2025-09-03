import React from 'react';
import { motion } from 'framer-motion';
import { Download, Linkedin, Github, Mail } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-emerald-900/30 to-slate-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            Let's build something{' '}
            <span className="text-emerald-400 font-medium">amazing</span>{' '}
            together
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I specialize in AI, Data Science, and Business Analytics.  
            Explore my work, view my resume, or connect with me for opportunities and collaborations.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 bg-emerald-400 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-300 transition-all"
          >
            <Download size={22} />
            <span>Download Resume</span>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/alamahmedraza"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:border-emerald-400 transition-all"
          >
            <Linkedin size={22} />
            <span>LinkedIn</span>
          </motion.a>

          <motion.a
            href="https://github.com/ahmedrazaalam"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:border-emerald-400 transition-all"
          >
            <Github size={22} />
            <span>GitHub</span>
          </motion.a>

          <motion.a
            href="mailto:alamahmedraza@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:border-emerald-400 transition-all"
          >
            <Mail size={22} />
            <span>Email Me</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;