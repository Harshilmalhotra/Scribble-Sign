import React, { useState } from 'react';
import Signature from './Components/Signature';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  const [signature, setSignature] = useState(null);

  const handleSaveSignature = (dataUrl) => {
    setSignature(dataUrl);
  };

  const downloadSignature = () => {
    const link = document.createElement('a');
    link.href = signature;
    link.download = 'signature.png';
    link.click();
  };

  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300">
 
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg sm:max-w-lg lg:max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Online Signature App</h1>
        <Signature onSave={handleSaveSignature} />
        {signature && (
          <div className="mt-8 text-center">
            <h3 className="text-xl text-gray-700 mb-4">Your Signature:</h3>
            <img src={signature} alt="Signature" className="border-2 border-blue-500 rounded-md mb-4 max-w-full mx-auto" />
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300" onClick={downloadSignature}>Download Signature</button>
          </div>
        )}
      </div>
      <footer className="text-center text-gray-600 mt-8">
        <a href='https://www.harshil.co/' target='_blank'>Made with ❤️ by Harshil Malhotra</a>
      </footer>
    </div>
  );
}

export default App;
