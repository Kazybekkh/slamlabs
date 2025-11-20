'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Sparkles, Puzzle, RefreshCw, Wifi } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Generative AI, Not Scripts',
    description: 'We solve goals, we don\'t follow if-then code. Our VLA model reasons about the task and generates adaptive solutions in real-time.',
    icon: Sparkles,
    size: 'large',
    color: 'cyan',
  },
  {
    id: 2,
    title: 'Hardware Agnostic',
    description: 'Works with KUKA, UR, FANUC, ABB, and any ROS-compatible robot.',
    icon: Puzzle,
    size: 'small',
    color: 'cyan',
    logos: ['KUKA', 'UR', 'FANUC'],
  },
  {
    id: 3,
    title: 'Sim-to-Real',
    description: 'Zero-shot transfer with physics guarantees. What works in simulation works on your factory floor.',
    icon: RefreshCw,
    size: 'small',
    color: 'cyan',
  },
  {
    id: 4,
    title: 'Edge Native',
    description: '100% Offline capable. Runs on NVIDIA Jetson with <10ms latency. No cloud dependency.',
    icon: Wifi,
    size: 'medium',
    color: 'cyan',
  },
];

export const FeatureGrid: React.FC = () => {
  return (
    <section id="product" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Built for <span className="text-cyan-400">Production</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade robotics platform that scales from prototype to production.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {/* Large Card - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2 md:row-span-2"
          >
            <GlassCard className="h-full flex flex-col justify-between p-8 md:p-12">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  Generative AI, Not Scripts
                </h3>
                <p className="text-lg text-gray-400">
                  We solve goals, we don't follow if-then code. Our VLA model reasons about the task and generates adaptive solutions in real-time.
                </p>
              </div>

              {/* Animated Visualization */}
              <div className="mt-8 relative h-48 md:h-64">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-xl blur-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                      className="w-24 h-24 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full mx-auto"
                    />
                    <p className="text-cyan-400 font-mono text-sm">Goal-Oriented Reasoning</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Small Card - Hardware Agnostic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1"
          >
            <GlassCard className="h-full p-8">
              <div className="w-12 h-12 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mb-4">
                <Puzzle className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Hardware Agnostic</h3>
              <p className="text-gray-400 mb-6">
                Works with KUKA, UR, FANUC, ABB, and any ROS-compatible robot.
              </p>
              <div className="flex flex-wrap gap-2">
                {['KUKA', 'UR', 'FANUC'].map((logo) => (
                  <span
                    key={logo}
                    className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Small Card - Sim-to-Real */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <GlassCard className="h-full p-8">
              <div className="w-12 h-12 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Sim-to-Real</h3>
              <p className="text-gray-400">
                Zero-shot transfer with physics guarantees. What works in simulation works on your factory floor.
              </p>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="mt-6 w-16 h-16 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full mx-auto"
              />
            </GlassCard>
          </motion.div>

          {/* Medium Card - Edge Native */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <GlassCard className="h-full p-8">
              <div className="w-12 h-12 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Edge Native</h3>
              <p className="text-gray-400 mb-6">
                100% Offline capable. Runs on NVIDIA Jetson with &lt;10ms latency. No cloud dependency.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Latency</span>
                  <span className="text-cyan-400 font-mono">&lt;10ms</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Uptime</span>
                  <span className="text-cyan-400 font-mono">99.99%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Cloud Dependency</span>
                  <span className="text-green-400 font-mono">0%</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
