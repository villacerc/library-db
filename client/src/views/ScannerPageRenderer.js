import React, { useEffect, useState } from 'react';
import BarcodeScanner from '../utils/BarcodeScanner';
import BarcodeScannerPage from './BarcodeScannerPage';
import ScannedItemPage from './ScannedItemPage';

export default function ScannerPageRenderer() {
  const [detectedCode, setDetectedCode] = useState('');

  useEffect(() => {
    const scanner = new BarcodeScanner(handleDetected);
    scanner.start();
}, [detectedCode]);

  const handleDetected = (code) => {
    setDetectedCode(code);
};

return detectedCode ? (<ScannedItemPage/>) : (<BarcodeScannerPage/>)

}
