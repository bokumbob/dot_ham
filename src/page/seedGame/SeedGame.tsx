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
  // 게임이 끝났을 때 start false 되게
  // 끝났을 때 랭킹 저장 기능
  // 총 갯수 알려주기
  // 뉴 레코드인지 알려주기
  // 최고 기록만 기록하기

  // 현재 맨 마지막 갉아먹기에서 seedsState 가 2 증가하는 버그 발생
  // 해결 완

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
