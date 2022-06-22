import React from 'react';
import styled from 'styled-components';
import { ButtonInterface } from './commonInterface';

const Google = styled.button`
  width: 200px;
  height: 40px;
  /* background-color: #4285f4; */
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  border: none;
  position: relative;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  :hover {
    background-color: #4285f4;
  }
  /* &:hover 하면 자식들한테만 호버 준다는 거 */
`;

const GoogleIconWrap = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 40px;
  height: 38px;
  border-radius: 2px;
  background-color: #fff;
`;

const GoogleImage = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GoogleP = styled.p`
  padding-left: 42px;
  line-height: 40px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
  letter-spacing: 0.2px;
  font-family: 'Roboto';
  font-weight: bold;
  transform: rotate(0.04deg);
  :hover {
    color: #fff;
  }
`;

const Twitter = styled.button`
  width: 200px;
  height: 40px;
  /* background-color: #4285f4; */
  background-color: #1bb2e9;
  border-radius: 4px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  border: none;
  position: relative;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  :hover {
    background-color: #1b8eb8;
  }
  :hover {
  }
`;

const TwitterIconWrap = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 40px;
  height: 38px;
  border-radius: 2px;
`;

const TwitterImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TwitterP = styled.p`
  padding-left: 42px;
  line-height: 40px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2px;
  font-family: 'Roboto';
  font-weight: bold;
  transform: rotate(0.04deg);
`;

export const Button = ({ text, name, onClick }: ButtonInterface) => {
  return name === 'google' ? (
    <Google name={name} onClick={e => onClick(e)}>
      <GoogleIconWrap>
        <GoogleImage src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
      </GoogleIconWrap>
      <GoogleP>{text}</GoogleP>
    </Google>
  ) : (
    <Twitter name={name} onClick={e => onClick(e)}>
      <TwitterIconWrap>
        <TwitterImage src="https://i.imgur.com/sO5Y2aG.png" />
      </TwitterIconWrap>
      <TwitterP>{text}</TwitterP>
    </Twitter>
  );
};
