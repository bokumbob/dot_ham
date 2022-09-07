import Header from 'component/header/Header';
import TitleHeader from 'component/title-header/TitleHeader';
import { authService, dbService, firebaseInstance } from 'etc/fbase';
import { social } from 'page/start/startFunction';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'state';
import { socialReturn } from 'state/StateInterface';
import { accessToken, token } from 'state/userAction';
import './setting.scss';
import { withdrawal } from './settingFuntion';

const Setting = () => {
  const nav = useNavigate();
  const [crePassword, setCrePassword] = useState<string>('');
  const tokenState = useSelector((state: RootState) => state.userReducer.token);
  const accessTokenState = useSelector(
    (state: RootState) => state.userReducer.accessToken
  );
  const dispatch = useDispatch();

  return (
    <>
      <TitleHeader text={'환경 설정'} none={true} />
      <div className="setting-wrap">
        <p onClick={() => nav('/setting/change')}>닉네임 변경</p>
        <p
          onClick={() => {
            authService.signOut();
            nav('/');
          }}
        >
          로그아웃
        </p>
        <p
          onClick={() => {
            alert('로그인으로 본인 인증을 해주세요');
            social().then((res: socialReturn) => {
              dispatch(token(res.idToken));
              dispatch(accessToken(res.accessToken));
              if (tokenState && accessTokenState)
                withdrawal(tokenState, accessTokenState);
            });
          }}
        >
          탈퇴하기
        </p>
        <p>문의하기</p>
        <p>제작자 : 볶밥</p>
      </div>
    </>
  );
};

export default Setting;
