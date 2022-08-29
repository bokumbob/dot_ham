import { imgLink } from 'etc/imgLink';
import { TitleHeaderInterface } from 'etc/ParamsInterface';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './titleHeader.scss';

const TitleHeader = ({ text, none }: TitleHeaderInterface) => {
  const pageNamArr = ['', 'seedGame', 'myHamster'];
  const [current, setCurrent] = useState<number>(0);
  const nav = useNavigate();
  const next = (current: number) => {
    if (current >= 3) return;
    current += 1;
    setCurrent(current);
    console.log(current);
    nav(`/${pageNamArr[current]}`);
  };
  const prev = (current: number) => {
    if (current >= 3) return;
    current -= 1;
    setCurrent(current);
    console.log(current);
    nav(`/${pageNamArr[current]}`);
  };
  useEffect(() => {
    switch (text) {
      case '만남의 장소':
        {
          setCurrent(0);
        }
        break;
      case '해씨원정대':
        {
          setCurrent(1);
        }
        break;
      case '나의 햄스터':
        {
          setCurrent(2);
        }
        break;
      default: {
        setCurrent(0);
      }
    }
  });
  return (
    <div className="header-wrap">
      {!none && (
        <img src={`${imgLink}left.png`} onClick={() => prev(current)} />
      )}
      <p>{text}</p>
      {!none && (
        <img src={`${imgLink}right.png`} onClick={() => next(current)} />
      )}
    </div>
  );
};

export default TitleHeader;
