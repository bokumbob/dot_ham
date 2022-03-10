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
  const [hamsterAllList, setHamsterAllList] = useState(JsonPar(getLocal("hamsterAllList")))
  const [getHamsterAllList, setGetHamsterAllList] = useState(JsonPar(getLocal("getHamsterAllList")))
  const [currentHamster, setCurrentHamster] = useState(JsonPar(getLocal("currentHamsterAllList")))
  const [hamsterShow, setHamsterShow] = useState(false);
  const [hamsterActiveS, setHamsterActiveS] = useState(false);
  const [allClear, setAllClear] = useState(false)

  const firstHamster = () => {
    setHamsterAllList(hamsterList.filter(item => item.id !== '0'))

    setGetHamsterAllList(
      () => {
        const zeroHam = hamsterList.filter(item => item.id === "0")
        zeroHam[0].status = true;
        return zeroHam
      }
    )
    setCurrentHamster(hamsterList.filter(item => item.id === "0"))
  }

  const catchHamster = () => {
    // const newAllList = JsonPar(getLocal("hamsterAllList"))
    if (hamsterAllList.length <= 0) {
    } else if (hamsterAllList.length > 0) {
      const currentId = hamsterAllList[Math.floor(Math.random() * hamsterAllList.length)].id
      setHamsterAllList(
        () => {
          const filterList = hamsterAllList.filter(item => item.id !== currentId)
          return filterList
        }
      )
      setGetHamsterAllList(() => {
        // const GetAll = JsonPar(getLocal("getHamsterAllList"))
        const newGetAll = hamsterList.filter(item => item.id === currentId)
        newGetAll[0].status = true;
        return [...getHamsterAllList, newGetAll]
      })
      setCurrentHamster(hamsterList.filter(item => item.id === currentId))
    }
  }

  const clickSeeds = () => {
    if(hamsterAllList){
      if (hamsterAllList.length <= 0) {
        return alert("clear")
      }
    }
    setHamsterShow(true)
    setHamsterActiveS(false)
    if (!getHamsterAllList) {
      firstHamster()
    } else if (getHamsterAllList) {
      catchHamster()
    }
  }

  const popClose = () => {
    setHamsterShow(false)
  }

  useEffect(() => {
    setLocal("hamsterAllList", JsonStr(hamsterAllList))
  }, [hamsterAllList])

  useEffect(() => {
    setLocal("getHamsterAllList", JsonStr(getHamsterAllList))
  }, [getHamsterAllList])

  useEffect(() => {
    setLocal("currentHamsterAllList", JsonStr(currentHamster))
  }, [currentHamster])

  return (
    <div className="App">
      {/* <Header /> */}
      <DefaultMain clickSeeds={clickSeeds} popClose={popClose} hamsterActiveS={hamsterActiveS} setHamsterActiveS={setHamsterActiveS} allClear={allClear} hamsterShow={hamsterShow} currentHamster={currentHamster}/>
      {/* <HamsterCollectionList getHamsterAllList={getHamsterAllList}/> */}
    </div>
  );
}

export default App;
