import Sidebar from '../components/Sidebar';
import './Home.css';

function Articles() {
  return (
    <div className="page-container">
      <main className="main-content container">
        <div className="content">
          <article className="main-article">
            <h2>Menu of Articles published</h2>
            
            <div className="article-content">
              <p className="section-title">Maths</p>
              <p className="section-title">Physics</p>
            </div>
          </article>
        </div>

        <Sidebar />
      </main>
    </div>
  );
}

export default Articles;