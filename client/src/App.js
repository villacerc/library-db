// src/App.js
import React, { useState } from 'react';
import QuaggaScanner from './QuaggaScanner';
import './App.css';

function App() {
    const [detectedCode, setDetectedCode] = useState('');
    const [hello, setHello] = useState('');

    const handleDetected = (code) => {
        setDetectedCode(code);
        console.log(`Detected barcode: ${code}`);
    };

    return (
        <div>
            <h1>Little Free Library</h1>
            <p>{detectedCode}</p>
            <p>{hello}</p>
            <button onClick={()=>setHello("hello")}>Test</button>
            <QuaggaScanner onDetected={handleDetected} />
            {detectedCode && (
                <div>
                    <h2>Detected ISBN:</h2>
                    <p>{detectedCode}</p>
                </div>
            )}
        </div>
    );
}

export default App;
