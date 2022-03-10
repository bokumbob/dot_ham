// import { getLocal, JsonPar, JsonStr, setLocal } from "../helpers"
// import hamsterList from "./hamsterList"


// const {allHamsterLists} = hamsterList
// let {getHamsterList} = hamsterList
// // let {currentId} = hamsterList

// export const defaultHamster = () => {
//     setLocal("0", "0")
//     setLocal("currentId", "0")
//     const removeDefaultHamster = allHamsterLists.filter(item => item.id !== '0')
//     setLocal("getHamsterList",JsonStr(removeDefaultHamster))
//     const currentHamster = JsonPar(getLocal("getHamsterList"))
//     getHamsterList = {...currentHamster}
// }

// export const catchHamster = () => {
//     const lastHamster = JsonPar(getLocal("getHamsterList"))
//     const currntId = lastHamster[Math.floor(Math.random() * lastHamster.length)].id
//     const currentList = lastHamster.filter(item => item.id !== currntId)
//     setLocal("currentId",currntId)
//     setLocal("getHamsterList",JsonStr(currentList))
//     const currentHamster = JsonPar(getLocal("getHamsterList"))
//     getHamsterList = {...currentHamster}
// }