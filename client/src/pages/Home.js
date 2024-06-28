import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    
    const [detectedCode, setDetectedCode] = useState('');
    const [hello, setHello] = useState('');

    const handleDetected = (code) => {
        setDetectedCode(code);
        console.log(`Detected barcode: ${code}`);
    };

    return (
        <div>

  <main class="container mx-auto px-4 my-8 flex flex-col items-center">
    <h2 class="text-3xl font-semibold mb-2 text-center">Little Free Library DB</h2>
    <p class="text-lg text-gray-600 mb-8 text-center">Discover current books available across little free library.</p>
    <p class="text-sm text-gray-500 mb-2 text-center">Taking or sharing a book?</p>
    <button onClick={() => navigate("/scan")} id="scan-button" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Start Scanning</button>
  </main>
        </div>
    );
}

export default Home;
