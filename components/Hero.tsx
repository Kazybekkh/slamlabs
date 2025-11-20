'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const companyLogos = ['KUKA', 'FANUC', 'ABB', 'UR', 'NVIDIA'];

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              From Scan to Action in{' '}
              <span className="text-cyan-400 font-mono">60 Seconds</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-400 leading-relaxed"
            >
              The first <span className="text-white">No-Code</span>, <span className="text-white">Edge-Native</span> brain for industrial robots.
              <br />
              <span className="text-cyan-400">Stop coding. Start automating.</span>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg">
                Book Demo <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg">
                <Play className="mr-2" size={20} /> Watch Video
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div variants={itemVariants} className="pt-8">
              <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">
                Trusted by innovative manufacturers
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                {companyLogos.map((logo) => (
                  <div
                    key={logo}
                    className="text-gray-600 font-mono text-lg hover:text-gray-400 transition-colors"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square">
              {/* Animated Background Rings */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute inset-0 border-2 border-cyan-400/20 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute inset-8 border-2 border-cyan-400/30 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute inset-16 border-2 border-cyan-400/40 rounded-full"
              />

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="glass rounded-2xl p-8 glow-cyan"
                >
                  <div className="text-center space-y-4">
                    <div className="text-6xl font-mono font-bold text-cyan-400">60s</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">
                      Setup Time
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -30, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-10 right-10 glass rounded-lg p-4 text-xs font-mono text-cyan-400"
              >
                Scan
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 30, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute bottom-10 left-10 glass rounded-lg p-4 text-xs font-mono text-cyan-400"
              >
                Train
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
                className="absolute top-1/2 left-0 glass rounded-lg p-4 text-xs font-mono text-cyan-400"
              >
                Deploy
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
