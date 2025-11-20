# SLAM-Kit.ai Landing Page

A high-conversion landing page for a Series A robotics startup offering No-Code Robotics-as-a-Service (RaaS) platform.

## 🚀 Features

- **Industrial Futurist Design**: Dark mode with electric cyan accents and glassmorphism effects
- **Smooth Animations**: Framer Motion + GSAP for physics-based, heavy animations
- **Scrollytelling**: Interactive scroll-based storytelling for the "How It Works" section
- **Bento Grid Layout**: Modern feature showcase with responsive grid
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Built with Next.js 14 for optimal speed

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Animations**: Framer Motion + GSAP
- **Fonts**: Inter (UI) & JetBrains Mono (Code/Technical)
- **Language**: TypeScript

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Design System

### Colors
- **Background**: Deep slate/zinc (#09090b to #18181b)
- **Primary Accent**: Electric Cyan (#06b6d4)
- **Secondary Accent**: Safety Orange (#f97316)
- **Surfaces**: Glassmorphism cards with white-opacity borders

### Typography
- **UI Font**: Inter
- **Technical Font**: JetBrains Mono

### Effects
- Glassmorphism (backdrop-blur + transparency)
- Glow effects on interactive elements
- Engineering blueprint grid pattern

## 📄 Page Structure

1. **Navbar** - Fixed glassmorphism navigation with CTA
2. **Hero Section** - Split layout with animated visuals
3. **Scrollytelling Pipeline** - Interactive "How It Works" with sticky scroll
4. **Feature Grid** - Bento box layout showcasing key features
5. **Comparison Section** - Old Way vs. SLAM-Kit comparison
6. **Pricing** - RaaS pricing tiers with feature breakdown
7. **Footer** - Links and social media

## 🚀 Development

The app is built using Next.js 14 with the App Router. All components are located in the `/components` directory, and the main page is in `/app/page.tsx`.

### Project Structure

```
slamkit/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Button.tsx
│   ├── GlassCard.tsx
│   ├── GridBackground.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ScrollytellingPipeline.tsx
│   ├── FeatureGrid.tsx
│   ├── Comparison.tsx
│   ├── Pricing.tsx
│   └── Footer.tsx
├── public/
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## 📝 License

All rights reserved - SLAM-Kit.ai 2024
