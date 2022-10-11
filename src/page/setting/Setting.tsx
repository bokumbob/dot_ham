import { currentDoc } from 'component/common/commonFunction';
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
import { accessToken, token, user } from 'state/userAction';
import './setting.scss';
import { googleWithdrawal, withdrawal } from './settingFuntion';

const Setting = () => {
  const nav = useNavigate();
  const [google, setGoogle] = useState<boolean>(false);
  const [crePassword, setCrePassword] = useState<string>('');
  const tokenState = useSelector((state: RootState) => state.userReducer.token);
  const accessTokenState = useSelector(
    (state: RootState) => state.userReducer.accessToken
  );
  const userState = useSelector((state: RootState) => state.userReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userState.providerData?.[0].providerId === 'google.com')
      setGoogle(true);
    else setGoogle(false);
  }, []);

  return (
    <>
      <TitleHeader text={'환경 설정'} none={true} />
      <div className="setting-wrap">
        <p onClick={() => nav('/setting/change')}>닉네임 변경</p>
        <p
          onClick={() => {
            authService.signOut().then(res => {
              nav('/');
              dispatch(user({}));
            });
          }}
        >
          로그아웃
        </p>
        <p
          onClick={() => {
            if (google) {
              alert('로그인으로 본인 인증을 해주세요');
              social().then((res: socialReturn) => {
                dispatch(token(res.idToken));
                dispatch(accessToken(res.accessToken));
                if (tokenState && accessTokenState)
                  googleWithdrawal(tokenState, accessTokenState, dispatch, nav);
              });
            } else {
              withdrawal(
                prompt('비밀번호를 입력해주세요') as string,
                dispatch,
                nav
              );
            }
          }}
        >
          탈퇴하기
        </p>
        <p>
          <a href="https://twitter.com/bokkbab2" target="_blank">
            문의하기
          </a>
        </p>
        <p>제작자 : 볶밥</p>
        <p>
          <a href="https://github.com/bokumbob/dot_ham" target="_blank">
            볶밥의 닷햄 깃허브로 가기
          </a>
        </p>
        <p onClick={() => nav('/main')}>뒤로 가기</p>
      </div>
    </>
  );
};

export default Setting;
