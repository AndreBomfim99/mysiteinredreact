import Sidebar from '../components/Sidebar';
import './Home.css';

function Works() {
  return (
    <div className="page-container">
      <main className="main-content container">
        <div className="content">
          <article className="main-article">
            <h2>My Works</h2>

            <div className="article-content">
              <h4>
                <a href="01_ecommerce-analysis/00_summary.html" className="read-more">
                  Project Ecommerce Analysis Olist
                </a>
              </h4>
            </div>
          </article>
        </div>

        <Sidebar />
      </main>
    </div>
  );
}

export default Works;