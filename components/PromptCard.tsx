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

  let cardClasses = 'prompt-card animate-fade-in-item';
  if (isCopied) {
    cardClasses += ' copied';
  } else if (isHovered) {
    cardClasses += ' hover-active';
  }

  return (
    <div 
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cardClasses}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div>
        <p className="prompt-text">
          {prompt.text}
        </p>
        <p className="prompt-desc-box">
          "{prompt.desc}"
        </p>
      </div>
    </div>
  );
};