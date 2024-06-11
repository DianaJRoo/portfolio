import  React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ images , title, description1, buttonLink }) => {
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
    <div id='hero' className='d-flex flex-column mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-20 p-20 w-full'>
      <div className="flex flex-row bg-neutral-100 border border-gray-200 rounded-lg overflow-hidden mt-1 mb-1 transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-xl" style={{ width: '50rem', height: '20rem' }}>
        <div className="relative">
          <img className="w-full h-full object-cover" src={images[currentImageIndex]} alt={title} />
          
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
        </div>
        <div className="w-1/2 px-6 py-4 flex flex-col justify-between">
        <div className=" w-full px-6 py-4 flex-1">
          <div className="font-bold text-l mb-2 text-center w-full ">{title}</div>
          <p className="text-gray-700 text-base flex justify-center flex-1">
            <strong>{description1}</strong>
          </p>
          </div>
          <div className="px-8 mt-2 pt-2 pb-2 flex justify-center">
            <Link to={buttonLink} rel="noopener noreferrer">
              <button className="mt-auto justify-center rounded-md bg-pink-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Link
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;