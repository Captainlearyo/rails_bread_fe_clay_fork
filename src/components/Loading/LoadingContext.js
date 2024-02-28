import { createContext } from 'react';

const LoadingContext = createContext({
  playAnimation: (shouldPlay) => {}, // Ensure this expects a boolean argument
  isAnimating: false
});

export default LoadingContext;

