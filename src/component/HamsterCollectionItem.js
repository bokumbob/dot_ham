import React from 'react';

const HamsterCollectionItem = ({item,getHamsterAllList}) => {
    // const obj = currentHamster[0]
    //  const {imgUr, status} = obj
    //  console.log(obj)
     const {name,imgUrl,hideimgUrl,description} = item
    //  const {status} = getHamsterAllList
    console.log(getHamsterAllList)
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            {/* <p>{status ? `imgUrl`:`hideimgUrl`} </p> */}
        </div>
    );
};

export default HamsterCollectionItem;