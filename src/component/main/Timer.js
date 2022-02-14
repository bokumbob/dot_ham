import React, { useState, useRef, useEffect } from 'react';

const Timer = () => {
    const [min, setMin] = useState(15);
    const [sec, setSec] = useState(0);
    const time = useRef(900);
    const timerId = useRef(null);

    useEffect(()=>{
        timerId.current = setInterval(()=>{
            setMin(parseInt(time.current / 60))
            setSec(time.current % 60)
            time.current -= 1;      
        }, 1000);
        
        return ()=> clearInterval(timerId)
    }, [])
  

    useEffect(()=>{
        if(time.current<0){
            console.log("타임아웃")
            clearInterval(timerId.current)
        }
    }, [sec])
    
    return (
        <>
         <div className="timer-box">
             <p className="timer">{min} {sec}</p>
             </div>   
        </>
    );
};

export default Timer;