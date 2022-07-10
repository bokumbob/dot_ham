import React, { useEffect, useRef, useState } from 'react';
import './default.css';
import Canvas from '../../component/canvas/Canvas';
import { authService, dbService } from 'etc/fbase';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import { catchHamster } from './defaultFunction';
import { currentTime, time } from 'state/timer';
import { hamsterList, start } from 'state/userAction';
import CatchModal from 'component/catchModal/CatchModal';
import { imgLink } from 'etc/imgLink';
import TitleHeader from 'component/title-header/TitleHeader';

const DefaultMain = () => {
  const auth = authService.currentUser;
  const timeState = useSelector((state: RootState) => state.timerReducer.time);
  const startTimeState = useSelector(
    (state: RootState) => state.userReducer.start
  );
  const currentTimeState = useSelector(
    (state: RootState) => state.timerReducer.currentTime
  );
  const dispatch = useDispatch();
  const [catchTime, setCatchTime] = useState<number>(900);
  const [first, setFirst] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);
  const [catchHam, setCatchHam] = useState<any>();
  const timer = useRef<any>();

  useEffect(() => {
    const firstHamster = async () => {
      const userData = dbService.collection('userList');
      (await userData.get()).docs.forEach(doc => {
        if (doc.id === auth?.displayName) {
          dispatch(hamsterList(doc.data().hamsterList));
          dispatch(start(doc.data().start));
          dispatch(time(doc.data().time));
          setFirst(false);
        }
      });
    };
    firstHamster();
    dispatch(currentTime(Date.now()));
    timer.current = setInterval(() => {
      dispatch(currentTime(Date.now()));
    }, 1000);
    return () => clearInterval(timer.current);
  }, []);

  useEffect(() => {
    // timeState 0이었다가 바뀜 그래서 지금 에러 나는 듯
    if (startTimeState > 1 && timeState > 1) {
      const timeFix =
        timeState - Math.floor((currentTimeState - startTimeState) / 1000);
      setCatchTime(timeFix);
    } else {
      console.log(55);
      setCatchTime(5);
    }
  }, [startTimeState, timeState]);

  useEffect(() => {
    if (catchTime < 1) {
      clearInterval(timer.current);
      setActive(true);
      setCatchTime(0);
    }
  }, [catchTime]);

  useEffect(() => {
    if (!active) {
      timer.current = setInterval(() => {
        setCatchTime(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer.current);
  }, [active]);

  return (
    <>
      <div className="container">
        <section className="hamster-main">
          <TitleHeader text={'만남의 장소'} />
          <div className="center">
            <article className="seed">
              <h3>햄스터를 만나기까지...{catchTime}</h3>
              <Canvas imgUrl="seed" />
            </article>
          </div>
          <div
            className={`catch ${active && 'active'}`}
            onClick={() => {
              if (active) {
                catchHamster(first!).then(res => setCatchHam(res));
                setActive(false);
                setCatchTime(900);
              }
              if (first) setFirst(false);
            }}
          >
            <img src={`${imgLink}hamsterIcon.png`} alt="햄스터 잡기 아이콘" />
            <p>햄스터 잡기</p>
          </div>
          {catchHam && (
            <CatchModal hamster={catchHam} setCatchHam={setCatchHam} />
          )}
        </section>
      </div>
    </>
  );
};

export default DefaultMain;
