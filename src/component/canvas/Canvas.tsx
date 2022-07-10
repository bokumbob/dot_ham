import { imgLink } from 'etc/imgLink';
import React, { useEffect } from 'react';
import './canvas.scss';

interface Cv {
  imgUrl: string;
}

const Canvas = ({ imgUrl }: Cv) => {
  console.log(imgUrl);
  useEffect(() => {
    const canvas = document.querySelector('.seed-canvas') as HTMLCanvasElement;
    canvas.width = 390;
    canvas.height = 425;
    const ctx = canvas.getContext('2d');
    const seed = new Image();
    // canvas.style.backgroundImage = `url(${imgLink}${imgUrl}.png)`;
    seed.src = `${imgLink}${imgUrl}.png`;
    seed.onload = () => {
      ctx?.drawImage(seed, 0, 0, 390, 425, 0, 0, 390, 425);
    };
  }, [imgUrl]);
  return (
    <>
      <canvas className="seed-canvas"></canvas>
    </>
  );
};

export default Canvas;
