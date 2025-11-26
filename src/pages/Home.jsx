import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import postsData from '../data/posts.json';
import './Home.css';

function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Embaralhar e pegar 3 posts aleatórios
    const shuffled = [...postsData].sort(() => Math.random() - 0.5);
    setCards(shuffled.slice(0, 3));
  }, []);

  return (
    <div className="page-container">
      <main className="main-content container">
        <div className="content">
          <article className="main-article">
            <h2>About me</h2>
            <p className="article-meta">Published on July 10, 2025 by André</p>
            
            <div className="article-content">
              <h3>Γειά σου!</h3>
              <h3>Hello!</h3>
              <p>My name is André, and I'm from São Paulo, Brazil. In this article, I'd like to introduce myself, share a bit of my background, and explain why I created this website.</p>
              
              <figure>
                <img src="/images/img01.jpg" alt="São Paulo cityscape" />
                <figcaption>São Paulo is one of the largest cities in the world.</figcaption>
              </figure>

              <h3>A little about me</h3>
              <p>I've always been a curious person. Since childhood, I've had a strong desire to understand how and why things exist, how they work, and what's behind them.</p>
              
              <a href="/about" className="read-more">Continue reading...</a>
            </div>
          </article>
        </div>

        <Sidebar />
      </main>

      {/* Cards Section */}
      <section className="cards-section container">
        <div className="cards-container">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <div className="card-image-container">
                <img src={card.image} alt={card.title} />
                <h3 className="card-title-overlay">{card.title}</h3>
              </div>
              <div className="card-content">
                <p>{card.description}</p>
                <a href={card.link} className="read-more">More...</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;