import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center';

  const variantClasses = {
    primary: 'bg-cyan-400 text-zinc-900 hover:bg-cyan-300 glow-cyan',
    secondary: 'bg-orange-500 text-white hover:bg-orange-400 glow-orange',
    outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 glow-cyan',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
