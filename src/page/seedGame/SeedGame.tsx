import Canvas from 'component/canvas/Canvas';
import Header from 'component/header/Header';
import TitleHeader from 'component/title-header/TitleHeader';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'state';
import { start } from 'state/seedGameAction';
import SeedGameTouchBox from './SeedGameTouchBox';
import './seedGame.scss';

// const P = () => {
//   return (
//     <div style={{ backgroundColor: 'aqua', width: 500, height: 300 }}></div>
//   );
// };

const SeedGame = () => {
  const startState = useSelector(
    (state: RootState) => state.seedGameReducer.start
  );
  const seedsState = useSelector(
    (state: RootState) => state.seedGameReducer.seeds
  );
  const [seedNumber, setSeedNumber] = useState<number>(0);

  const clickCount = (click: any) => {
    if (click <= 1) setSeedNumber(prev => prev + 1);
  };
  const dispatch = useDispatch();
  return (
    <div>
      <TitleHeader text="해씨원정대" />
      <div className="seedGame-wrap">
        <Canvas imgUrl={`seedGame${seedNumber}`} />
        {startState && <SeedGameTouchBox clickCount={clickCount} />}
      </div>
      <p className="start-btn" onClick={() => dispatch(start())}>
        시작하기!
      </p>
    </div>
  );
};

export default SeedGame;
