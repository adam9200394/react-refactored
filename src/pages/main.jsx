import React from 'react';
import ParallaxBackground from '../components/ParallaxBg';
import imageUrl from '../static/images/main-bg.png';

const Main = () => {
  return (
    <div>
      <ParallaxBackground imageUrl={imageUrl} />
      
      
    </div>
  );
};

export default Main;
