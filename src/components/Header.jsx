import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>My Site in Red</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About me</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/articles">Articles</Link></li>
          </ul>
        </nav>
        <div className="mobile-menu">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;