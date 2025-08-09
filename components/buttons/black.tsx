'use client'

import React from "react";

interface BlackButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className ?: string;
}

const BlackButton: React.FC<BlackButtonProps> = ({children, onClick, className = ""}) => {
    return (
        <button 
            className={"h-9 rounded-lg bg-[rgba(255, 255, 255, 0.04)] border border-[rgba(255,255,255,0.04)] flex items-center justify-center transition-colors hover:bg-[rgba(255, 255, 255, 0.08)] "+className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default BlackButton;