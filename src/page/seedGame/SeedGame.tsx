import Canvas from 'component/canvas/Canvas';
import TitleHeader from 'component/title-header/TitleHeader';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'state';
import { seedNumber, seedNumberReset, start } from 'state/seedGameAction';
import SeedGameTouchBox from './SeedGameTouchBox';
import './seedGame.scss';
import GameTimer from './GameTimer';
import NextBtn from 'component/common/NextBtn';
import styled from 'styled-components';

const SeedGame = () => {
  const startState = useSelector(
    (state: RootState) => state.seedGameReducer.start
  );
  const seedsState = useSelector(
    (state: RootState) => state.seedGameReducer.seeds
  );
  const seedNumberState = useSelector(
    (state: RootState) => state.seedGameReducer.seedNumber
  );

  const dispatch = useDispatch();

  const clickCount = (click: any) => {
    if (click <= 1) dispatch(seedNumber());
  };

  useEffect(() => {
    if (seedNumberState > 0 && seedNumberState % 5 === 0) {
      dispatch(seedNumberReset());
    }
  }, [seedNumberState]);

  useEffect(() => {
    if (seedsState < 1) dispatch(seedNumberReset());
  }, [seedsState]);

  useEffect(() => {
    if (startState) dispatch(start());
  }, []);

  return (
    <div>
      <TitleHeader text="해씨원정대" />
      {startState && (
        <p className="current-seeds">현재 {Math.floor(seedsState / 5)}개</p>
      )}
      <div className="seedGame-wrap">
        <Canvas imgUrl={`seedGame${seedNumberState}`} />
        {startState && (
          <>
            <SeedGameTouchBox dispatch={dispatch} clickCount={clickCount} />
            <GameTimer />
          </>
        )}
        <NextBtn
          text={startState ? '그만하기!' : '시작하기!'}
          onClick={() => dispatch(start())}
        />
      </div>
    </div>
  );
};

const StartWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export default SeedGame;
