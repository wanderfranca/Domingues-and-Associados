import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function TopBar({ navigate }) {
  const [searchVal, setSearchVal] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/noticias?s=${encodeURIComponent(searchVal.trim())}`);
    }
  };

  return (
    <div id="topbar" className="topclass">
      <div className="container">
        <div className="topclass-inner">
          <div id="topbar-search" className="topbar-widget">
            {/* Facebook Icon */}
            <div className="virtue_social_widget">
              <a 
                href="https://www.facebook.com/Domingues-Associados-121595751958195/" 
                className="facebook_link" 
                title="Facebook" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook da Domingues & Associados"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>

            {/* Search Form matching exact Virtue theme specs */}
            <form role="search" onSubmit={handleSearch} className="form-search">
              <button type="submit" className="search-icon" aria-label="Buscar">
                <Search size={13} color="#ffffff" strokeWidth={2.5} />
              </button>
              <input 
                type="text" 
                value={searchVal} 
                onChange={(e) => setSearchVal(e.target.value)} 
                className="search-query" 
                placeholder="Buscar" 
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
