// Components/Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default Loader;
