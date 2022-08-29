import { imgLink } from 'etc/imgLink';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import styled from 'styled-components';
import './canvas.scss';

interface Cv {
  imgUrl: string;
  seedImg?: string;
  basket?: string;
}

const Seed = styled.img`
  position: absolute;
  top: 60px;
  z-index: 1;
  animation: seedAnimate 1.5s infinite;
  @keyframes seedAnimate {
    0% {
      transform: rotate(0deg);
    }
    15% {
      transform: rotate(-3deg);
    }
    40% {
      transform: rotate(6deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
const Basket = styled.img`
  position: absolute;
  bottom: 100px;
  z-index: 3;
`;

const Back = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 75px;
`;

const CanvasWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 425px;
`;

// styled component는 리액트 컴포 안에 있으면 계속 리렌더링 된다
// 그러므로 밖에 꺼내서 작성하자

const Canvas = ({ imgUrl, seedImg, basket }: Cv) => {
  const animateRef = useRef<any>();
  const canvasRef = useRef<any>();
  const seed = new Image();
  const startState = useSelector(
    (state: RootState) => state.seedGameReducer.start
  );

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext('2d');
  //   seed.src = `${imgLink}${imgUrl}.png`;
  //   seed.onload = () => {
  //     canvas.width = seed.width;
  //     canvas.height = 425;
  //     ctx?.drawImage(seed, 0, 0, 360, 425, 0, 0, 390, 425);
  //   };
  // }, []);

  // 리액트에서 리렌더가 발생하지 않으면서 이전 값을 기억하게 하려면?
  // useRef = 뜨문뜨문 값이 업데이트 돼서 안됨

  const render = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    seed.src = `${imgLink}${imgUrl}.png`;
    seed.onload = () => {
      canvas.width = 390;
      canvas.height = 425;
      ctx?.drawImage(seed, 0, 0, 390, 425, 0, 0, 390, 425);
    };
    animateRef.current = requestAnimationFrame(render);
  };

  // useEffect(() => {
  //   if (startState && imgUrl.includes('seedGame')) {
  //     animateRef.current = requestAnimationFrame(render);
  //   }
  //   return () => {
  //     cancelAnimationFrame(animateRef.current);
  //   };
  // });

  return (
    <CanvasWrap>
      {basket && <Basket src={`${imgLink}${basket}.png`} />}
      {seedImg && <Seed src={`${imgLink}${seedImg}.png`} />}
      {imgUrl && <Back src={`${imgLink}${imgUrl}.png`} />}
      {/* <canvas ref={canvasRef} className="seed-canvas"></canvas> */}
    </CanvasWrap>
  );
};

export default Canvas;
