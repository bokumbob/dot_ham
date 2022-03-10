import { useEffect, useState } from "react";
import Header from "./component/Header.js"
import DefaultMain from "./page/DefaultMain.js"
import HamsterCollectionList from "./page/HamsterCollectionPage"
import './css/index.css'
import { getLocal, JsonPar, JsonStr, setLocal, useLocalStorage } from "./helpers.js";
import hamsterList from "./model/hamsterList";
// import ShowHamster from "./component/ShowHamster.js"
// import Timer from "./component/Timer.js"
// import Gethamster from "./model/Gethamster"

function App() {
  // const hamsterState = { show: false, name: "", id: "", activeStatus: false }
  const [hamsterAllList, setHamsterAllList] = useState(hamsterList)
  const [getHamsterAllList, setGetHamsterAllList] = useState()
  const [hamsterShow, setHamsterShow] = useState(false);
  const [hamsterActiveS, setHamsterActiveS] = useState(false);
  const [allClear, setAllClear] = useState(false)

  const firstHamster = () => {
    setHamsterAllList(hamsterAllList.filter(item => item.id !== '0'))

    setGetHamsterAllList(
      () => {
        const zeroHam = hamsterList.filter(item => item.id === "0")
        zeroHam[0].status = true;
        return zeroHam
    }
    )
  }
  useEffect(()=>{
    setLocal("hamsterAllList", JsonStr(hamsterAllList))
  }, [hamsterAllList])

  useEffect(()=>{
    setLocal("getHamsterAllList", JsonStr(getHamsterAllList))
  }, [getHamsterAllList])

    const hamham = () => {
      const newAllList = JsonPar(getLocal("hamsterAllList"))
      if(hamsterAllList.length <= 0){
        return alert("clear!")
        
      } else if(hamsterAllList.length > 0){
        const currentId = newAllList[Math.floor(Math.random() * newAllList.length)].id
        setHamsterAllList(
          ()=>{
            const filterList = newAllList.filter(item => item.id !== currentId)
            return filterList
          }
        )
        setGetHamsterAllList(()=>{
          const GetAll = JsonPar(getLocal("getHamsterAllList"))
          const newGetAll = hamsterList.filter(item => item.id === currentId)
          return [...GetAll, newGetAll]
        })
      }
  }

  return (
    <div className="App">
      <Header firstHamster={firstHamster} hamham={hamham} />
      {/* <DefaultMain active={setHamsterActiveS} activeStatus={hamsterActiveS} hamsterSetShow={setHamsterShow} hamsterShow={hamsterShow} allClear={allClear} setAllClear={setAllClear}/> */}
      {/* <HamsterCollectionList /> */}
    </div>
  );
}

export default App;
