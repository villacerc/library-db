import Quagga from '@ericblade/quagga2';

class BarcodeScanner {
    constructor(onDetectedCallback) {
        this.onDetectedCallback = onDetectedCallback;
        this.lastDetected = null;
        this.handleDetected = this.handleDetected.bind(this);
        this.isValidISBN = this.isValidISBN.bind(this);
    }

    start() {
        Quagga.init(
            {
                inputStream: {
                    name: 'Live',
                    type: 'LiveStream',
                    target: document.querySelector('#interactive'),
                    constraints: {
                        aspectRatio: {ideal: 640/480},
                      }
                },
                decoder: {
                    readers: ['ean_reader'], // EAN-13 reader
                },
                locate: true, // Enable locating of the barcode in the image
                locator: {
                    patchSize: 'large', // x-small, small, medium, large, x-large
                    halfSample: true,
                },
            },
            (err) => {
                if (err) {
                    // console.error('QuaggaJS initialization error:', err);
                    return;
                }
                Quagga.start();
            }
        );

        Quagga.onDetected(this.handleDetected);

    }
    
    stop() {
        Quagga.stop();
    }

    handleDetected(result) {
        if (result && result.codeResult && result.codeResult.code) {
            const code = result.codeResult.code;
            if (this.isValidISBN(code) && (!this.lastDetected || new Date() - this.lastDetected > 2000)) {
                this.lastDetected = new Date();
                this.onDetectedCallback(code);
            }
        }
    }

    isValidISBN(code) {
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

};

export default BarcodeScanner;
