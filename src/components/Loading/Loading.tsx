import React, { useContext } from 'react';
import LoadingContext from './LoadingContext';
import loadingAnimation from './../Assets/Animation-1707339909532.gif';

const Loading = () => {
  const { isAnimating } = useContext(LoadingContext);

  // Render the loading animation if isAnimating is true
  return isAnimating ? (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={loadingAnimation} alt="Loading..." />
    </div>
  ) : null;
};

export default Loading;


