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
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <header className="mb-8 text-center md:text-left md:flex md:items-end md:justify-between border-b pb-6 border-gray-200">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            Suno v5 Prompt Lab Pro
          </h1>
          <p className="text-gray-500 mt-2 font-medium italic">
            40가지 장르 x 각 6개 프롬프트 (총 240세트)
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
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

      <div 
        className={`fixed z-50 left-1/2 bottom-[30px] -translate-x-1/2 bg-gray-800 text-white text-center rounded-full px-6 py-3 font-semibold shadow-lg transition-all duration-300 transform
          ${toastVisible ? 'opacity-100 translate-y-[-20px] visible' : 'opacity-0 invisible translate-y-0'}
        `}
      >
        📋 프롬프트가 복사되었습니다!
      </div>
    </div>
  );
};

export default App;