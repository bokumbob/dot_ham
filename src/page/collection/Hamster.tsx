import React from 'react';

const Hamster = ({ hamster, setDet, setHamster }: any) => {
  return (
    <div
      className={hamster.catch ? 'hamster-wrap' : 'hamster-wrap none'}
      onClick={() => {
        if (hamster.catch) {
          setDet(true);
          setHamster(hamster);
        }
      }}
    >
      <div className="img-wrap">
        <img
          src={
            hamster.catch
              ? `http://titmousu.dothome.co.kr/img/${hamster.name}s.png`
              : 'http://titmousu.dothome.co.kr/img/hamsterShadow.png'
          }
        />
      </div>
      <p>{hamster.catch ? hamster.name : '???'}</p>
    </div>
  );
};

export default Hamster;
