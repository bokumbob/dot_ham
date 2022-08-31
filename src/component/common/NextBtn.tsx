import { NextBtnInt } from 'etc/ParamsInterface';
import React from 'react';
import styled from 'styled-components';

const NextBtn = ({ text, onClick, color }: NextBtnInt) => {
  return (
    <Button color={color} onClick={onClick}>
      {text}
    </Button>
  );
};

export const Button = styled.button`
  width: 113px;
  height: 50px;
  color: ${props => (props.color === '#fff' ? '#000' : '#fff')};
  background: ${props => (props.color ? props.color : '#ffa36f')};
  font: inherit;
  border: 2px dashed #ff5b00;
  margin-top: 30px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  :hover {
    background: #ff5b00;
  }
`;
export default NextBtn;
