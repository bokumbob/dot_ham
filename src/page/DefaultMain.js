import Timer from '../component/Timer'
import ShowHamster from '../component/ShowHamster'
import {defaultHamster, catchHamster} from '../model/hamsterListHelper'
import {getLocal, JsonPar} from '../helpers'
// import {stateAssign} from '../helpers'

const DefaultMain = ({clickSeeds, popClose, hamsterActiveS, setHamsterActiveS, allClear,hamsterShow, currentHamster}) => {
    // const {allHamsterLists, getHamsterList} = hamsterList;

    return (
        <div className="container">
            <section className="hamster-catch">
                <h2 className="hidden">hiddenTitle</h2>
                <div className="center">
                <Timer active={setHamsterActiveS} activeStatus={hamsterActiveS} />
                <button disabled={allClear ? true : false} className={hamsterActiveS ? 'seeds active' : 'seeds'} onClick={hamsterActiveS ? clickSeeds : null}></button>
                {hamsterShow && <ShowHamster popClose={popClose} currentHamster={currentHamster} />}
                </div>
            </section>
        </div>
    )
}

export default DefaultMain