'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { X, Check } from 'lucide-react';

const comparisonData = [
  {
    category: 'Setup Time',
    oldWay: 'Weeks of downtime',
    slamKit: '60-second setup',
  },
  {
    category: 'Cost',
    oldWay: '$1,500/day integrator costs',
    slamKit: '$500/mo subscription',
  },
  {
    category: 'Flexibility',
    oldWay: 'Brittle hardcoded logic',
    slamKit: 'Adaptive AI reasoning',
  },
  {
    category: 'Expertise Required',
    oldWay: 'Robotics PhDs',
    slamKit: 'Anyone with a tablet',
  },
  {
    category: 'Downtime on Changes',
    oldWay: 'Re-program from scratch',
    slamKit: 'Re-scan in 30 seconds',
  },
  {
    category: 'Scalability',
    oldWay: 'Linear cost per robot',
    slamKit: 'Deploy to fleet instantly',
  },
];

export const Comparison: React.FC = () => {
  return (
    <section id="solutions" className="py-32 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The Old Way vs. <span className="text-cyan-400">SLAM-Kit</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Traditional robotics integration is broken. We've built something better.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Old Way Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-32">
              <div className="bg-red-950/20 border border-red-500/30 rounded-xl p-8 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-300">The Old Way</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Expensive, inflexible, and requires specialized expertise
                </p>
              </div>

              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={`old-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-red-950/10 border border-red-500/20 rounded-lg p-6"
                  >
                    <div className="text-xs uppercase tracking-wider text-red-400 mb-2">
                      {item.category}
                    </div>
                    <div className="text-lg text-gray-300">{item.oldWay}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SLAM-Kit Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-32">
              <div className="bg-cyan-950/20 border border-cyan-400/30 rounded-xl p-8 mb-6 glow-cyan">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400">SLAM-Kit</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Fast, affordable, and accessible to everyone
                </p>
              </div>

              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={`new-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-cyan-950/10 border border-cyan-400/30 rounded-lg p-6 hover:bg-cyan-950/20 transition-all"
                  >
                    <div className="text-xs uppercase tracking-wider text-cyan-400 mb-2">
                      {item.category}
                    </div>
                    <div className="text-lg text-white font-medium">{item.slamKit}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: '10x', label: 'Faster Deployment' },
            { value: '90%', label: 'Cost Reduction' },
            { value: '0', label: 'Code Required' },
          ].map((stat, index) => (
            <GlassCard key={index} className="text-center p-8">
              <div className="text-5xl font-mono font-bold text-cyan-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
