import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Shield, Users, Palette, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Deepfake Audio Detection System',
      description:'Built a machine learning model to detect AI-generated audio using the ASVspoof dataset. Designed to identify voice cloning with high accuracy and provide real-time classification for secure applications',
      icon: Zap,
      color: 'from-orange-400 to-red-500',
      tech: ['Python', 'TensorFlow', 'Audio Processing', 'Machine Learning'],
      image: '🎵',
      github: 'https://github.com/ahmedrazaalam/deepfake-audio-detection',
      demo: '#',
      status: 'Completed'
    },
    {
      title: 'Deepfake Video Detection Suite',
      description: 'Developing a computer vision project that verifies video authenticity. Uses deep learning models to spot manipulated frames and supports integration into security workflows.',
      icon: Shield,
      color: 'from-purple-400 to-pink-500',
      tech: ['Python','Deep Learning', 'API Development'],
      image: '🎬',
      github: 'https://github.com/ahmedrazaalam/deepfake-video-detection',
      status: 'Completed'
    },
    {
      title: 'Business Intelligence Dashboard',
      description: 'AI-powered analytics platform that transforms raw business data into actionable insights. Increased decision-making speed by 60% with predictive modeling and automated reporting.',
      icon: Users,
      color: 'from-blue-400 to-cyan-500',
      tech: ['Python', 'Power BI', 'Machine Learning', 'Predictive Analytics', 'Data Visualization'],
      image: '📊',
      github: '#',
      demo: '#',
      status: 'Completed'
    },
    {
    title: "Capstone Project – E-commerce Delivery Prediction (2025)",
    description:
      "Developed machine learning models to predict on-time vs. delayed deliveries. Performed EDA and feature engineering to extract meaningful patterns. Evaluated models with classification metrics and built a Power BI dashboard to visualize delivery trends and provide actionable insights for logistics optimization.",
    icon: TrendingUp,
    color: "from-emerald-400 to-teal-500",
    tech: ["Python", "EDA", "Feature Engineering", "Classification", "Power BI"],
    image: "📦",
    github: "https://github.com/ahmedrazaalam/Capstone-project-BIA-", // replace with your GitHub link
    demo: "#",   // replace with your dashboard/demo link if any
    status: "Completed",
  },
  ];

  return (
    <section id="projects" className="py-32 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            🛠️ Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              Projects
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Business Impact Through AI - Each project demonstrates measurable ROI and strategic value
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: index * 0.01, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-150 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-3xl`}>
                    {project.image}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' ? 'bg-emerald-400/20 text-emerald-400' :
                      project.status === 'In Progress' ? 'bg-orange-400/20 text-orange-400' :
                      'bg-blue-400/20 text-blue-400'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                </div>
                <project.icon className="text-slate-400 group-hover:text-white transition-colors" size={24} />
              </div>

              {/* Project Description */}
              <p className="text-slate-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex items-center space-x-4">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 text-slate-300 px-4 py-2 rounded-full hover:border-slate-600/50 hover:text-white transition-all duration-150"
                >
                  <Github size={16} />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.demo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-150`}
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.05, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Ahmedrazaalam"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-150"
          >
            <Github size={24} />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;