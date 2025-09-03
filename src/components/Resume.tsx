import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, Calendar, MapPin, Mail, Phone, Linkedin, Github, Layers, BookOpen } from 'lucide-react';

const Resume = () => {
  const achievements = [
    {
      title: 'GitHub Contributions',
      description: '500+ commits this year',
      icon: Github,
      color: 'from-gray-400 to-gray-600'
    },
    {
      title: 'Data Science & GenAI',
      description: 'Certified by Boston Institute of Analytics',
      icon: Award,
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Tableau & Power BI',
      description: 'Data visualization & dashboards',
      icon: Award,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Python & ML Internships',
      description: 'Completed OASIS & Sparks Foundation programs',
      icon: Award,
      color: 'from-green-400 to-green-600'
    }
  ];
  const education = [
    {
      degree: 'MSc. Business Analytics & Artificial Intelligence (Pursuing)',
      institution: 'Nottingham Trent University',
      period: '2025 - 2026',
      location: 'Nottingham, UK',
      description: 'Focused on advanced analytics, AI applications, and business decision-making through data-driven insights.'
    },
    {
      degree: 'BSc. Computer Science',
      institution: 'University of Mumbai',
      period: '2022 - 2025',
      location: 'Mumbai, India',
      description: 'Specialized in data science, machine learning, and software development with strong academic performance.'
    }
  ];
  const projects = [
    {
      title: 'Deepfake Video Detection',
      period: '2025',
      description: 'Implemented detection using Torch & FaceForensics with 88%+ accuracy. Applied facial artifact & frequency analysis.',
      link: 'https://github.com/ahmedrazaalam/deepfake-video-detection'
    },
    {
      title: 'Capstone – E-commerce Delivery Prediction',
      period: '2025',
      description: 'Developed ML models to predict delivery timeliness. Built Power BI dashboards for actionable insights.',
      link: 'https://github.com/ahmedrazaalam/Capstone-project-BIA-'
    },
    {
      title: 'Deepfake Audio Detection',
      period: '2024',
      description: 'Built CNN/RNN models on ASV Spoof dataset, deployed Flask app, achieved 90%+ accuracy.',
      link: 'https://github.com/ahmedrazaalam/Deepfake-Audio-Detection'
    }
  ];

  const publication = {
    title: 'Research Paper – Deepfake Analysis',
    period: '2024',
    description: 'Published at Shodh-Anveshan. Researched AI-generated media threats, built robust detection algorithms, proposed improvements.',
    link: 'https://drive.google.com/file/d/1-xt2y7e51GJVvSpk_KlmMY2XUjJf_69l/view?usp=sharing'
  };

  const voluntary = [
    {
      title: 'College Fest Contingent Leader',
      period: '2023',
      description: 'Led college team, won multiple inter-college trophies, managed cultural & technical events with strategy and teamwork.'
    },
    {
      title: 'Freelancer – Corporate Events',
      period: '2022 - 2024',
      description: 'Worked at Disney Expo, Comic Con; event coordination, audience engagement, seamless execution.'
    }
  ];

  const experience = [
    {
      title: 'Data Science Intern',
      company: 'The Sparks Foundation',
      period: '2024',
      location: 'Remote',
      description: 'Developed machine learning models for business intelligence and data analysis. Worked on predictive analytics and data visualization projects.'
    },
    {
      title: 'Python Developer Intern',
      company: 'OASIS Infobyte',
      period: '2024',
      location: 'Remote',
      description: 'Built Python applications and automation scripts. Gained experience in web development and database management.'
    }
  ];

  const skills = [
    'Python','Machine Learning','GenAI','Neural Networks','SQL',
    'Excel','Statistics','Power BI','Tableau','Data Visualization',
    'Communication','Leadership','Problem-Solving','Critical Thinking','Time Management'
  ];


  return (
    <section id="resume" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            📄 Resume &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            A comprehensive overview of my professional journey and accomplishments
          </p>
          
          <motion.a
            href="https://docs.google.com/document/d/1_qjFtGZAy7WjuKV-hRaC0GX6il_uf5NQ3f2SLlmwAjM/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            <Download size={24} />
            <span>Download Full Resume</span>
          </motion.a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mail, label: 'Email', value: 'alamahmedraza@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+44 07776937902' },
              { icon: MapPin, label: 'Location', value: 'Nottingham, UK' },
              { icon: Linkedin, label: 'LinkedIn', value: 'https://linkedin.com/in/alamahmedraza' }
            ].map((contact, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-400/10 rounded-full flex items-center justify-center">
                  <contact.icon className="text-emerald-400" size={20} />
                </div>
                <div>
                  <div className="text-slate-400 text-sm">{contact.label}</div>
                  <div className="text-white font-medium">{contact.value}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-semibold text-white text-center mb-12">
            🎖️ Highlights & Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center hover:border-slate-600/50 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl mb-4`}>
                  <achievement.icon className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-slate-400 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-semibold text-white mb-8 flex items-center space-x-3">
              <Linkedin className="text-emerald-400" size={32} />
              <span>Experience</span>
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">
                        {exp.title}
                      </h4>
                      <div className="text-emerald-400 font-medium mb-2">
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-right text-sm text-slate-400">
                      <div className="flex items-center space-x-1 mb-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-3xl font-semibold text-white mb-8 flex items-center space-x-3">
              <Award className="text-cyan-400" size={32} />
              <span>Education</span>
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">
                        {edu.degree}
                      </h4>
                      <div className="text-cyan-400 font-medium mb-2">
                        {edu.institution}
                      </div>
                    </div>
                    <div className="text-right text-sm text-slate-400">
                      <div className="flex items-center space-x-1 mb-1">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-semibold text-white mb-8 flex items-center space-x-3">
            <Layers className="text-emerald-400" size={32} />
            <span>Projects</span>
          </h3>
          <div className="space-y-8">
            {projects.map((proj, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-semibold text-white">{proj.title}</h4>
                  <span className="text-slate-400 text-sm">{proj.period}</span>
                </div>
                <p className="text-slate-300 mb-2">{proj.description}</p>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-emerald-400 text-sm hover:underline">View Code</a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Publication */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-semibold text-white mb-8 flex items-center space-x-3">
            <BookOpen className="text-cyan-400" size={32} />
            <span>Publication</span>
          </h3>
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
            <h4 className="text-xl font-semibold text-white mb-2">{publication.title}</h4>
            <span className="text-slate-400 text-sm">{publication.period}</span>
            <p className="text-slate-300 mb-2">{publication.description}</p>
            <a href={publication.link} target="_blank" rel="noopener noreferrer" className="text-emerald-400 text-sm hover:underline">View Paper</a>
          </div>
        </motion.div>

        {/* Voluntary Work */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-semibold text-white mb-8">🤝 Voluntary & Cultural Highlights</h3>
          <div className="space-y-8">
            {voluntary.map((vol, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-semibold text-white">{vol.title}</h4>
                  <span className="text-slate-400 text-sm">{vol.period}</span>
                </div>
                <p className="text-slate-300">{vol.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <h3 className="text-3xl font-semibold text-white mb-8">⚡ Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="bg-slate-800/70 border border-slate-700/50 text-slate-300 px-4 py-2 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default Resume;