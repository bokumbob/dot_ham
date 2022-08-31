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

const Canvas = ({ imgUrl, seedImg, basket }: Cv) => {
  // const animateRef = useRef<any>();

  // const render = () => {
  //   animateRef.current = requestAnimationFrame(render);
  // };

  return (
    <CanvasWrap>
      {basket && <Basket src={`${imgLink}${basket}.png`} />}
      {seedImg && <Seed src={`${imgLink}${seedImg}.png`} />}
      {imgUrl && <Back src={`${imgLink}${imgUrl}.png`} />}
    </CanvasWrap>
  );
};

export default Canvas;
