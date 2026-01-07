import React, { useState } from 'react';
import { Prompt } from '../types';

interface PromptCardProps {
  prompt: Prompt;
  index: number;
  onCopy: (text: string) => void;
}

export const PromptCard: React.FC<PromptCardProps> = ({ prompt, index, onCopy }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    onCopy(prompt.text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 400);
  };

  return (
    <div 
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-white p-5 rounded-2xl border cursor-pointer shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group
        ${isCopied ? 'bg-green-50 border-green-200' : 'border-gray-200'}
        ${isHovered && !isCopied ? 'border-l-4 border-l-blue-500 bg-blue-50/30' : 'border-l-4 border-l-transparent'}
      `}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div>
        <p className="text-gray-900 font-mono text-sm font-black mb-3 leading-snug">
          {prompt.text}
        </p>
        <p className="text-xs text-gray-500 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100 italic group-hover:bg-white/80 transition-colors">
          "{prompt.desc}"
        </p>
      </div>
    </div>
  );
};