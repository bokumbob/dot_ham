import React, { useState, useRef, useEffect } from 'react';
import {setLocal, getLocal} from '../helpers'

const Timer = ({min, sec}) => {

    
    return (
        <>
        <div className="timer-box">
             <p className="timer">{min} {sec}</p>
        </div>   
        </>
    );
};

export default Timer;