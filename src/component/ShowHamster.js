import { getLocal } from "../helpers"
import hamsterList from "../model/hamsterList"

const ShowHamster = ({popClose, currentHamster}) => {

    const obj = currentHamster[0]
    const {name, description, imgUrl} = obj

    return (
        <div className='background'>
            <article className='pop'>
                <h2>{name}</h2>
                <h3>{description}</h3>
                <img src={imgUrl} />
            </article>
            <p>앗, 야생의 햄스터가 나타났다!</p>
            <div className="pop-x" onClick={popClose}><p>x</p></div>
        </div>
    )
}

export default ShowHamster