import NextBtn from 'component/common/NextBtn';
import { imgLink } from 'etc/imgLink';
import { DF } from 'etc/ParamsInterface';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { text } from './defaultText';

const DefaultFirst = ({ hamPop }: DF) => {
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    if (page === 12 && hamPop === true) setPage(prev => prev + 1);
  }, [hamPop]);

  return (
    // background={page >= 9 ? 'transparant' : ''}
    <>
      {page === 12 || page === 15 ? (
        <ClickBack>
          <Click right={page === 15 ? '0px' : ''}>
            <p>{text[page]}!</p>
            <p>↓</p>
          </Click>
        </ClickBack>
      ) : (
        <Wrap>
          {page < 12 && <p>{text[page]}</p>}
          {page >= 13 && !hamPop && <p>{text[page]}</p>}
          {page === 4 && <HamsterImg src={`${imgLink}정글리안.png`} />}
          {page >= 5 && page < 9 && <Sprite src={`${imgLink}정글리안s.png`} />}
          {page >= 9 && page < 12 && (
            <HamsterImg src={`${imgLink}정글리안.png`} />
          )}
          {page >= 13 && !hamPop && (
            <HamsterImg src={`${imgLink}정글리안.png`} />
          )}
          {page < 12 && (
            <NextBtn
              text={'다음'}
              onClick={() => setPage(prev => prev + 1)}
            ></NextBtn>
          )}
          {page >= 13 && !hamPop && (
            <NextBtn
              text={'다음'}
              onClick={() => setPage(prev => prev + 1)}
            ></NextBtn>
          )}
        </Wrap>
      )}
    </>
  );
};

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 31;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  overflow: hidden;
  p {
    text-align: center;
    padding: 0 75px;
  }
`;

const HamsterImg = styled.img`
  position: absolute;
  bottom: -100px;
  right: -50px;
  z-index: 99;
  transform: rotate(-30deg);
  animation: showHam cubic-bezier(0.78, 0.01, 0, 1.47) 0.7s;
  @keyframes showHam {
    0% {
      bottom: -300px;
      right: -200px;
    }
    80% {
      bottom: -100px;
      right: -50px;
    }
    100% {
      bottom: -110px;
      right: -60px;
    }
  }
`;

const Sprite = styled.img`
  margin-top: 25px;
  animation: jump 0.7s cubic-bezier(0, 0.66, 0, 1.17);
  @keyframes jump {
    0% {
      margin-top: 400px;
    }
    80% {
      margin-top: -20px;
    }
    100% {
      margin-top: 0;
    }
  }
`;

interface Cl {
  right?: string;
}

const ClickBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 6;
  display: flex;
  justify-content: center;
`;

const Click = styled.div<Cl>`
  width: 150px;
  line-height: 25px;
  text-align: center;
  position: absolute;
  bottom: ${props => (props.right ? '50px  ' : '160px')};
  right: ${props => props.right && props.right};
  animation: do 0.7s ease-in-out infinite;
  @keyframes do {
    0% {
      bottom: ${props => (props.right ? '100px' : '160px')};
    }
    50% {
      bottom: ${props => (props.right ? '110px' : '170px')};
    }
    100% {
      bottom: ${props => (props.right ? '100px' : '160px')};
    }
  }
`;

export default DefaultFirst;
