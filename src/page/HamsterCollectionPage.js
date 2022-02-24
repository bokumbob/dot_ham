import hamsterList from '../model/hamsterList'
import hamsterListHelper from '../model/hamsterListHelper'

const HamsterCollectionList = () => {
    const {allHamsterLists, getHamsterList} = hamsterList
    return(
        <>
        {allHamsterLists.map(item => {
            return(
                <>
                <img src={item.imgUrl} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                </>
            )
        })}
        </>
    )
}

export default HamsterCollectionList