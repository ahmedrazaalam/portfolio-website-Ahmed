import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const techCategories = [
    {
      title: '🤖 AI & Machine Learning',
      color: 'from-blue-400 to-blue-600',
      technologies: [
        { name: 'Python', icon: '🐍' },
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'PyTorch', icon: '🔥' },
        { name: 'Scikit-learn', icon: '📊' },
        { name: 'OpenCV', icon: '👁️' },
        { name: 'Pandas & NumPy', icon: '📈' }
      ]
    },
    {
      title: '📊 Business Intelligence',
      color: 'from-emerald-400 to-emerald-600',
      technologies: [
        { name: 'Power BI', icon: '📊' },
        { name: 'Tableau', icon: '📈' },
        { name: 'SQL & NoSQL', icon: '🗄️' },
        { name: 'Excel Advanced', icon: '📋' },
        { name: 'MongoDB', icon: 'ODB' }
      ]
    },
    {
      title: '⚙️ Analytics Tools',
      color: 'from-purple-400 to-purple-600',
      technologies: [
        { name: 'Jupyter Notebooks', icon: '📓' },
        { name: 'Google Analytics', icon: '📊' },
        { name: 'Node.js', icon: '⚡' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Git & GitHub', icon: '🐙' }
      ]
    },
    {
      title: '💼 Business Skills',
      color: 'from-orange-400 to-orange-600',
      technologies: [
        { name: 'Strategic Planning', icon: '🎯' },
        { name: 'ROI Analysis', icon: '💰' },
        { name: 'Risk Management', icon: '🛡️' },
        { name: 'Market Research', icon: '🔍' },
        { name: 'Project Management', icon: '📋' },
        { name: 'Data Storytelling', icon: '📖' }
      ]
    }
  ];

  return (
    <section id="tech" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            🧱 Tech{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              Stack
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Driving Business Value Through Technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full`}></div>
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + techIndex * 0.1 
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 hover:border-slate-600/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-slate-300 font-medium text-sm">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border border-blue-400/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-slate-300 leading-relaxed">
              The business landscape evolves rapidly, and so do I. I'm constantly exploring new AI technologies, 
              analytics methodologies, and business strategies to deliver maximum ROI and competitive advantage.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;