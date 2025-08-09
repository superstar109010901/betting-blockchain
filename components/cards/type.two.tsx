'use client'

import React from "react";
import { Copy, Info, ArrowLeft } from "lucide-react";

interface TypeTwoProps {
  title: string;
  chances: number;
  bettingAddress: string;
  leftButtonText: string;
  rightButtonText: string;
  onLeftButtonClick?: () => void;
  onRightButtonClick?: () => void;
  onCopyAddress?: () => void;
}

const TypeTwo: React.FC<TypeTwoProps> = ({
  title,
  chances,
  bettingAddress,
  leftButtonText,
  rightButtonText,
  onLeftButtonClick,
  onRightButtonClick,
  onCopyAddress,
}) => {
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(bettingAddress);
    onCopyAddress?.();
  };

  return (
    <div className="relative rounded-[14px] p-6 text-white overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-xl">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white">{title}</h1>
            <button className="w-5 h-5 rounded-full bg-gray-600/50 flex items-center justify-center hover:bg-gray-600/70 transition-colors">
              <Info className="w-3 h-3 text-gray-300" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-300 text-sm">Chances:</span>
            <span className="text-red-400 font-semibold">{chances}</span>
          </div>
        </div>

        {/* Betting Address Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-sm font-medium">Betting Address</span>
            <span className="text-gray-400 text-xs">Use a Decentralized Wallet</span>
          </div>
          <div className="relative">
            <div className="bg-gray-800/60 rounded-lg p-3 pr-12 border border-gray-600/50">
              <span className="text-gray-300 text-sm font-mono break-all">
                {bettingAddress}
              </span>
            </div>
            <button
              onClick={handleCopyAddress}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded bg-gray-700/50 hover:bg-gray-600/70 flex items-center justify-center transition-colors"
            >
              <Copy className="w-3 h-3 text-gray-300" />
            </button>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="flex gap-4">
          <button
            onClick={onLeftButtonClick}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl active:translate-y-[1px]"
          >
            <ArrowLeft className="w-4 h-4" />
            {leftButtonText}
          </button>
          <button
            onClick={onRightButtonClick}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl active:translate-y-[1px]"
          >
            {rightButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TypeTwo;
