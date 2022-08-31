import { Time } from 'etc/ParamsInterface';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import { currentTime } from 'state/timer';

const Timer = ({ active, setActive }: Time) => {
  const currentTimeState = useSelector(
    (state: RootState) => state.timerReducer.currentTime
  );
  const timeState = useSelector((state: RootState) => state.timerReducer.time);
  const startTimeState = useSelector(
    (state: RootState) => state.userReducer.start
  );
  const dispatch = useDispatch();
  const timer = useRef<any>();
  const [catchTime, setCatchTime] = useState<number>(5);

  useEffect(() => {
    dispatch(currentTime(Date.now()));
  }, []);

  useEffect(() => {
    if (startTimeState > 1 && timeState > 1) {
      const timeFix =
        timeState - Math.floor((currentTimeState - startTimeState) / 1000);
      setCatchTime(timeFix);
    } else {
      setCatchTime(5);
    }
    timer.current = setInterval(() => {
      setCatchTime(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer.current);
  }, [startTimeState, timeState, currentTimeState]);

  useEffect(() => {
    if (catchTime <= 0) {
      clearInterval(timer.current);
      setActive(true);
      setCatchTime(0);
    }
  }, [catchTime]);

  useEffect(() => {
    if (!active && catchTime <= 0) {
      setCatchTime(900);
      timer.current = setInterval(() => {
        setCatchTime(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer.current);
  }, [active]);

  return (
    <div>
      <h3>햄스터를 만나기까지...{catchTime}</h3>
    </div>
  );
};

export default Timer;
