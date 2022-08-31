import React, { useEffect, useRef, useState } from 'react';
import SeedGamePop from './SeedGamePop';

const GameTimer = () => {
  const [time, setTime] = useState<number>(60);
  const timer = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (time < 1) {
      clearInterval(timer.current);
    } else {
      timer.current = setInterval(() => {
        setTime(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer.current);
  }, [time]);

  return (
    <>
      <p className="timer">{time}</p>
      {time < 1 && <SeedGamePop />}
    </>
  );
};

export default GameTimer;
