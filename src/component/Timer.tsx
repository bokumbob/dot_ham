import React, { useState, useRef, useEffect } from 'react';
// import { setLocal, getLocal } from '../etc/helper/helpers';

const Timer = ({ min, sec }: any) => {
  return (
    <>
      <div className="timer-box">
        <p className="timer">
          {min} {sec}
        </p>
      </div>
    </>
  );
};

export default Timer;
