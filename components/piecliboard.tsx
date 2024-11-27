'use client';

import React, { useState } from 'react';

const PieClipboardInput: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('0x....'); // Replace with your value
    setCopied(true);

    setTimeout(() => setCopied(false), 1000); // Reset "Copied" message after 2 seconds
  };

  return (
    <div className="relative flex items-center justify-between w-full bg-[#ffdd64] text-black border border-primary rounded-full h-[55px] px-6">
      {/* Address Text */}
      <span className="text-lg sm:text-2xl">
        捐赠地址：<span className="opacity-80">0x....</span>
      </span>

      <div className='flex items-center'>
        {/* Vertical Divider */}
        <div className="h-6 w-[1px] bg-primary mx-3"></div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center justify-center"
          aria-label="Copy to clipboard"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-black hover:scale-110 transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 8h4a2 2 0 002-2v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4a2 2 0 002 2zm2 2h4a2 2 0 002-2v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>

      {/* Copied Tooltip */}
      {copied && (
        <span className="absolute top-[-30px] right-4 bg-primary text-purple-500 px-2 py-1 rounded">
          Copied!
        </span>
      )}
    </div>
  );
};

export default PieClipboardInput;
