import NextBtn from 'component/common/NextBtn';
import { TouchBoxInter } from 'etc/ParamsInterface';
import { TouchBoxStyled } from 'etc/VaraiableInterface';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../../component/common/NextBtn';

const TouchBox = ({ onClick, top, left }: TouchBoxInter) => {
  return (
    <Touch left={left} top={top} onClick={onClick}>
      클릭!
    </Touch>
  );
};

const Touch = styled(Button)<TouchBoxStyled>`
  top: ${props => (props.top ? props.top : '0')};
  left: ${props => (props.left ? props.left : '0')}!important;
  bottom: unset !important;
`;

export default TouchBox;
