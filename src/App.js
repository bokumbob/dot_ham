import { useEffect, useState } from "react";
import Header from "./component/Header.js"
import DefaultMain from "./page/DefaultMain.js"
import HamsterCollectionList from "./page/HamsterCollectionPage"
import './css/index.css'
import { JsonPar, JsonStr, setLocal, useLocalStorage } from "./helpers.js";
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

      // return new Promise((resolve, reject) => {
    //   setHamsterAllList(hamsterAllList.filter(item => item.id !== '0'))
    //   resolve()
    //   // resolve(setLocal("hamsterAllList", JsonStr(hamsterAllList)))
    // }).then(
    //   setLocal("hamsterAllList", JsonStr(hamsterAllList))
    // ).then(
    //   setGetHamsterAllList(
    //     () => {
    //       const zeroHam = hamsterList.filter(item => item.id === "0")
    //       zeroHam[0].status = true;
    //       setLocal("getHamsterList", JsonStr(zeroHam))
    //       return zeroHam
    //     }
    //   ))

  const hamham = () => {
    const b = Math.floor(Math.random() * hamsterAllList.length - 1)
    // const b = hamsterAllList[Math.floor(Math.random() * hamsterAllList.length-1)].id
    setHamsterAllList(hamsterAllList.filter(item => item.id !== hamsterAllList[b].id))
    // console.log(hamsterAllList[Math.floor(Math.random() * hamsterAllList.length-1)])
    setGetHamsterAllList((prev) => {
      const c = hamsterAllList.filter(item => item.id === hamsterAllList[b].id)
      c.map(item => item.status = true)
      const a = [...prev, c[0]]
      // console.log(c[0])
      return a
    })
    // console.log(getHamsterAllList)
  }
  // console.log(getHamsterAllList)

  return (
    <div className="App">
      <Header firstHamster={firstHamster} hamham={hamham} />
      {/* <DefaultMain active={setHamsterActiveS} activeStatus={hamsterActiveS} hamsterSetShow={setHamsterShow} hamsterShow={hamsterShow} allClear={allClear} setAllClear={setAllClear}/> */}
      {/* <HamsterCollectionList /> */}
    </div>
  );
}

export default App;
