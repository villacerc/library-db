import React, { useEffect, useState } from 'react';
import BarcodeScanner from '../utils/BarcodeScanner';
import BarcodeScannerPage from './BarcodeScannerPage';
import ScannedItemPage from './ScannedItemPage';
import axios from 'axios';
import Spinner from '../components/Spinner';

export default function ScannerPageRenderer() {
  const [detectedCode, setDetectedCode] = useState('');
  const [fetchingBook, setFetchingBook] = useState(false);
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const scanner = new BarcodeScanner(handleDetected);
    scanner.start();

    if(detectedCode) {
      scanner.stop();
      fetchBookData();
    }

}, [detectedCode]);

  const handleDetected = (code) => {
    setDetectedCode(code);
};

const fetchBookData = async () => {
    setFetchingBook(true);
    try {
      const response = await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${detectedCode}&jscmd=data&format=json`);
      const responseId = Object.keys(response.data)[0];
      setBookData(response.data[responseId]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setFetchingBook(false);
    }
};

const renderPage = () => {
  if (fetchingBook) {
  return <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center "><Spinner/></div>;
  }

return bookData ? (<ScannedItemPage item={bookData} />) : (<BarcodeScannerPage/>)
}

return (
  <div className='absolute top-0 left-0 right-0 bottom-0 overflow-auto'>
      {renderPage()}
    </div>
)

}
