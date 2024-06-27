import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Home.css'

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

            <div className='text-center w-full px-4 md:px-6 text-xl text-gray-800 leading-normal'>
            <h1 className='text-3xl font-bold'>
      Little Free Library DB
    </h1>
    <button onClick={() => navigate("/scan")} className='py-3 w-full'>    
        <div className='select-none items-center gap-3 rounded-lg border border-gray-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
    <img src={logo} className="w-20 mx-auto opacity-85" alt="Cover of my favorite book" />
    <p className='text-gray-500'>Take or leave a book</p>
    </div>
    </button>


            <p>{detectedCode}</p>
            {/* <QuaggaScanner onDetected={handleDetected} /> */}
            {detectedCode && (
                <div>
                    <h2>Detected ISBN:</h2>
                    <p>{detectedCode}</p>
                </div>
            )}
            </div>
      
        </div>
    );
}

export default Home;
