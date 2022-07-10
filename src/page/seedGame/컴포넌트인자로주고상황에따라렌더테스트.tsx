import React from 'react';

const Test = (Asd: any) => {
  const { name } = Asd;
  //   Asd.asd.props.children p 추출법
  // 그냥 디브의 경우에는 elem.elem 식으로 하면 됨
  // console.log(Asd.asd);
  return <div>{Asd.asd}</div>;
};

export default Test;
