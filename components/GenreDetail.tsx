import React from 'react';
import { Genre } from '../types';
import { RadarChartComponent } from './RadarChart';
import { PromptCard } from './PromptCard';

interface GenreDetailProps {
  genre: Genre;
  onCopy: (text: string) => void;
}

export const GenreDetail: React.FC<GenreDetailProps> = ({ genre, onCopy }) => {
  return (
    <div className="lg:col-span-8 space-y-6">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 w-full">
            <div className="flex items-center space-x-2 mb-2">
              <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded
                ${genre.category === 'K-POP' ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-600'}
              `}>
                {genre.category}
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              {genre.name}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {genre.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {genre.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-white rounded text-[11px] text-gray-500 font-bold border border-gray-200">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-gray-50 rounded-2xl p-4 border border-gray-100">
            <RadarChartComponent data={genre.attr} category={genre.category} />
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
            추천 프롬프트 세트 (6)
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
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