import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Brain, Zap, Target, Code2 } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'MSc. Business Analytics & AI',
      subtitle: 'Nottingham Trent University, UK (2025)',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Brain,
      title: 'BSc. Computer Science',
      subtitle: 'CGPA: 8.6 Overall | 9.3 Final Semester',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: Target,
      title: 'Data Science & AI Certification',
      subtitle: 'Boston Institute of Analytics',
      color: 'from-emerald-400 to-emerald-600'
    },

    {
      icon: Code2,
      title: 'Research Paper',
      subtitle: 'Deepfakes Detection System',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Briefcase,
      title: 'Event Coordinator',
      subtitle: 'Corporate Events & University Programs',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Cultural Team Leader',
      subtitle: 'Multiple Trophies | Academics + Creative Balance',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            👨‍💻 About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              Me
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Your Origin Story
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
              <h3 className="text-3xl font-semibold text-white mb-6">
                From Data to Business Impact
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                From analyzing complex datasets to delivering actionable business insights, I transform 
                raw data into <span className="text-blue-400 font-semibold">strategic value</span>. 
                Currently pursuing Masters in Business Analytics & AI at Nottingham Trent University, 
                with expertise in predictive modeling and AI-driven decision making.
              </p>
              <p className="text-slate-300 leading-relaxed">
                My approach combines technical AI expertise with business acumen to deliver solutions 
                that drive measurable ROI. I specialize in identifying opportunities where AI can 
                optimize operations, reduce costs, and create competitive advantages.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: 0.02, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                🔍 Quick Snapshot
              </h3>
              <div className="space-y-4">
                {[
                  '🎓 MSc. Business Analytics & AI | Nottingham Trent University, UK',
                  '🏆 BSc. Computer Science | CGPA: 8.6 Overall, 9.3 Final Semester',
                  '📜 Data Science & AI Certified | Boston Institute of Analytics',
                  '📊 Predictive Analytics & Business Intelligence Specialist',
                  '🤖 Deepfake Detection - Protecting Business Authenticity',
                  '💼 Cultural Team Leader | Multiple Trophies',
                  '🚀 Event Coordinator | Corporate Events & University Programs'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15, delay: index * 0.01, ease: "easeOut" }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.08, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-semibold text-white text-center mb-12">
            Key Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.02, ease: "easeOut" }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-150"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${highlight.color} rounded-xl mb-4`}>
                  <highlight.icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-slate-400">
                  {highlight.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;