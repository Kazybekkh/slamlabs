'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Documentation', 'API Reference'],
    Company: ['About', 'Blog', 'Careers', 'Press Kit'],
    Resources: ['Case Studies', 'Tutorials', 'Community', 'Support'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance'],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-mono font-bold text-2xl text-cyan-400">
                SLAM-Kit.ai
              </h3>
              <p className="text-gray-400 max-w-sm">
                The No-Code, Edge-Native brain for industrial robots. From scan to action in 60 seconds.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-bold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-500 text-sm">
            © 2024 SLAM-Kit.ai. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
              Status
            </a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
              Changelog
            </a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
              v1.0.0
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
