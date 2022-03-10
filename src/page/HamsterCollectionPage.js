import HamsterCollectionItem from '../component/HamsterCollectionItem'
import hamsterList from '../model/hamsterList'
import hamsterListHelper from '../model/hamsterListHelper'

const HamsterCollectionList = ({currentHamster}) => {

    return(
        <>
        {hamsterList.map(item => <HamsterCollectionItem key={item.id} item={item} hamsterList={hamsterList} currentHamster={currentHamster}/>)}
        </>
    )
    }
export default HamsterCollectionList