import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Articles from './pages/Articles';
import Works from './pages/Works';
import Search from './pages/Search'; // NOVA IMPORTAÇÃO
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <SearchBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/works" element={<Works />} />
          <Route path="/search" element={<Search />} /> {/* NOVA ROTA */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;