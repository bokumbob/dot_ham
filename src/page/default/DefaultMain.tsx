import React, { useEffect, useState } from 'react';
import './default.css';
import { myData } from 'etc/fbase';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import { time } from 'state/timer';
import { hamsterList, start } from 'state/userAction';
import DefaultFirst from './DefaultFirst';
import DefaultBox from './DefaultBox';
import { UserItem } from 'etc/VaraiableInterface';

const DefaultMain = () => {
  const firstState = useSelector((state: RootState) => state.userReducer.first);
  const [hamPop, setHamPop] = useState<boolean>(false);
  const dispatch = useDispatch();

  const hamsterData = async () => {
    myData().then((res: UserItem) => {
      if (res?.hamsterList) {
        dispatch(hamsterList(res.hamsterList));
        dispatch(start(res.start));
        dispatch(time(res.time));
      }
    });
  };

  useEffect(() => {
    !firstState && hamsterData();
  }, []);

  return (
    <>
      {firstState && <DefaultFirst hamPop={hamPop} />}
      <DefaultBox
        setHamPop={setHamPop}
        hamPop={hamPop}
        firstState={firstState}
      />
    </>
  );
};

export default DefaultMain;
