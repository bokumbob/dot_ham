import { Button } from 'component/common/Button';
import NextBtn from 'component/common/NextBtn';
import TitleHeader from 'component/title-header/TitleHeader';
import { authService } from 'etc/fbase';
import React, { useState } from 'react';
import styled from 'styled-components';

const ChangeNickname = () => {
  const [nickname, setNickname] = useState<string>();
  return (
    <>
      <TitleHeader text={'닉네임 변경하기'} none={true} />
      <Change className="change">
        <label htmlFor="change">변경할 닉네임을 작성해주세요</label>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNickname(e.target.value)
          }
          id="change"
          type="text"
        />
        <NextBtn
          text="변경하기"
          onClick={e => {
            e.preventDefault();
            if (nickname) {
              authService.currentUser?.updateProfile({
                displayName: nickname,
              });
              alert('닉네임이 변경됐습니다');
            } else alert('변경할 닉네임을 입력해주세요');
          }}
        />
      </Change>
    </>
  );
};

const Change = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    line-height: 50px;
  }
  input {
    height: 25px;
  }
`;

export default ChangeNickname;
