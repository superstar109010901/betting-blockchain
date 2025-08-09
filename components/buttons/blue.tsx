'use client'

import React from "react";

interface BlueButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const BlueButton: React.FC<BlueButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={
        `relative inline-flex items-center justify-center h-12 px-6 rounded-xl text-white font-semibold tracking-wide ` +
        `bg-[linear-gradient(180deg,#4CC3FF_0%,#0C60FF_100%)] shadow-[0_8px_18px_rgba(12,96,255,0.35)] ` +
        `before:content-[''] before:absolute before:inset-0 before:rounded-xl before:ring-1 before:ring-white/20 ` +
        `after:content-[''] after:absolute after:inset-x-1 after:top-1 after:h-1/2 after:rounded-t-[0.75rem] ` +
        `after:bg-white/30 after:blur-[6px] after:opacity-50 ` +
        `hover:brightness-110 active:translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed ` +
        className
      }
      style={{
        textShadow: '0 1px 1px rgba(0, 0, 0, 0.25)',
      }}
    >
      {children}
    </button>
  );
};

export default BlueButton;