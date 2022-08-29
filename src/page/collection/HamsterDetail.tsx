import NextBtn from 'component/common/NextBtn';
import { Wrap } from 'page/default/DefaultFirst';
import React from 'react';
import styled from 'styled-components';

const HamsterDetail = ({ setDet, hamster }: any) => {
  //   console.log(hamster);
  //   id , catch
  return (
    <Wrap>
      <HD src={`http://titmousu.dothome.co.kr/img/${hamster.name}s.png`} />
      <p>{hamster.name} 햄스터</p>
      <p>{hamster.description}</p>
      <NextBtn text="닫기" onClick={() => setDet(false)} />
    </Wrap>
  );
};

const HD = styled.img`
  margin-bottom: 25px;
`;

export default HamsterDetail;
