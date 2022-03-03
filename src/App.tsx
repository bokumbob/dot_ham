import React from "react";
import {useState} from "react";
import Header from "./component/Header"
// import DefaultMain from "./page/DefaultMain"
// import HamsterCollectionList from "./page/HamsterCollectionPage"
import './css/index.css'
// import ShowHamster from "./component/ShowHamster.js"
// import Timer from "./component/Timer.js"
// import Gethamster from "./model/Gethamster"

function App() {
  // const hamsterState = { show: false, name: "", id: "", activeStatus: false }
  const [hamsterShow, setHamsterShow] = useState(false);
  const [hamsterActiveS, setHamsterActiveS] = useState(false);
  const [allClear, setAllClear] = useState(false)

  return (
    <div className="App">
      <Header />
      {/* <DefaultMain active={setHamsterActiveS} activeStatus={hamsterActiveS} hamsterSetShow={setHamsterShow} hamsterShow={hamsterShow} allClear={allClear} setAllClear={setAllClear}/> */}
      {/* <HamsterCollectionList /> */}
    </div>
  );
}

export default App;
