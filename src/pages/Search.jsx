import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import searchData from '../data/search_data.json';
import './Home.css';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula um pequeno delay de busca (opcional)
    setLoading(true);
    
    const searchTerm = query.toLowerCase().trim();
    
    if (searchTerm) {
      // Busca nos dados
      const filtered = searchData.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(searchTerm);
        const descMatch = item.description.toLowerCase().includes(searchTerm);
        return titleMatch || descMatch;
      });
      
      setResults(filtered);
    } else {
      setResults([]);
    }
    
    setLoading(false);
  }, [query]);

  return (
    <div className="page-container">
      <main className="main-content container">
        <div className="content">
          <article className="main-article">
            <h2>Search Results</h2>
            <p className="article-meta">
              {query ? `Showing results for: "${query}"` : 'Enter a search term'}
            </p>
            
            <div className="article-content">
              {loading ? (
                <p>Searching...</p>
              ) : results.length > 0 ? (
                <div className="search-results">
                  {results.map((result, index) => (
                    <div key={index} className="search-result-item">
                      <h3>
                        <a href={result.link} className="read-more">
                          {result.title}
                        </a>
                      </h3>
                      <p>{result.description}</p>
                    </div>
                  ))}
                </div>
              ) : query ? (
                <p>No results found for "{query}". Try another search term.</p>
              ) : (
                <p>Type something in the search bar above to start searching.</p>
              )}
            </div>
          </article>
        </div>

        <Sidebar />
      </main>
    </div>
  );
}

export default Search;