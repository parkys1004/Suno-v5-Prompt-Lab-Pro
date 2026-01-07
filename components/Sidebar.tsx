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
    <div className="sidebar-column">
      <div className="search-box">
        <div className="relative">
          <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input 
            type="text" 
            placeholder="장르 검색..." 
            value={searchTerm}
            onChange={onSearchChange}
            className="search-input"
          />
        </div>
      </div>
      <div className="genre-list custom-scroll">
        {genres.map(g => (
          <button 
            key={g.id}
            onClick={() => onSelectGenre(g.id)}
            className={`genre-button ${selectedGenreId === g.id ? 'active' : ''}`}
          >
            <span className={`genre-btn-text ${selectedGenreId === g.id ? 'active' : ''}`}>
              {g.name}
            </span>
            <span className="category-badge">
              {g.category}
            </span>
          </button>
        ))}
        {genres.length === 0 && (
          <div className="empty-state">
            검색 결과가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};