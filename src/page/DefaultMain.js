import Timer from '../component/Timer'
import ShowHamster from '../component/ShowHamster'
import {defaultHamster, catchHamster} from '../model/hamsterListHelper'
import {getLocal, JsonPar} from '../helpers'
// import {stateAssign} from '../helpers'

const DefaultMain = ({active, activeStatus, hamsterShow, hamsterSetShow, allClear, setAllClear, hamsterList, setHamsterList}) => {
    // const {allHamsterLists, getHamsterList} = hamsterList;
    const clickSeeds = () => {
        hamsterSetShow(true)
        active(false)
        if(!getLocal("getHamsterList")){
            defaultHamster()
        } else if (getLocal("getHamsterList")){
            if (JsonPar(getLocal("getHamsterList")).length < 1){
                hamsterSetShow(false)
                active(true)
                setAllClear(true)
            }
            catchHamster()
        }
    } 
    const popClose = () => {
        hamsterSetShow(false)
    }
    return (
        <div className="container">
            <section className="hamster-catch">
                <h2 className="hidden">hiddenTitle</h2>
                <div className="center">
                <Timer active={active} activeStatus={activeStatus} />
                <button disabled={allClear ? true : false} className={activeStatus ? 'seeds active' : 'seeds'} onClick={activeStatus ? clickSeeds : null}></button>
                {hamsterShow && <ShowHamster popClose={popClose} />}
                </div>
            </section>
        </div>
    )
}

export default DefaultMain