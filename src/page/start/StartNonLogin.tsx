import { allData, authService } from 'etc/fbase';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { email, password, newAccount, nickname } from 'state/loginAction';
import { accessToken, token, user } from 'state/userAction';
import { nicknameCheck, signUp, social } from './startFunction';
import { Button } from 'component/common/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import './start.scss';
import NextBtn from 'component/common/NextBtn';
import { socialReturn } from 'state/StateInterface';
import { useNavigate } from 'react-router-dom';

const StartNonLogin = () => {
  const [emailFind, setEmailFind] = useState<string | null>('');
  const [nicknamePass, setNicknamePass] = useState<boolean>(false);

  const state = useSelector((state: RootState) => state.loginReducer);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    authService.onAuthStateChanged(async userObj => {
      if (userObj) {
        dispatch(user(userObj));
        nav('/main');
      }
    });
  }, []);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          state.newAccount
            ? nicknamePass
              ? signUp(
                  state.newAccount,
                  state.email,
                  state.password,
                  dispatch,
                  nav,
                  state.nickname
                )
              : alert('닉네임 중복체크를 해주세요')
            : signUp(
                state.newAccount,
                state.email,
                state.password,
                dispatch,
                nav
              );
        }}
      >
        <h2>닷-햄에 오신 걸 환영합니다!</h2>
        <label htmlFor="id">이메일을 입력해주세요</label>
        <input
          id="id"
          type="text"
          onChange={e => dispatch(email(e.target.value))}
        />
        <label htmlFor="password">비밀번호를 입력해주세요</label>
        <input
          id="password"
          type="password"
          onChange={e => dispatch(password(e.target.value))}
        />
        {state.newAccount ? (
          <>
            <div className="nickname-wrap">
              <label htmlFor="nickname">닉네임을 입력해주세요</label>
              <div className="nickname-bot">
                <input
                  id="nickname"
                  type="text"
                  value={state.nickname}
                  onChange={e => {
                    dispatch(nickname(e.target.value));
                    if (state.nickname.length > 8)
                      dispatch(nickname(state.nickname.slice(0, 7)));
                  }}
                  placeholder="최대 8글자까지입니다"
                  disabled={nicknamePass ? true : false}
                />
                <NextBtn
                  onClick={async e => {
                    e.preventDefault();
                    nicknamePass
                      ? setNicknamePass(false)
                      : setNicknamePass(await nicknameCheck(state.nickname));
                  }}
                  text={
                    nicknamePass ? '닉네임 다시 입력하기' : '닉네임 중복 체크'
                  }
                />
              </div>
            </div>
            <NextBtn text="회원가입 하기" />
            <span onClick={() => dispatch(newAccount(false))}>
              이미 회원이신가요?
            </span>
          </>
        ) : (
          <>
            <NextBtn text="로그인 하기" />
            <span
              onClick={() => {
                setEmailFind(prompt('가입하신 이메일을 입력해주세요'));
                if (emailFind) {
                  alert('잠시 기다려주세요');
                  authService
                    .sendPasswordResetEmail(emailFind)
                    .then(res =>
                      alert(
                        '비밀번호 재설정 링크가 발송됐습니다. 우편함에서 메일을 확인해주세요.'
                      )
                    )
                    .catch(e => alert('이메일이 잘못됐습니다'));
                } else alert('맞는 이메일을 입력해주세요');
              }}
            >
              비밀번호를 잊어버리셨나요?
            </span>
            <span onClick={() => dispatch(newAccount(true))}>
              처음이신가요?
            </span>
          </>
        )}
        <Button
          text={state.newAccount ? 'Sign in with Google' : 'Log in with Google'}
          name={'google'}
          onClick={e => {
            social(e).then((res: socialReturn) => {
              dispatch(token(res.idToken));
              dispatch(accessToken(res.accessToken));
            });
          }}
        />
      </form>
    </>
  );
};

export default StartNonLogin;
