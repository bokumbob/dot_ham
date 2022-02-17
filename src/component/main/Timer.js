import React, { useState, useRef, useEffect } from 'react';

const Timer = ({active, activeStatus}) => {
    const [min, setMin] = useState(localStorage.getItem("min"));
    const [sec, setSec] = useState(localStorage.getItem("sec"));
    const time = useRef(localStorage.getItem("time"));
    const timerId = useRef(null);
    
    localStorage.setItem("min", min)
    localStorage.setItem("sec", sec)

    useEffect(()=>{
        if(!activeStatus){
            if(time.current<=0){
                time.current = 5;
            }
            if(localStorage.getItem("hamster")){
                timerId.current = setInterval(()=>{
                    setMin(parseInt(time.current / 60))
                    setSec(time.current % 60)
                    time.current -= 1;
                    // localStorage.setItem("time", time.current)
                }, 1000);
            }
        }
        // console.log("나도실해오딤")
        return ()=> clearInterval(timerId)
    }, [activeStatus])


    useEffect(()=>{
        if(!localStorage.getItem("hamster")){
            time.current = 5
            timerId.current = setInterval(()=>{
                setMin(parseInt(time.current / 60))
                setSec(time.current % 60)
                time.current -= 1;      
            }, 1000);
        }
        
        return ()=> clearInterval(timerId)
    }, [])
  
    const ahamActive = () => {
        active(time.current)
        // console.log("aa")
    }

    useEffect(()=>{
        if(time.current<0){
            console.log("타임아웃")
            clearInterval(timerId.current)
            ahamActive()
            // timeReset()
        }
    }, [sec])



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