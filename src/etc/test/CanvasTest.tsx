import { imgLink } from 'etc/imgLink';
import React, { useEffect, useRef, useState } from 'react';

const CanvasTest = () => {
  const canvasRef = useRef<any>();
  let ctx: any;
  const frame = useRef<number>(0);
  const frameEl = useRef<number>(0);
  const frameEHold = useRef<number>(10);
  const frameMax = useRef<number>(7);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [offX, setOffX] = useState<number>(0);
  const [offY, setOffY] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    // console.log(img.height * scale);
    ctx = canvasRef.current.getContext('2d');
    img.onload = () => {
      canvasRef.current.width = 390;
      canvasRef.current.height = 425;
      ctx.drawImage(
        img,
        frame.current * (img.width / frameMax.current),
        0,
        img.width / frameMax.current,
        img.height,
        x - offX,
        y - offY,
        (img.width / frameMax.current) * scale,
        img.height * scale
      );
    };
  }, [canvasRef.current]);

  const img = new Image();
  img.src = `${imgLink}catchSeeds.png`;

  const render = () => {
    window.requestAnimationFrame(render);
    frameEl.current = frameEl.current + 1;
  };
  console.log(frameEl.current % frameEHold.current === 1);
  if (frameEl.current % frameEHold.current === 1) {
    if (frame < frameMax) {
      frame.current = frame.current + 1;
    } else {
      //   console.log(frame);
      frame.current = 0;
    }
  }

  useEffect(() => {
    // render();
  }, []);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default CanvasTest;
