'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Scan, Brain, Cpu } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Scan',
    icon: Scan,
    description: 'Use the AR Wand tablet app to digitize your workspace in 30 seconds.',
    detail: 'Point, click, done. Our computer vision engine captures spatial data with millimeter precision.',
    color: 'cyan',
  },
  {
    id: 2,
    title: 'Train',
    icon: Brain,
    description: 'Our Generative VLA Model trains a custom policy in the cloud instantly.',
    detail: 'No coding required. Our AI understands your intent and generates optimized motion plans.',
    color: 'cyan',
  },
  {
    id: 3,
    title: 'Deploy',
    icon: Cpu,
    description: 'Push to the Edge Brain. Runs offline on NVIDIA Jetson with zero latency.',
    detail: '100% offline capable. Your robot operates with <10ms response time, guaranteed.',
    color: 'cyan',
  },
];

export const ScrollytellingPipeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={containerRef} className="relative py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            How It <span className="text-cyan-400">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three steps to transform your manufacturing floor. Zero code required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Sticky Text */}
          <div className="space-y-32">
            {steps.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} scrollYProgress={scrollYProgress} />
            ))}
          </div>

          {/* Right: Sticky Visual */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="relative aspect-square glass rounded-2xl p-12 glow-cyan">
              {steps.map((step, index) => (
                <StepVisual
                  key={step.id}
                  step={step}
                  index={index}
                  scrollYProgress={scrollYProgress}
                  totalSteps={steps.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepCardProps {
  step: typeof steps[0];
  index: number;
  scrollYProgress: any;
}

const StepCard: React.FC<StepCardProps> = ({ step, index }) => {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="space-y-6"
    >
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-cyan-400/10 border-2 border-cyan-400 flex items-center justify-center">
          <Icon className="w-8 h-8 text-cyan-400" />
        </div>
        <div className="text-4xl font-mono font-bold text-cyan-400">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      <h3 className="text-4xl font-bold">{step.title}</h3>
      <p className="text-xl text-gray-300">{step.description}</p>
      <p className="text-gray-400">{step.detail}</p>
    </motion.div>
  );
};

interface StepVisualProps {
  step: typeof steps[0];
  index: number;
  scrollYProgress: any;
  totalSteps: number;
}

const StepVisual: React.FC<StepVisualProps> = ({ step, index, scrollYProgress, totalSteps }) => {
  const Icon = step.icon;

  // Calculate opacity based on scroll position
  const start = index / totalSteps;
  const end = (index + 1) / totalSteps;

  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.1), start, end, Math.min(1, end + 0.1)],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, (start + end) / 2, end],
    [0.8, 1, 0.8]
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="relative"
      >
        <div className="w-64 h-64 border-2 border-cyan-400/30 rounded-full flex items-center justify-center">
          <div className="w-48 h-48 border-2 border-cyan-400/50 rounded-full flex items-center justify-center">
            <div className="w-32 h-32 bg-cyan-400/10 rounded-full flex items-center justify-center">
              <Icon className="w-16 h-16 text-cyan-400" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-cyan-400/5 rounded-2xl blur-3xl"
      />
    </motion.div>
  );
};
