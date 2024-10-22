import React, { useState } from 'react';
import img1 from '../../assets/images/shirt.png';
import img2 from '../../assets/images/shirt2.png';
import img3 from '../../assets/images/shirt3.png';

const Products = () => {
  const images1 = [img1, img2, img3];
  const images2 = [img2, img1, img3];
  const images3 = [img3, img2, img1];
  const images4 = [img1, img3, img2];
  const images5 = [img2, img3, img1];
  const images6 = [img3, img1, img2];

  const allImages = [images1, images2, images3, images4, images5, images6];

  const [currentImages, setCurrentImages] = useState(Array(6).fill(0));

  const handleMouseMove = (e, cardIndex) => {
    const { width } = e.target.getBoundingClientRect();
    const xPos = e.nativeEvent.offsetX;
    const newImages = [...currentImages];

    if (xPos < width / 3) {
      newImages[cardIndex] = 0;
    } else if (xPos < (2 * width) / 3) {
      newImages[cardIndex] = 1;
    } else {
      newImages[cardIndex] = 2;
    }

    setCurrentImages(newImages);
  };

  return (
    <div className='product'>
      <div className="product_box">
        {allImages.map((images, cardIndex) => (
          <div className="product_card" key={cardIndex}>
            <div
              className="hover-slider"
              onMouseMove={(e) => handleMouseMove(e, cardIndex)}
            >
              {images.map((imgSrc, index) => (
                <div
                  key={index}
                  className={`slider-image ${currentImages[cardIndex] === index ? "active" : ""}`}
                >
                  <img src={imgSrc} alt={`Slider ${index}`} />
                </div>
              ))}
            </div>
            <p className="product_text">худи овер // смотря какой deadline, смотря сколько money</p>
            <div className="product_text">120.000 сум</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
