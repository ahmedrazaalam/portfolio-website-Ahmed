import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MessageSquare, 
  Users, 
  BookOpen, 
  Camera,
  Mic,
  Globe,
  Award,
  Zap,
  Heart
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Camera,
      title: 'Real-time Recognition',
      description: 'Advanced AI recognizes sign language gestures through your webcam in real-time'
    },
    {
      icon: MessageSquare,
      title: 'Voice & Text Translation',
      description: 'Convert speech to sign language and vice versa with our intelligent translation engine'
    },
    {
      icon: Users,
      title: 'Community Learning',
      description: 'Connect with others, share knowledge, and build an inclusive communication network'
    },
    {
      icon: BookOpen,
      title: 'Interactive Lessons',
      description: 'Gamified learning experience with progressive difficulty and achievement tracking'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Support for ASL, BSL, ISL and other regional sign languages worldwide'
    },
    {
      icon: Award,
      title: 'Progress Tracking',
      description: 'Track your learning progress with detailed analytics and milestone achievements'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 dark:from-indigo-400/5 dark:to-purple-400/5" />
        
        <div className="relative container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Bridge Every Conversation
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Revolutionary AI-powered sign language translation that connects the hearing and deaf communities through technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/translator"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Translating
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/learn"
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700"
              >
                Learn Sign Language
              </Link>
            </div>
          </motion.div>

          {/* Demo Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Camera className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-xl font-semibold">Live Demo</p>
                  <p className="text-sm opacity-90">Real-time sign language translation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              Powerful Features for Everyone
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with inclusive design to make sign language accessible to all
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-indigo-200">Active Users</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white"
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-indigo-200">Sign Languages</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white"
            >
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-indigo-200">Accuracy Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-red-500" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              Join the Movement
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Be part of creating a more inclusive world where communication barriers don't exist. Start your journey with sign language today.
            </p>
            <Link
              to="/community"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Join Our Community
              <Users className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;