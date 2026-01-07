import React from 'react';
import { Genre } from '../types';
import { RadarChartComponent } from './RadarChart';
import { PromptCard } from './PromptCard';

interface GenreDetailProps {
  genre: Genre;
  onCopy: (text: string) => void;
}

export const GenreDetail: React.FC<GenreDetailProps> = ({ genre, onCopy }) => {
  const isKpop = genre.category === 'K-POP';

  return (
    <div className="detail-column">
      <div className="genre-header-card">
        <div className="header-content-layout">
          <div className="header-text-section">
            <div className="flex items-center space-x-2 mb-2">
              <span className={`category-label ${isKpop ? 'kpop' : 'standard'}`}>
                {genre.category}
              </span>
            </div>
            <h2 className="genre-title">
              {genre.name}
            </h2>
            <p className="genre-desc">
              {genre.desc}
            </p>
            <div className="tag-container">
              {genre.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="header-chart-section">
            <RadarChartComponent data={genre.attr} category={genre.category} />
          </div>
        </div>
      </div>

      <div>
        <div className="section-header">
          <h3 className="section-title">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
            추천 프롬프트 세트 (6)
          </h3>
        </div>
        <div className="prompt-grid">
          {genre.prompts.map((prompt, index) => (
            <PromptCard 
              key={index} 
              prompt={prompt} 
              index={index}
              onCopy={onCopy} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};