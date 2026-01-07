import React from 'react';
import { Genre } from '../types';

interface SidebarProps {
  genres: Genre[];
  selectedGenreId: number;
  onSelectGenre: (id: number) => void;
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  genres, 
  selectedGenreId, 
  onSelectGenre, 
  searchTerm, 
  onSearchChange 
}) => {
  return (
    <div className="lg:col-span-4 flex flex-col h-[600px] lg:h-[calc(100vh-180px)]">
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 mb-4">
        <div className="relative">
          <svg className="w-5 h-5 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input 
            type="text" 
            placeholder="장르 검색..." 
            value={searchTerm}
            onChange={onSearchChange}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto pr-2 custom-scroll space-y-2">
        {genres.map(g => (
          <button 
            key={g.id}
            onClick={() => onSelectGenre(g.id)}
            className={`w-full text-left p-4 rounded-xl flex justify-between items-center transition-all duration-200 border border-transparent
              ${selectedGenreId === g.id 
                ? 'bg-gray-900 text-white shadow-lg border-gray-900' 
                : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-sm border-gray-100'
              }`}
          >
            <span className={`font-bold ${selectedGenreId === g.id ? 'text-white' : 'text-gray-700'}`}>
              {g.name}
            </span>
            <span className={`text-[9px] px-2 py-0.5 rounded font-black uppercase
              ${selectedGenreId === g.id 
                ? 'bg-white/20 text-white' 
                : 'bg-gray-100 text-gray-400'
              }`}>
              {g.category}
            </span>
          </button>
        ))}
        {genres.length === 0 && (
          <div className="p-4 text-center text-gray-400 text-sm">
            검색 결과가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};