import React, { useState } from 'react';
import img1 from '../../assets/images/shirt.png';
import img2 from '../../assets/images/shirt2.png';
import img3 from '../../assets/images/shirt3.png';
import img4 from '../../assets/images/shirt4.png';
import img5 from '../../assets/images/shirt5.png';
import img6 from '../../assets/images/shirt6.png';

const Products = () => {
  // Har bir kartochka uchun alohida ma'lumotlar (rasmlar, matn, narx)
  const productData = [
    {
      images: [img1, img2, img3],
      text: 'Худи овер // смотря какой deadline, смотря сколько money',
      price: '120.000 сум'
    },
    {
      images: [img2, img1, img3],
      text: 'Толстовка с капюшоном // мода и стиль для каждого дня',
      price: '150.000 сум'
    },
    {
      images: [img3, img2, img1],
      text: 'Классическая футболка // удобная и стильная',
      price: '100.000 сум'
    },
    {
      images: [img4, img3, img2],
      text: 'Джинсовая куртка // классика не выходит из моды',
      price: '200.000 сум'
    },
    {
      images: [img5, img3, img1],
      text: 'Кожаная куртка // для любителей комфорта',
      price: '250.000 сум'
    },
    {
      images: [img6, img1, img2],
      text: 'Теплая кофта // для холодных дней',
      price: '180.000 сум'
    }
  ];

  const [currentImages, setCurrentImages] = useState(Array(productData.length).fill(0));

  // const handleMouseMove = (e, cardIndex) => {
  //   const { width } = e.target.getBoundingClientRect();
  //   const xPos = e.nativeEvent.offsetX;
  //   const newImages = [...currentImages];

  //   if (xPos < width / 3) {
  //     newImages[cardIndex] = 0;
  //   } else if (xPos < (2 * width) / 3) {
  //     newImages[cardIndex] = 1;
  //   } else {
  //     newImages[cardIndex] = 2;
  //   }

  //   setCurrentImages(newImages);
  // };

  return (
    <div className='product'>
      <div className="product_box">
        {productData.map((product, cardIndex) => (
          <div className="product_card" key={cardIndex}>
            <div
              className="hover-slider"
              onMouseMove={(e) => handleMouseMove(e, cardIndex)}
            >
              {product.images.map((imgSrc, index) => (
                <div
                  key={index}
                  className={`slider-image ${currentImages[cardIndex] === index ? "active" : ""}`}
                >
                  <img src={imgSrc} alt={`Slider ${index}`} />
                </div>
              ))}
            </div>
            <p className="product_text">{product.text}</p>
            <div className="product_text">{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
