import React, { useState, useEffect } from "react";

const Card = ({
  images,
  title,
  description1,
  description2,
  description3,
  descriptionLink2,
  descriptionLink3,
  buttonLink,
  textButton
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id='hero' className='flex flex-col justify-center items-center mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-4 '>
      <div className="flex flex-col md:flex-row bg-neutral-100 border border-gray-200 rounded-lg overflow-hidden mt-1 mb-1 transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-xl" style={{ width: '100%', maxWidth: '60rem', height: 'auto' }}>
        <div className="relative w-full md:w-2/3 h-64 md:h-auto">
          <img className="w-full h-full object-cover" src={images[currentImageIndex]} alt={title} />
          {images.length > 1 && (
            <>
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 hover:bg-gray-700 text-white p-2 rounded-full"
                onClick={handlePrevClick}
              >
                ◀
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 hover:bg-gray-700 text-white p-2 rounded-full"
                onClick={handleNextClick}
              >
                ▶
              </button>
            </>
          )}
        </div>

        <div className="w-full md:w-1/3 flex flex-col justify-center items-center px-6 py-4">
          <div className="font-bold text-lg mb-2 text-center w-full">{title}</div>
          <p className="text-gray-700 text-base text-center mt-2 flex flex-col items-center">
            <strong>{description1}</strong>
            <a href={descriptionLink2} target="_blank" rel="noopener noreferrer"><strong>{description2}</strong></a>
            <a href={descriptionLink3} target="_blank" rel="noopener noreferrer"><strong>{description3}</strong></a>
          </p>
          <div className="mt-4">
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
              <button className="rounded-md bg-pink-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {textButton}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
