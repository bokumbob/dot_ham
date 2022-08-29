import NextBtn from 'component/common/NextBtn';
import { Wrap } from 'page/default/DefaultFirst';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { first } from 'state/userAction';
import styled from 'styled-components';
import { collectionText } from './collectionText';

const CollectionFirst = ({ det }: any) => {
  const [page, setPage] = useState<number>(0);
  const dispatch = useDispatch();
  const nav = useNavigate();

  /** 
    @todo 퍼스트 구분하고 튜토리얼 끝내면 메인으로 돌아가게
   */

  const firstDone = () => {
    dispatch(first(false));
    nav('/');
  };

  useEffect(() => {
    if (page === 3 && det === true) setPage(prev => prev + 1);
    if (page === 4 && det === false) setPage(prev => prev + 1);
  }, [det]);

  return (
    <>
      {page === 3 ? (
        <ClickHamWrap>
          <p>절 눌러보세요!</p>
          <p>↓</p>
        </ClickHamWrap>
      ) : (
        <>
          {page !== 4 && (
            <Wrap>
              <p>{collectionText[page]}</p>
              <NextBtn
                text={page >= 8 ? '튜토리얼 완료!' : '다음'}
                onClick={() => {
                  page >= 8 ? firstDone() : setPage(prev => prev + 1);
                }}
              />
            </Wrap>
          )}
        </>
      )}
    </>
  );
};

const ClickHamWrap = styled.div`
  align-self: flex-start;
  margin-top: 25px;
  margin-left: 15px;
  text-align: center;
`;

export default CollectionFirst;
