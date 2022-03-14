import HamsterCollectionItem from '../component/HamsterCollectionItem'
import hamsterList from '../model/hamsterList'
import hamsterListHelper from '../model/hamsterListHelper'

const HamsterCollectionList = ({getHamsterAllList}) => {
    
    return(
        <>
        {hamsterList.map(item => <HamsterCollectionItem key={item.id} item={item} hamsterList={hamsterList} getHamsterAllList={getHamsterAllList} />)}
        </>
    )
    }
export default HamsterCollectionList