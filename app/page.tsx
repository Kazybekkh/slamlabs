'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { GridBackground } from '@/components/GridBackground';
import { Hero } from '@/components/Hero';
import { ScrollytellingPipeline } from '@/components/ScrollytellingPipeline';
import { FeatureGrid } from '@/components/FeatureGrid';
import { Comparison } from '@/components/Comparison';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Grid Pattern */}
      <GridBackground />

      {/* Fixed Navbar */}
      <Navbar />

      {/* Page Sections */}
      <div className="relative z-10">
        <Hero />
        <ScrollytellingPipeline />
        <FeatureGrid />
        <Comparison />
        <Pricing />
        <Footer />
      </div>
    </main>
  );
}
