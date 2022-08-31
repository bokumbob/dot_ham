import { allData, authService } from 'etc/fbase';
import { RankingChange, RankingItem } from 'etc/ParamsInterface';
import { UserItem } from 'etc/VaraiableInterface';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RankingPerson from './RankingPerson';

const GameRanking = ({ change }: RankingChange) => {
  const [userList, setUserList] = useState<UserItem[]>([]);
  const [topUserList, setTopUserList] = useState<UserItem[]>();
  const [myData, setMyData] = useState<UserItem>();
  const [myRank, setMyRank] = useState<number>(0);
  useEffect(() => {
    const loading = async () => {
      try {
        const data = await allData();
        setUserList(data?.sort((a, b) => b.seeds - a.seeds));
      } catch (e) {
        throw new Error('로딩 실패');
      }
    };
    loading();
  }, []);

  useEffect(() => {
    if (userList?.length >= 5) setTopUserList(userList?.slice(0, 5));
    if (userList?.length >= 1)
      setMyData(
        userList.filter(
          item => item.nickname === authService.currentUser?.displayName
        )[0]
      );
  }, [userList]);

  useEffect(() => {
    setMyRank(userList.indexOf(myData!));
  }, [myData]);

  useEffect(() => {
    const leLoading = async () => {
      try {
        const data = await allData();
        setUserList(data?.sort((a, b) => b.seeds - a.seeds));
      } catch (e) {
        throw new Error('로딩 실패');
      }
    };
    if (change) {
      leLoading();
    }
  }, [change]);

  return (
    <RankingListWrap>
      <p>해씨원정대 랭킹</p>
      <RankingList>
        <RankingTitle>
          <p>순위</p>
          <p>닉네임</p>
          <p>개수</p>
        </RankingTitle>
        {topUserList?.length ? (
          <>
            {topUserList?.map((item: UserItem, idx: number) => (
              <RankingPerson key={item.nickname} data={item} rank={idx} />
            ))}
            <More>…</More>
            {myData && myRank > -1 && (
              <RankingPerson
                key={myData.nickname}
                data={myData}
                rank={myRank}
              />
            )}
          </>
        ) : (
          userList?.map((item: UserItem, idx: number) => (
            <RankingPerson key={item.nickname} data={item} rank={idx} />
          ))
        )}
      </RankingList>
    </RankingListWrap>
  );
};

const RankingListWrap = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    > p {
      font-size: 20px !important;
    }
  }
  .person-list p {
    margin: 5px 0;
  }
`;

const RankingList = styled.div`
  width: 300px;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

const RankingTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 25px 0 15px 0;
`;

const More = styled.p`
  transform: rotate(90deg);
  margin: 10px 0;
`;

export default GameRanking;
