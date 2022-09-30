import NextBtn from 'component/common/NextBtn';
import TitleHeader from 'component/title-header/TitleHeader';
import { addData, authService } from 'etc/fbase';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ChangeNickname = () => {
  const [nickname, setNickname] = useState<string>('');
  const nav = useNavigate();
  return (
    <>
      <TitleHeader text={'닉네임 변경하기'} none={true} />
      <Change className="change">
        <label htmlFor="change">
          변경할 닉네임을 작성해주세요 <br />
          최대 8글자까지 가능합니다
        </label>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNickname(e.target.value);
            if (nickname.length > 8) setNickname(prev => prev.slice(0, 7));
          }}
          id="change"
          type="text"
          value={nickname}
        />
        <NextBtn
          text="변경하기"
          onClick={(e: any) => {
            e.preventDefault();
            if (nickname && nickname.length <= 8) {
              authService.currentUser?.updateProfile({
                displayName: nickname,
              });
              addData('nickname', nickname);
              nav('/main');
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
