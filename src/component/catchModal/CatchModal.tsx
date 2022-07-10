import { CatchModalInterface } from 'etc/ParamsInterface';
import React from 'react';
import './catchModal.scss';

const CatchModal = ({ hamster, setCatchHam }: CatchModalInterface) => {
  return (
    <div className="catch-wrap">
      <p>앗! {hamster.name}햄스터를 잡았다!</p>
      <button onClick={() => setCatchHam(false)}>확인</button>
    </div>
  );
};

export default CatchModal;
