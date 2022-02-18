import hamsterList from "./hamsterList";


const getHamster = localStorage.getItem("hamsterId");
const getHamsterSame = hamsterList.allHamsterLists.filter(item => item.id !== getHamster)

const collectedHamsterList = [
    {
        id: getHamsterSame[0].id,
        name: getHamsterSame[0].name,
        imgUrl: getHamsterSame[0].imgUrl,
        description: getHamsterSame[0].description,
    }
]


const hamsterFillter = (getham) => {
    
}

export default collectedHamsterList

// localStorage.getItem()