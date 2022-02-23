import './main.scss'
import { useState } from 'react'
import Timer from 'component/main/Timer'
import hamsterList from 'model/hamsterList'


export default function Main() {
    const hamsterState = { show: false, name: "", id: "", activeStatus: false }
    const [hamsterShow, setHamsterShow] = useState(false);
    const [hamsterActiveS, setHamsterActiveS] = useState(false);
    const [activeTime, setActiveTime] = useState("");
    const [currentNum, setCurrentNum] = useState('')
    let [hamsterCollection, setHamsterCollection] = useState()

    const hamActive = (time)=>{
        setActiveTime(time)
        if(activeTime <=0){
            setHamsterActiveS(true)
            stateAssign({activeStatus : hamsterActiveS})
        }
    }

    const catchHamster = () => {
        if(activeTime<0){
            setHamsterShow(true)
            stateAssign({show : hamsterShow})
            setHamsterActiveS(false)
            stateAssign({activeStatus : hamsterActiveS})

            localStorage.setItem("hamster", "hamham")

            if(!localStorage.getItem("getHamList")){
                localStorage.setItem("0","0");
                const notD = hamsterList.allHamsterLists.filter(item => item.id !== '0')
                setHamsterCollection(hamsterCollection = notD)
                const StrHamsterCollection = JSON.stringify(hamsterCollection)
                localStorage.setItem("getHamList", StrHamsterCollection)

            } else if (localStorage.getItem("getHamList")){
                const prevHamsterList = JSON.parse(localStorage.getItem("getHamList"))
                const currentHamsterArr = prevHamsterList[Math.floor(Math.random() * prevHamsterList.length)]
                const currentHamsterList = prevHamsterList.filter(item => item.id !== currentHamsterArr.id) 
                setHamsterCollection(hamsterCollection = currentHamsterList)
                const StrHamsterCollection = JSON.stringify(hamsterCollection)
                localStorage.setItem("getHamList", StrHamsterCollection)
                localStorage.setItem(currentHamsterArr.id, currentHamsterArr.id)
                setCurrentNum(currentHamsterArr.id)
            }
        }
    }

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
                <article className='pop'>
                    <h2>hiddenTitle</h2>
                    {/* {hamsterCollection[0].name} */}
                        {hamsterList.allHamsterLists.map((item, index) =>  {
                            item.id == currentNum.id && 
                             <div className='your-hamster' key={index}>
                                        <p>{item.name}</p>
                                        <p>{item.description}</p>
                                        <img src = {item.imgUrl} alt={item.name} />
                                    </div>
                        })}
                </article>
                <p>앗, 야생의 햄스터가 나타났다!</p>
                <div className="pop-x" onClick={popClose}><p>x</p></div>
            </div>
        )
    }

    const HideHamster = () => {
        return (
            <>
                <article className={hamsterActiveS ? 'seeds active' : 'seeds'} onClick={hamsterActiveS ? catchHamster : null}></article>
            </>
        )
    }



    return (
        <div className="container">
            <section className="hamster-catch">
                <h2 className="hidden">hiddenTitle</h2>
                <div className="center">
                    <Timer active={hamActive} activeStatus={hamsterActiveS}/>
                    {hamsterShow ? <ShowHamster /> : <HideHamster />}
                </div>
            </section>
        </div>
    )
}