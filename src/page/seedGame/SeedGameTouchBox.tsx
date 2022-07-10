import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface Touch2 {
  top?: string;
  left?: string;
}

const SeedGameTouchBox = ({ clickCount }: any) => {
  const [top, setTop] = useState<string>();
  const [left, setLeft] = useState<string>();
  const [seeds, setSeeds] = useState<number>(0);
  const [touch, setTouch] = useState<number>(5);
  const [time, setTime] = useState<number>(60);
  const timer = useRef<NodeJS.Timer>();

  const random = () => {
    // 15 ~ 60
    const a = Math.floor(Math.random() * 86).toString();
    const b = Math.floor(Math.random() * (60 - 15) + 15).toString();
    const arr = [a, b];
    setTop(arr[0]);
    setLeft(arr[1]);
  };

  const count = () => {
    setTouch(prev => prev - 1);
  };

  useEffect(() => {
    random();
    timer.current = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer.current);
  }, []);

  useEffect(() => {
    if (touch < 1) {
      random();
      setSeeds(prev => prev + 1);
      setTouch(5);
    }
  }, [touch]);

  useEffect(() => {
    if (time < 1) {
      clearInterval(timer.current);
      alert('게임오버!');
    }
  }, [time]);

  return (
    <>
      {time}
      <Touch
        onClick={() => {
          time > 1 && count();
          time > 1 && clickCount(touch);
        }}
        top={top + '%'}
        left={left + '%'}
      />
    </>
  );
};

const Touch = styled.div<Touch2>`
  width: 100px;
  height: 100px;
  background-color: aqua;
  position: absolute;
  top: ${props => props.top || '0px'};
  left: ${props => props.left || '0px'};
  z-index: 999;
`;

export default SeedGameTouchBox;
