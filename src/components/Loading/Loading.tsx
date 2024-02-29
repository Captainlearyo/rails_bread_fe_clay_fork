import React, { useContext } from 'react';
import loadingAnimation from './../Assets/Animation-1707339909532.gif';

const Loading = () => {
  // Render the loading animation if isAnimating is true
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={loadingAnimation} alt="Loading..." />
    </div>
  );
};

export default Loading;


