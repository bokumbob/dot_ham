import { authService, dbService } from 'etc/fbase';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import { hamsterList } from 'state/userAction';
import Hamster from './Hamster';
import './collection.scss';
import CollectionFirst from './CollectionFirst';
import HamsterDetail from './HamsterDetail';
import FooterAnother from 'component/common/FooterAnother';
import { useNavigate } from 'react-router-dom';

const Collection = () => {
  const hamsterListState = useSelector(
    (state: RootState) => state.userReducer.hamsterList
  );
  const firstState = useSelector((state: RootState) => state.userReducer.first);
  const [hamsterArr, setHamsterArr] = useState<any>();
  const [det, setDet] = useState<boolean>(false);
  const [hamster, setHamster] = useState<any>();
  const dispatch = useDispatch();
  const nav = useNavigate();
  useEffect(() => {
    const firstHamster = async () => {
      const userData = dbService.collection('userList');
      (await userData.get()).docs.forEach(doc => {
        if (doc.id === authService?.currentUser?.email) {
          dispatch(hamsterList(doc.data().hamsterList));
        }
      });
    };
    firstHamster();
  }, []);
  useEffect(() => {
    if (hamsterListState)
      setHamsterArr(
        Object.values(hamsterListState).sort((a: any, b: any) => a.id - b.id)
      );
  }, [hamsterListState]);
  return (
    <>
      {firstState && <CollectionFirst det={det} />}
      <main className="collection-wrap">
        {hamsterArr &&
          hamsterArr.map((hamster: any) => (
            <Hamster
              key={hamster.id}
              hamster={hamster}
              setDet={setDet}
              setHamster={setHamster}
            />
          ))}
      </main>
      <FooterAnother
        text="뒤로 가기"
        classTitle="back"
        onClick={() => nav('/main')}
      />
      {det && <HamsterDetail setDet={setDet} hamster={hamster} />}
    </>
  );
};

export default Collection;
