import React from 'react'
import './main.scss'
import { useState } from 'react'


export default function Main() {
    const hamster = document.querySelector(".hamster")
    const hamsterState = { show: false, name: "", id: "" }
    const [hamsterShow, setHamsterShow] = useState(false);

    const catchHamster = () => {
        setHamsterShow(!hamsterShow)
        stateAssign({show : hamsterShow})
    }

    function stateAssign(newState){
        Object.assign( hamsterState, newState)
    }

    const ShowHamster = () => {
        return (
            <div className='background'>
                <article className='pop' onClick={catchHamster}></article>
                <p>앗, 야생의 햄스터가 나타났다!</p>
            </div>
        )
    }

    const HideHamster = () => {
        return (
            <>
                <article className='seeds' onClick={catchHamster}></article>
                <article className='hamster'></article>
            </>
        )
    }

    return (
        <div className="container">
            <section className="hamster-catch">
                <h2 className="hidden">hiddenTitle</h2>
                <div className="center">
                    {hamsterShow ? <ShowHamster /> : <HideHamster />}
                </div>
            </section>
        </div>
    )
}