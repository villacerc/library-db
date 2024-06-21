// src/components/QuaggaScanner.js
import React, { useEffect, useState } from 'react';
import Quagga from 'quagga';

const QuaggaScanner = ({ onDetected }) => {
    const [lastDetected, setLastDetected] = useState(null);

    useEffect(() => {

        const handleDetected = (result) => {
            if (result && result.codeResult && result.codeResult.code) {
                const code = result.codeResult.code;
                if (isValidISBN(code) && (!lastDetected || new Date() - lastDetected > 2000)) {
                    setLastDetected(new Date());
                    onDetected(code);
                }
            }
        };

        const isValidISBN = (code) => {
            // ISBN-13 validation
            if (code.length !== 13 || (!code.startsWith('978') && !code.startsWith('979'))) {
                return false;
            }

            // verify ISBN checksum
            let sum = 0;
            for (let i = 0; i < 12; i++) {
                sum += (i % 2 === 0 ? 1 : 3) * parseInt(code[i], 10);
            }
            const checkDigit = (10 - (sum % 10)) % 10;
            return checkDigit === parseInt(code[12], 10);
        };

        Quagga.init(
            {
                inputStream: {
                    name: 'Live',
                    type: 'LiveStream',
                    target: document.querySelector('#scanner-container'),
                    constraints: {
                        width: 640,
                        height: 480,
                        facingMode: 'environment', // 'user' for front camera, 'environment' for back camera
                    },
                },
                decoder: {
                    readers: ['ean_reader'], // EAN-13 reader
                },
                locate: true, // Enable locating of the barcode in the image
                locator: {
                    patchSize: 'medium', // x-small, small, medium, large, x-large
                    halfSample: true,
                },
            },
            (err) => {
                if (err) {
                    console.error('QuaggaJS initialization error:', err);
                    return;
                }
                Quagga.start();
            }
        );

        Quagga.onDetected(handleDetected);

        return () => {
            Quagga.stop();
        };
    }, [lastDetected, onDetected]);

    return <div id="scanner-container" style={{ width: '100%', height: '100%' }} />;
};

export default QuaggaScanner;
