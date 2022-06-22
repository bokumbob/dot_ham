import React, { useEffect } from 'react';

const DefaultCanvas = () => {
  useEffect(() => {
    const canvas = document.querySelector('.seed-canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const seed = new Image();
    seed.src = './img/seed.png';
    seed.onload = () => {
      ctx?.drawImage(seed, 0, 0, 300, 160);
    };
  }, []);
  return (
    <>
      <canvas className="seed-canvas"></canvas>
    </>
  );
};

export default DefaultCanvas;
