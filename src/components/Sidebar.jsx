import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3>Themes</h3>
        <ul className="article-list">
          <li><Link to="/articles/maths">Maths</Link></li>
          <li><Link to="/articles/physics">Physics</Link></li>
          <li><Link to="/works">Works</Link></li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;