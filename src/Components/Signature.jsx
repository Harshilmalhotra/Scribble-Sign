import React, { useRef, useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const Signature = ({ onSave }) => {
  const sigCanvas = useRef({});
  const containerRef = useRef(null);

  const clear = () => {
    sigCanvas.current.clear();
  };

  const saveSignature = () => {
    const dataUrl = sigCanvas.current.toDataURL();
    onSave(dataUrl);
  };

  useEffect(() => {
    const updateCanvasSize = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        const canvas = sigCanvas.current.getCanvas();
        canvas.width = width - 20; // Adjust width to fit within the container
        canvas.height = (width - 20) * 0.365; // Adjust height proportionally
      }
    };

    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize(); // Initial size adjustment

    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  return (
    <div ref={containerRef} className="text-center mt-10 p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
      <h2 className="text-2xl mb-6 text-gray-800 font-semibold">Draw your signature</h2>
      <SignatureCanvas
        ref={sigCanvas}
        canvasProps={{
          className: 'border-2 border-dashed border-gray-300 rounded-md w-full h-full'
          // Removed width and height here to set them dynamically in useEffect
        }}
        backgroundColor="rgba(255,255,255,0)"
        penColor="black"
      />
      <div className="mt-6 flex justify-center space-x-4">
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300" onClick={clear}>Clear</button>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300" onClick={saveSignature}>Save</button>
      </div>
    </div>
  );
};

export default Signature;
