import NextBtn from 'component/common/NextBtn';
import { addData, allData, myData } from 'etc/fbase';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import { seedNumberReset, seedsReset, start } from 'state/seedGameAction';
import styled from 'styled-components';
import GameRanking from './GameRanking';
import { ranking } from './seedGameFunction';

const SeedGamePop = () => {
  const seedsState = useSelector((state: RootState) =>
    Math.floor(state.seedGameReducer.seeds / 5)
  );
  const dispatch = useDispatch();
  const [highSeed, sethighSeed] = useState<any>();
  const [change, setChange] = useState<boolean>(false);

  useEffect(() => {
    const compare = async () => {
      await ranking(seedsState).then(res => sethighSeed(res));
    };
    compare();
  }, [seedsState]);

  useEffect(() => {
    if (change) setChange(false);
  }, [change]);

  return (
    <PopDiv>
      <div>
        <p>타임오버!</p>
        <RecordText>
          <p>최고 기록은 {highSeed}개</p>
          <p>내 기록은? {seedsState}개</p>
        </RecordText>
        <GameRanking change={change} />
        <BtnDiv>
          <NextBtn
            text="최고 기록 저장하기"
            onClick={() => {
              addData('seeds', highSeed);
              setChange(true);
            }}
          />
          <NextBtn
            text="닫기"
            color="#fff"
            onClick={() => {
              dispatch(start());
              dispatch(seedNumberReset());
              dispatch(seedsReset());
            }}
          />
        </BtnDiv>
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
  z-index: 60;
  > div {
    width: 390px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p {
      font-size: 30px;
    }
  }
  button {
    cursor: pointer;
  }
`;

const RecordText = styled.div`
  width: 100%;
  p {
    line-height: 50px;
    font-size: 20px !important;
  }
  p:first-child {
    color: #ff5b00;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 45%;
    height: 50px;
    border-radius: 15px;
    border: none;
    position: unset !important;
    transform: unset;
    font-family: inherit;
    margin-top: unset;
  }
`;

export default SeedGamePop;
