import Canvas from 'component/canvas/Canvas';
import Header from 'component/header/Header';
import TitleHeader from 'component/title-header/TitleHeader';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'state';
import {
  seedNumber,
  seedNumberReset,
  seeds,
  start,
} from 'state/seedGameAction';
import SeedGameTouchBox from './SeedGameTouchBox';
import './seedGame.scss';
import GameTimer from './GameTimer';
import NextBtn from 'component/common/NextBtn';

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

export default SeedGame;
