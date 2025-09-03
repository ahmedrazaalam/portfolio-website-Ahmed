import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Hi Ahmed,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nYou can reach me at: ${formData.email}`
    );

    // Opens email draft in default client (Gmail, Outlook, etc.)
    window.location.href = `mailto:alamahmedraza@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alamahmedraza@gmail.com',
      href: 'mailto:alamahmedraza@gmail.com',
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+44 07776937902',
      href: 'tel:+4407776937902',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nottingham, UK',
      href: '#',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ahmedrazaalam',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/alamahmedraza',
      color: 'hover:text-blue-400'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/ahmedraza',
      color: 'hover:text-pink-400'
    }
  ];

  return (
    <section id="contact" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            📬 Let's{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              Connect
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hello? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
              <h3 className="text-3xl font-semibold text-white mb-8 flex items-center space-x-3">
                <MessageSquare className="text-blue-400" size={32} />
                <span>Send a Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-emerald-400 focus:outline-none transition-colors"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-900 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center`}>
                      <contact.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">{contact.label}</div>
                      <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Follow Me
              </h3>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 bg-slate-700/50 border border-slate-600 rounded-xl flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* WhatsApp Quick Connect */}
            <motion.a
              href="https://wa.me/919892466226"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-3xl hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="font-semibold text-lg">Quick WhatsApp</div>
                  <div className="text-green-100">Instant reach-out</div>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;