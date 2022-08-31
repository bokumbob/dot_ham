import { SeedGameTouchBoxInterface } from 'etc/ParamsInterface';
import React, { useEffect, useRef, useState } from 'react';
import { seeds, start } from 'state/seedGameAction';
import styled from 'styled-components';
import SeedGamePop from './SeedGamePop';

interface Touch2 {
  top?: string;
  left?: string;
}

const SeedGameTouchBox = ({
  clickCount,
  dispatch,
}: SeedGameTouchBoxInterface) => {
  const [top, setTop] = useState<string>();
  const [left, setLeft] = useState<string>();
  const [touch, setTouch] = useState<number>(5);
  // const [time, setTime] = useState<number>(10);
  // const timer = useRef<NodeJS.Timer>();

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
  }, []);

  useEffect(() => {
    if (touch < 1) {
      random();
      dispatch(seeds());
      setTouch(5);
    }
  }, [touch]);

  // useEffect(() => {
  //   if (time < 1) {
  //     clearInterval(timer.current);
  //     // dispatch(start());
  //   } else {
  //     timer.current = setInterval(() => {
  //       setTime(prev => prev - 1);
  //     }, 1000);
  //   }
  //   return () => clearInterval(timer.current);
  // }, [time]);

  return (
    <>
      {/* {time} */}
      <Touch
        onClick={() => {
          count();
          // time > 1 && count();
          clickCount(touch);
          // time > 1 && clickCount(touch);
        }}
        top={top + '%'}
        left={left + '%'}
      />
      {/* {time < 1 && (
        <SeedGamePop
          setTime={setTime}
          setTouch={setTouch}
          dispatch={dispatch}
        />
      )} */}
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
  z-index: 2;
`;

export default SeedGameTouchBox;
