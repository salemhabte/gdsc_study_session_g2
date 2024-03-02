import React from 'react';
import im1 from './assets/im1.jpg'
import im2 from './assets/im2.jpg'
import im3 from './assets/im3.jpg'
const HomePage = () => {
  return (
    <div>
     

      
        <section className="hero">
          <h1>Welcome to our Gallery</h1>
          <p>Discover amazing photographs from talented artists.</p>
          <a href="#" className="btn">Explore Now</a>
        </section>

        <section className="featured-gallery">
          <h2>Featured Gallery</h2>
          <div className="gallery-items">
            {/* Gallery item 1 */}
            <div className="gallery-item">
              <img src={im1} alt="Artwork 1" />
              <h3>Artwork 1</h3>
            </div>

            {/* Gallery item 2 */}
            <div className="gallery-item">
              <img src={im2} alt="Artwork 2" />
              <h3>Artwork 2</h3>
            </div>

            {/* Gallery item 3 */}
            <div className="gallery-item">
              <img src={im3} alt="Artwork 3" />
              <h3>Artwork 3</h3>
            </div>
          </div>
        </section>
      

      
    </div>
  );
};

export default HomePage;