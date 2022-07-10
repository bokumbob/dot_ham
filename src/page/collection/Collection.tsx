import { authService, dbService } from 'etc/fbase';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import { hamsterList } from 'state/userAction';
import Hamster from './Hamster';
import './collection.scss';

const Collection = () => {
  const hamsterListState = useSelector(
    (state: RootState) => state.userReducer.hamsterList
  );
  const [hamsterArr, setHamsterArr] = useState<any>();
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      hamsterListState === undefined ||
      hamsterListState.length === undefined
    ) {
      const firstHamster = async () => {
        const userData = dbService.collection('userList');
        (await userData.get()).docs.forEach(doc => {
          if (doc.id === authService?.currentUser?.displayName) {
            dispatch(hamsterList(doc.data().hamsterList));
          }
        });
      };
      firstHamster();
    }
  }, []);
  useEffect(() => {
    if (hamsterListState)
      setHamsterArr(
        Object.values(hamsterListState).sort((a: any, b: any) => a.id - b.id)
      );
  }, [hamsterListState]);
  return (
    <div className="collection-wrap">
      {hamsterArr &&
        hamsterArr.map((hamster: any) => (
          <Hamster key={hamster.id} hamster={hamster} />
        ))}
    </div>
  );
};

export default Collection;
