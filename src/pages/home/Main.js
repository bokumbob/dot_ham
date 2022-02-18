// import React, { useEffect } from 'react'
import './main.scss'
import { useState } from 'react'
import Timer from 'component/main/Timer'
// import classNames from 'classnames'
import hamsterList from 'model/hamsterList'
import collectedHamsterList from 'model/hamsterCollection'


export default function Main() {
    // console.log(collectedHamsterList)
    
    // const hamster = document.querySelector(".hamster")
    const hamsterState = { show: false, name: "", id: "", activeStatus: false }
    const [hamsterShow, setHamsterShow] = useState(false);
    const [hamsterActiveS, setHamsterActiveS] = useState(false);
    const [activeTime, setActiveTime] = useState("");
    const [hamsterId, setHamsterId] = useState("");
    
    const hamsterIdMaker = hamsterList.allHamsterLists.filter(item => item.id === hamsterId)

    const hamActive = (time)=>{
        setActiveTime(time)
        if(activeTime <=0){
            // const seeds = document.querySelector(".seeds");
            // seeds.classList.add("active")
            // console.log("hamactive")
            setHamsterActiveS(true)
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
            setHamsterShow(true)
            stateAssign({show : hamsterShow})
            setHamsterActiveS(false)
            stateAssign({activeStatus : hamsterActiveS})

            // collectedHamsterList
            localStorage.setItem("hamsterId", Math.floor(Math.random()*hamsterList.allHamsterLists.length))
            setHamsterId(localStorage.getItem("hamsterId"))
            // console.log(hamsterId)
            localStorage.setItem("hamster", "hamham")
            // console.log(hamsterActiveS)
        }
        //  else if(hamsterActiveS === false){
        //     setHamsterShow(false)
        //     stateAssign({show : hamsterShow})
        // }
    }

    // const timeReset = (resetTime)=>{
    //         setActiveTime(+resetTime)
    //         console.log(activeTime+"액티브타이")
    // }

    function stateAssign(newState){
        Object.assign( hamsterState, newState)
    }

    const popClose = () => {
        setHamsterShow(false)
        stateAssign({show : hamsterShow})
    }

    const ShowHamster = () => {
        return (
            <div className='background'>
                <article className='pop' onClick={catchHamster}>
                    {/* <h2>hiddenTitle</h2> */}
                        {hamsterIdMaker.map((item, index) => {
                            return (
                                <div className='your-hamster' key={index}>
                                    <p>{item.name}</p>
                                    <p>{item.description}</p>
                                    <img src = {item.imgUrl} alt={item.name} />
                                </div>
                            )
                        })}
                </article>
                <p>앗, 야생의 햄스터가 나타났다!</p>
                <div className="pop-x" onClick={popClose}><p>x</p></div>
                {/* onClick={timeReset} */}
            </div>
        )
    }

    const HideHamster = () => {
        return (
            <>
                <article className={hamsterActiveS ? 'seeds active' : 'seeds'} onClick={hamsterActiveS ? catchHamster : null}></article>
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