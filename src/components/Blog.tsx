import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'AI & Data Science in Entertainment Industry',
      excerpt: 'Exploring how Artificial Intelligence and Machine Learning are reshaping the film industry with smart solutions.',
      date: '2025-01-20',
      readTime: '5 min read',
      category: 'AI/ML',
      color: 'from-blue-400 to-cyan-500',
      image: '🎬',
      link: 'https://www.linkedin.com/posts/ahmedraza-alam_datascience-filmindustry-aiinentertainment-activity-7343695591870246912-IkJ1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGgxhgBBxTz94OpMAJhldU1W6QpvbKthQs'
    },
    {
      title: 'Becoming a Data Scientist in Gen Z Era',
      excerpt: 'Sharing insights as a data scientist and member of Generation Z — balancing innovation, learning, and adaptability.',
      date: '2025-01-15',
      readTime: '6 min read',
      category: 'Career',
      color: 'from-emerald-400 to-teal-500',
      image: '🧑‍💻',
      link: 'https://www.linkedin.com/posts/ahmedraza-alam_as-a-data-scientist-and-a-member-of-generation-activity-7340871920457781248-gXr4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGgxhgBBxTz94OpMAJhldU1W6QpvbKthQs'
    },
    {
      title: 'Machine Learning & AI – Key Insights',
      excerpt: 'Breaking down how AI and machine learning principles are driving modern data science applications.',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'Data Science',
      color: 'from-purple-400 to-pink-500',
      image: '🤖',
      link: 'https://www.linkedin.com/posts/ahmedraza-alam_ai-machinelearning-datascience-activity-7341086121403060224-xPVr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGgxhgBBxTz94OpMAJhldU1W6QpvbKthQs'
    },
    {
      title: 'Artificial Intelligence in Everyday Life',
      excerpt: 'An overview of how AI is transforming industries and daily experiences, from automation to decision-making.',
      date: '2025-02-01',
      readTime: '5 min read',
      category: 'Artificial Intelligence',
      color: 'from-orange-400 to-red-500',
      image: '🌍',
      link: 'https://www.linkedin.com/posts/ahmedraza-alam_artificialintelligence-datascience-machinelearning-activity-7360301085623828480-ZtFe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGgxhgBBxTz94OpMAJhldU1W6QpvbKthQs'
    }
  ];    


  return (
    <section className="py-32 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            ✍️ Blog &{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              Articles
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Sharing insights, learnings, and experiences from my journey in tech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-300 group cursor-pointer block"
            >
              {/* Post Header */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${post.color} rounded-2xl flex items-center justify-center text-3xl`}>
                  {post.image}
                </div>
                <div className={`px-3 py-1 bg-gradient-to-r ${post.color} bg-opacity-20 rounded-full`}>
                  <span className="text-sm font-medium text-white">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Post Meta */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-slate-400 text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-emerald-400 group-hover:text-white transition-colors"
                >
                  <span className="text-sm font-medium">Read More</span>
                  <ArrowRight size={16} />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 border border-emerald-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <BookOpen className="text-emerald-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-semibold text-white mb-4">
              More Articles Coming Soon
            </h3>
            <p className="text-slate-300 mb-6">
              I regularly share insights about web development, IoT projects, AI experiments, 
              and lessons learned from building real-world applications.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300"
            >
              Subscribe for Updates
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;