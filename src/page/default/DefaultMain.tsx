import React, { useEffect, useState } from 'react';
import './default.css';
import { authService, myData } from 'etc/fbase';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import { time } from 'state/timer';
import { first, hamsterList, start } from 'state/userAction';
import DefaultFirst from './DefaultFirst';
import DefaultBox from './DefaultBox';
import { UserItem } from 'etc/VaraiableInterface';
import { whoFirst } from 'component/common/commonFunction';
import { useNavigate } from 'react-router-dom';

const DefaultMain = () => {
  const firstState = useSelector((state: RootState) => state.userReducer.first);
  const userState = useSelector((state: RootState) => state.userReducer.user);
  const nav = useNavigate();
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
    const dataLoading = async () => {
      await whoFirst().then(res => dispatch(first(res)));
    };
    dataLoading();
    const firstData = async () => {
      !firstState && (await hamsterData());
    };
    firstData();
    Object.keys(userState).length > 0 || nav('/');
    (authService.currentUser?.displayName?.length as number) >= 9 &&
      nav('/setting/change');
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
