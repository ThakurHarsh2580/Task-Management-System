import React from 'react'

const Spinner = ({ size = "md", fullScreen = false }) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4"
  };

  if (fullScreen) {
    return (
      <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50'>
        <div className={`${sizeClasses[size]} border-gray-700 border-t-white rounded-full animate-spin`}></div>
      </div>
    );  
  }

  return (
    <div className={`${sizeClasses[size]} border-gray-700 border-t-white rounded-full animate-spin`}></div>
  );
};

export default Spinner;
