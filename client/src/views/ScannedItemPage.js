import React, { useState } from 'react';
import bookPlaceholder from "../assets/book-cover-placeholder.png"

function ScannedItem({item}) {

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

    return (
        <div className="bg-white shadow rounded-lg m-6 p-6 flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center items-center bg-book-placeholder bg-cover bg-center">
            <img id="book-image" className={`w-full h-auto rounded md:max-w-72 border-gray-100 border-2 ${isImageLoaded ? '' : 'hidden'}`}  src={item.cover.large} alt="Book Cover" onLoad={handleImageLoad}/>
            {!isImageLoaded && (
            <img id="book-placeholder" className="w-full h-auto rounded md:max-w-72 border-gray-100 border-2" src={bookPlaceholder}/>
          )}
          </div>
          <div className="md:w-2/3 md:pl-3 md:max-w-3xl">
            <h2 className="text-3xl font-semibold mb-4">{item.title}</h2>
            <div className="mb-4">
            <p id="book-description" className="text-lg text-gray-700">
                {item.subtitle}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-medium">{item.authors.length === 1 ? 'Author' : 'Authors'}:</h3>
              <p id="book-author" className="text-lg text-gray-700">{item.authors.map(author => author.name).join(', ')}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-medium">Year:</h3>
              <p id="book-year" className="text-lg text-gray-700">{item.publish_date}</p>
            </div>
            <div className="flex justify-between w-full">
  <div className="flex space-x-4">
    <button id="take-button" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Take</button>
    <button id="leave-button" className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Leave</button>
  </div>
  <button id="scan-again-button" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Scan Again</button>
</div>
          </div>
        </div>
    )
}

export default ScannedItem;