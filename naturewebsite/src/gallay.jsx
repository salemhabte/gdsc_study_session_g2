import React from 'react';
import im1 from './assets/im1.jpg'
import im2 from './assets/im2.jpg'
import im3 from './assets/im3.jpg'
import im4 from './assets/im4.jpg'
const GalleryPage = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <div className="gallery">
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
        <div className="gallery-item">
          <img src={im4} alt="Artwork 3" />
          <h3>Artwork 3</h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;