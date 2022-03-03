// import React, { useState, useRef, useEffect } from 'react';
// import {setLocal, getLocal} from '../helpers'

// const Timer = ({active, activeStatus}) => {
//     const [min, setMin] = useState(getLocal("min"));
//     const [sec, setSec] = useState(getLocal("sec"));
//     const time = useRef('');
//     const timerId = useRef(null);
    
//     setLocal("min", min)
//     setLocal("sec", sec)

//     function timer(timeCount){
//         time.current = timeCount
//         timerId.current = setInterval(()=>{
//             setMin(parseInt(time.current / 60))
//             setSec(time.current % 60)
//             time.current -= 1;      
//         }, 1000);
//     }

//     useEffect(()=>{
//         if(!activeStatus){
//         if(!getLocal("getHamsterList")){
//             timer(5)
//         } else if(getLocal("getHamsterList")){
//                 timer(3)
//             }
//         }
//         return ()=> clearInterval(timerId)
//     }, [activeStatus])

//     useEffect(()=>{
//         if(time.current<0){
//             clearInterval(timerId.current)
//             active(true)
//         }
//     }, [sec])
    
//     return (
//         <>
//         <div className="timer-box">
//              <p className="timer">{min} {sec}</p>
//         </div>   
//         </>
//     );
// };

// export default Timer;