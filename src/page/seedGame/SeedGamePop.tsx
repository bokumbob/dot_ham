import { myData } from 'etc/fbase';
import { SeedGamePopInterface } from 'etc/ParamsInterface';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import { reset, seedNumberReset, start } from 'state/seedGameAction';
import styled from 'styled-components';
import { ranking } from './seedGameFunction';

const SeedGamePop = ({ setTime, dispatch, setTouch }: SeedGamePopInterface) => {
  const seedsState = useSelector((state: RootState) =>
    Math.floor(state.seedGameReducer.seeds / 5)
  );
  const [highSeed, sethighSeed] = useState<any>();

  useEffect(() => {
    ranking(0).then(res => sethighSeed(res));
  }, [seedsState]);

  return (
    <PopDiv>
      <div>
        <p>타임오버!</p>
        <p>내 기록은? {seedsState}개</p>
        <p>최고 기록은 {highSeed}개</p>
        <BtnDiv>
          <button onClick={() => myData('seeds', highSeed)}>
            기록 저장하기
          </button>
          <button
            onClick={() => {
              setTime(10);
              dispatch(reset());
              setTouch(5);
            }}
          >
            다시 하기
          </button>
        </BtnDiv>
        <button
          onClick={() => {
            dispatch(start());
            dispatch(seedNumberReset());
          }}
        >
          닫기
        </button>
      </div>
    </PopDiv>
  );
};
const PopDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  z-index: 3;
  > div {
    width: 390px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  button {
    cursor: pointer;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  & button {
    width: 45%;
    height: 50px;
    border-radius: 15px;
    border: none;
  }
`;

export default SeedGamePop;
