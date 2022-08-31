import { RankingItem } from 'etc/ParamsInterface';
import { UserItem } from 'etc/VaraiableInterface';
import React from 'react';

const RankingPerson = ({ data, rank }: RankingItem) => {
  const { nickname } = data;
  const { seeds } = data;
  // console.log(data);
  return (
    <div className="person-list">
      {data ? (
        <>
          <p>{rank + 1}</p>
          <p>{nickname}</p>
          <p>{seeds}</p>
        </>
      ) : (
        <p>랭킹에 기록된 사람이 아직 없어요!</p>
      )}
    </div>
  );
};

export default RankingPerson;
