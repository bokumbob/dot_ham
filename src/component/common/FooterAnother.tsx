import { FooterAnotherInter } from 'etc/ParamsInterface';
import React from 'react';
import styled from 'styled-components';

const Another = styled.div`
  position: absolute;
  bottom: ${props => (props.className === 'back' ? '67px' : 'unset')};
  cursor: ${props => (props.className === 'back' ? 'pointer ' : 'unset')};
  left: 50%;
  transform: translate(-50%);
  z-index: 7;
  transition: 0.2s ease-in-out;
  :hover {
    color: #ffa36f;
  }
`;

const FooterAnother = ({
  text,
  classTitle,
  img,
  alt,
  onClick,
}: FooterAnotherInter) => {
  return (
    <Another className={classTitle} onClick={onClick && onClick}>
      {img && <img src={img} alt={alt} />}
      <p>{text}</p>
    </Another>
  );
};

export default FooterAnother;
