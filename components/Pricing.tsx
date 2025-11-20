'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Button } from './Button';
import { Check, Zap, Building2, Rocket } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Starter',
    price: '$500',
    period: '/mo',
    description: 'Perfect for pilot programs and single-cell automation',
    icon: Zap,
    features: [
      '1 Robot License',
      'AR Wand Tablet App',
      'Cloud Training Credits (100/mo)',
      'Edge Brain Runtime',
      'Email Support',
      'Basic Analytics',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$2,500',
    period: '/mo',
    description: 'For growing operations with multiple work cells',
    icon: Building2,
    features: [
      'Up to 10 Robot Licenses',
      'Unlimited AR Wand Users',
      'Cloud Training Credits (1,000/mo)',
      'Priority Edge Updates',
      'Slack Support (24hr SLA)',
      'Advanced Analytics & Dashboards',
      'Custom VLA Fine-tuning',
      'Fleet Management Console',
    ],
    cta: 'Book Demo',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For factories and OEMs deploying at scale',
    icon: Rocket,
    features: [
      'Unlimited Robot Licenses',
      'On-Premise Edge Brain Deployment',
      'Unlimited Cloud Training',
      'Dedicated Solutions Engineer',
      'Phone & Slack Support (1hr SLA)',
      'Custom Integration Services',
      'SLA & Uptime Guarantees',
      'White-label Options',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-cyan-400">Robotics-as-a-Service</span> Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No upfront CAPEX. No expensive integrators. Pay only for what you use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-cyan-400 text-zinc-900 px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <GlassCard
                  className={`h-full flex flex-col p-8 ${
                    tier.popular ? 'border-2 border-cyan-400 glow-cyan' : ''
                  }`}
                  hover={false}
                >
                  {/* Header */}
                  <div className="mb-8">
                    <div className="w-12 h-12 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-gray-400 text-sm">{tier.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold font-mono text-cyan-400">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-gray-400 ml-2">{tier.period}</span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-4">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button
                    variant={tier.popular ? 'primary' : 'outline'}
                    size="lg"
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold mb-4">All Plans Include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                '99.99% Edge Runtime Uptime SLA',
                'Zero-downtime Updates',
                'Hardware-Agnostic Compatibility',
                'Sim-to-Real Physics Guarantees',
                'SOC 2 Type II Compliance',
                'GDPR & Data Residency Controls',
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
