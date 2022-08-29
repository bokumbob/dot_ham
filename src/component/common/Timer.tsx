import { Time } from 'etc/ParamsInterface';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import { currentTime, time } from 'state/timer';

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
  // const currentTimer = useRef<any>();
  const [catchTime, setCatchTime] = useState<number>(5);

  // 현재 시간 계속 업데이트

  useEffect(() => {
    // currentTimer.current = setInterval(() => {
    dispatch(currentTime(Date.now()));
    // }, 1000);
    // return () => clearInterval(currentTimer.current);
  }, []);

  // 남은 시간 계산해서 반영
  // 그냥 페이지에 처음 접한 시간만 딱 저장해서 해도 될 듯?
  // 계속 최근 시간을 갱신할 필요 없이

  useEffect(() => {
    if (startTimeState > 1 && timeState > 1) {
      const timeFix =
        timeState - Math.floor((currentTimeState - startTimeState) / 1000);
      // console.log(timeFix);
      setCatchTime(timeFix);
    } else {
      setCatchTime(5);
    }
    timer.current = setInterval(() => {
      setCatchTime(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer.current);
  }, [startTimeState, timeState, currentTimeState]);

  // 시간이 0이 되면 인터벌 삭제

  useEffect(() => {
    if (catchTime < 1) {
      // clearInterval(currentTimer.current);
      clearInterval(timer.current);
      setActive(true);
    }
    return () => clearInterval(timer.current);
    // clearInterval(currentTimer.current);
  }, [catchTime]);

  // 액티브 바뀌면 새 시간 넣어주세요

  useEffect(() => {
    if (!active) {
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
