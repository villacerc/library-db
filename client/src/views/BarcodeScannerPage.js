import React from 'react'
import { useNavigate } from "react-router-dom";
import './BarcodeScannerPage.css'

export default function BarcodeScanner() {
  const navigate = useNavigate();
  
  return (
    <div id="scanner-container">
        <p class="text-lg text-gray-600 my-2 text-center">Point your camera at the barcode</p>
        <div id="interactive" className='viewport border-t border-b border-gray-300'/>
        <button id="cancel-button" onClick={() => navigate("/")} class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 my-2 block mx-auto">Cancel</button>
    </div>
  )
}
