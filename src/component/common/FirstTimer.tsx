import { Time } from 'etc/ParamsInterface';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import { currentTime, time } from 'state/timer';

const FirstTimer = ({ setActive }: Time) => {
  const [catchTime, setCatchTime] = useState<number>(5);
  const timer = useRef<any>();

  useEffect(() => {
    timer.current = setInterval(() => {
      setCatchTime(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer.current);
  }, []);

  useEffect(() => {
    if (catchTime <= 0) {
      clearInterval(timer.current);
      setActive(true);
    }
  }, [catchTime]);

  return (
    <div>
      <h3>햄스터를 만나기까지...{catchTime}</h3>
    </div>
  );
};

export default FirstTimer;
