import React from 'react';

const BackgroundImage = ({ imageUrl = '/images/bhangra.png' }) => {
  return (
    <div className="h-screen w-full fixed top-0 left-0 z-10">
      <div 
        className="h-full w-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${imageUrl}')`,
          backgroundAttachment: 'fixed',
          WebkitBackfaceVisibility: 'hidden',
          transform: 'translateZ(0)'
        }}
      ></div>
    </div>
  );
};

export default BackgroundImage;