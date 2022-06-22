import React, { useEffect, useMemo, useRef, useState } from 'react';
import './default.css';
import DefaultCanvas from './DefaultCanvas';
import { authService, dbService } from 'etc/fbase';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import { catchHamster } from './defaultFunction';
import { currentTime, time } from 'state/timer';
// import Timer from 'component/Timer';
const DefaultMain = () => {
  const auth = authService.currentUser;
  const timeState = useSelector((state: RootState) => state.timerReducer.time);
  const currentTimeState = useSelector(
    (state: RootState) => state.timerReducer.currentTime
  );
  const hamsterList = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  // const [currentTime, setCurrentTime] = useState<number>(0);
  const [catchTime, setCatchTime] = useState<number>(0);
  // const [a, setA] = useState<number>();
  const [first, setFirst] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);
  const timer = useRef<any>();

  useEffect(() => {
    const firstHamster = async () => {
      const userData = dbService.collection('userList');
      (await userData.get()).docs.forEach(doc => {
        if (doc.id === auth?.displayName) {
          setFirst(false);
          dispatch(time(doc.data().start));
        }
      });
    };
    firstHamster();
    const w = () =>
      setInterval(() => {
        dispatch(currentTime(Date.now()));
      }, 1000);
    w();
    return () => clearInterval(w());
  }, []);

  // useEffect(() => {
  //   if (first) {
  //     setCatchTime(5);
  //     timer.current = setInterval(() => setCatchTime(t => t - 1), 1000);
  //   } else {
  //     const e = currentTimeState - timeState;
  //     if (currentTimeState) {
  //       console.log(e);
  //       const w = Math.floor(e / 1000);
  //       timer.current = setInterval(() => {
  //         setCatchTime(Math.floor((900 - w) / 60));
  //       }, 1000);
  //     }
  //   }
  //   return () => clearInterval(timer.current);
  // }, [active]);

  useEffect(() => {
    if (catchTime < 1) {
      clearInterval(timer.current);
      setActive(true);
      // setCatchTime(0);
    }
  }, [catchTime]);

  return (
    <>
      <div className="container">
        <section className="hamster-main">
          <div className="title-name">
            <div className="left"></div>
            <h2>만남의 장소</h2>
            <div className="right"></div>
          </div>
          <div className="center">
            <article className="seed">
              <h3>
                햄스터를 만나기까지...{catchTime}
                {/* <span style={{ color: 'red' }}>{currentTime}</span> */}
              </h3>
              <DefaultCanvas />
            </article>
          </div>
          <div
            className={`catch ${active && 'active'}`}
            onClick={() => {
              if (active) {
                catchHamster(first!);
                setFirst(false);
              }
            }}
          >
            <img src="./img/hamsterIcon.png" alt="햄스터 잡기 아이콘" />
            <p>햄스터 잡기</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DefaultMain;
