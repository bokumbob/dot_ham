import React from 'react';
import { myData } from '../fbase';

const Test2 = () => {
  myData().then(res => console.log(res));
  return <div></div>;
};

export default Test2;
