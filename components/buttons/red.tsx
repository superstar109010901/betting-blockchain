'use client'

import React from 'react';

interface RedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  leadingIcon?: React.ReactNode;
}

const RedButton: React.FC<RedButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  loading = false,
  leadingIcon,
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      aria-busy={loading}
      className={
        `relative inline-flex items-center justify-center h-[33px] px-4 rounded-xl text-white text-sm font-medium tracking-wide ` +
        // Base gradient + glow
        `bg-[linear-gradient(180deg,#FF4D6D_0%,#B80038_100%)] shadow-[0_8px_18px_rgba(184,0,56,0.35)] ` +
        // Subtle inner ring and top glossy highlight
        `before:content-[''] before:absolute before:inset-0 before:rounded-xl before:ring-1 before:ring-white/15 ` +
        `after:content-[''] after:absolute after:inset-x-1 after:top-1 after:h-1/2 after:rounded-t-[0.75rem] after:bg-white/20 after:blur-[6px] after:opacity-40 ` +
        // State transitions
        `transition-all duration-200 hover:brightness-110 active:translate-y-[1px] active:shadow-[0_4px_10px_rgba(184,0,56,0.35)] disabled:opacity-60 disabled:cursor-not-allowed ` +
        className
      }
      style={{ textShadow: '0 1px 1px rgba(0, 0, 0, 0.35)' }}
    >
      {/* Loading spinner */}
      {loading && (
        <span className="mr-2 inline-flex">
          <span className="h-3.5 w-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
        </span>
      )}
      {!loading && leadingIcon && (
        <span className="mr-2 inline-flex items-center">{leadingIcon}</span>
      )}
      {children}
    </button>
  );
};

export default RedButton;


