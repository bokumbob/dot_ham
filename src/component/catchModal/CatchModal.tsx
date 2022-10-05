import NextBtn from 'component/common/NextBtn';
import { imgLink } from 'etc/imgLink';
import { CatchModalInterface } from 'etc/ParamsInterface';
import React from 'react';
import styled from 'styled-components';
import './catchModal.scss';

const Hamster = styled.div`
  width: 390px;
  height: 390px;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    &.ro {
      animation: rotate 10s infinite cubic-bezier(0.33, 0.28, 0.83, 0.86);
    }
    @keyframes rotate {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  }
`;

const CatchModal = ({ hamster, setHamPop }: CatchModalInterface) => {
  return (
    <div className="catch-wrap">
      <Hamster>
        <img className="ro" src={`${imgLink}Congratulations.png`} />
        <img src={`${imgLink}${hamster.name}s.png`} />
      </Hamster>
      <div className="text-wrap">
        <p>
          앗!
          {` ${hamster.name} `}
          햄스터를 잡았다!
        </p>
        <p>{hamster.description}</p>
      </div>
      <NextBtn text="닫기" onClick={() => setHamPop(false)}></NextBtn>
    </div>
  );
};

export default CatchModal;
