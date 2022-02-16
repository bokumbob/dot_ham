import React, { useState, useRef, useEffect } from 'react';

const Timer = ({active, activeStatus}) => {
    const [min, setMin] = useState(15);
    const [sec, setSec] = useState(0);
    const time = useRef(1);
    const timerId = useRef(null);

    useEffect(()=>{
        timerId.current = setInterval(()=>{
            setMin(parseInt(time.current / 60))
            setSec(time.current % 60)
            time.current -= 1;      
        }, 1000);
        
        return ()=> clearInterval(timerId)
    }, [])
  
    const ahamActive = () => {
        active(time.current)
        console.log("aa")
    }

    useEffect(()=>{
        if(time.current<0){
            console.log("타임아웃")
            clearInterval(timerId.current)
            ahamActive()
            // timeReset()
        }
    }, [sec])

    useEffect(()=>{
        if(!activeStatus){
            time.current = 900
        }
    }, [activeStatus])

    // function timeReset(){
    //     reset(900)
    //     console.log("==========")
    // }
    
    return (
        <>
         <div className="timer-box">
             <p className="timer">{min} {sec}</p>
             </div>   
        </>
    );
};

export default Timer;