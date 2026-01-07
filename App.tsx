import React, { useState, useMemo, useCallback } from 'react';
import { GENRE_DATA } from './constants';
import { Sidebar } from './components/Sidebar';
import { GenreDetail } from './components/GenreDetail';

const App: React.FC = () => {
  const [selectedGenreId, setSelectedGenreId] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [toastVisible, setToastVisible] = useState(false);

  const filteredGenres = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return GENRE_DATA.filter(g => 
      g.name.toLowerCase().includes(term) || 
      g.category.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const selectedGenre = useMemo(() => 
    GENRE_DATA.find(g => g.id === selectedGenreId) || GENRE_DATA[0]
  , [selectedGenreId]);

  const handleCopy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <div>
          <h1 className="app-title">
            Suno v5 Prompt Lab Pro
          </h1>
          <p className="app-subtitle">
            40가지 장르 x 각 6개 프롬프트 (총 240세트)
          </p>
        </div>
      </header>

      <div className="main-grid">
        <Sidebar 
          genres={filteredGenres}
          selectedGenreId={selectedGenreId}
          onSelectGenre={setSelectedGenreId}
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <GenreDetail 
          genre={selectedGenre}
          onCopy={handleCopy}
        />
      </div>

      <footer className="app-footer">
        <div className="footer-line"></div>
        <p className="footer-brand">방구석 음악만들기</p>
      </footer>

      <div 
        className={`toast ${toastVisible ? 'visible' : 'hidden'}`}
      >
        📋 프롬프트가 복사되었습니다!
      </div>
    </div>
  );
};

export default App;