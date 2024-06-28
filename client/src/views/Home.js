import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
  
    return (
        <div>

  <main className="container mx-auto px-4 my-8 flex flex-col items-center">
    <h2 className="text-3xl font-semibold mb-2 text-center">Little Free Library DB</h2>
    <p className="text-lg text-gray-600 mb-8 text-center">Discover current books available across little free library.</p>
    <p className="text-sm text-gray-500 mb-2 text-center">Taking or sharing a book?</p>
    <button onClick={() => navigate("/scan")} id="scan-button" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Start Scanning</button>
  </main>
        </div>
    );
}

export default Home;
