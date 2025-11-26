import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="search-bar">
      <div className="container search-bar-container">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            required
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/andre-bomfim/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/andrebomfim999" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-x-twitter"></i>
          </a>
          <a href="https://github.com/AndreBomfim99" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;