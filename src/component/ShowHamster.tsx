// import React from "react";
// import { getLocal } from "helpers"
// import hamsterList from "model/hamsterList"

// const ShowHamster = ({popClose}) => {

//     const {allHamsterLists, getHamsterList} = hamsterList

//     return (
//         <div className='background'>
//             <article className='pop'>
//                 <h2>hiddenTitle</h2>
//                 {allHamsterLists.map((item) => {
//                     return (
//                         item.id === getLocal("currentId") ? 
//                         <div className="hamster-pop" key={item.id}>
//                             <img src={item.imgUrl} />
//                             <h3>{item.name}</h3>
//                             <p>{item.description}</p>
//                         </div>
                        
//                         :
//                         null
//                     )
//                 })}
//             </article>
//             <p>앗, 야생의 햄스터가 나타났다!</p>
//             <div className="pop-x" onClick={popClose}><p>x</p></div>
//         </div>
//     )
// }

// export default ShowHamster