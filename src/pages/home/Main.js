import React, { useEffect } from 'react'
import './main.scss'
import { useState } from 'react'
import Timer from 'component/main/Timer'
import classNames from 'classnames'


export default function Main() {
    const hamster = document.querySelector(".hamster")
    const hamsterState = { show: false, name: "", id: "", activeStatus: false }
    const [hamsterShow, setHamsterShow] = useState(false);
    const [hamsterActiveS, setHamsterActiveS] = useState(false);
    const [activeTime, setActiveTime] = useState("");

    const hamActive = (time)=>{
        setActiveTime(time)
        if(activeTime <=0){
            // const seeds = document.querySelector(".seeds");
            // seeds.classList.add("active")
            // console.log("hamactive")
            setHamsterActiveS(!hamsterActiveS)
            stateAssign({activeStatus : hamsterActiveS})
        }
    }

    // useEffect(()=>{
    //     if(activeTime < 0){
    //      const seeds = document.querySelector(".active");
    //     //  console.log("hamactive")
    //     //  console.log(activeTime)
    //         }
    //     }, [activeTime])

    const catchHamster = () => {
        if(activeTime<0){
            setHamsterShow(!hamsterShow)
            stateAssign({show : hamsterShow})
        } else {
            setHamsterShow(hamsterShow)
            setActiveTime(900)
        }
    }

    // const timeReset = (resetTime)=>{
    //         setActiveTime(+resetTime)
    //         console.log(activeTime+"액티브타이")
    // }

    function stateAssign(newState){
        Object.assign( hamsterState, newState)
    }

    const ShowHamster = () => {
        return (
            <div className='background'>
                <article className='pop' onClick={catchHamster}>
                    {/* <h2>hiddenTitle</h2> */}
                </article>
                <p>앗, 야생의 햄스터가 나타났다!</p>
                <div className="pop-x"><p>x</p></div>
                {/* onClick={timeReset} */}
            </div>
        )
    }

    const HideHamster = () => {
        return (
            <>
                <article className={hamsterActiveS ? 'seeds active' : 'seeds'} onClick={catchHamster}></article>
                {/* {classNames('seeds', {active : activeTime < 0})} */}
                {/* <article className='hamster'></article> */}
            </>
        )
    }



    return (
        <div className="container">
            <section className="hamster-catch">
                <h2 className="hidden">hiddenTitle</h2>
                <div className="center">
                    <Timer active={hamActive} activeStatus={hamsterActiveS}/>
                    {/* reset={timeReset} */}
                    {hamsterShow ? <ShowHamster /> : <HideHamster />}
                </div>
            </section>
        </div>
    )
}