import { authService } from 'etc/fbase';
import React from 'react';
import { useEffect } from 'react';
import { email, password, newAccount, nickname } from 'state/loginAction';
import { user } from 'state/userAction';
import { signUp, social } from './startFunction';
import { Button } from 'component/common/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'state';

const StartNonLogin = () => {
  useEffect(() => {
    authService.onAuthStateChanged(userObj => {
      if (userObj) {
        dispatch(user(userObj));
      } else {
        dispatch(user(false));
      }
    });
  }, []);
  const state = useSelector((state: RootState) => state.loginReducer);
  const dispatch = useDispatch();
  return (
    <>
      <form
        onSubmit={e =>
          signUp(
            e,
            state.newAccount,
            state.email,
            state.password,
            state.nickname,
            dispatch
          )
        }
      >
        <h2>닷-햄에 오신 걸 환영합니다!</h2>
        <input type="text" onChange={e => dispatch(email(e.target.value))} />
        <input
          type="password"
          onChange={e => dispatch(password(e.target.value))}
        />
        {state.newAccount ? (
          <>
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              onChange={e => dispatch(nickname(e.target.value))}
            />
            <button type="submit">회원가입 하기</button>
            <span onClick={() => dispatch(newAccount(false))}>
              이미 회원이신가요?
            </span>
          </>
        ) : (
          <>
            <button type="submit">로그인 하기</button>
            <span onClick={() => dispatch(newAccount(true))}>
              처음이신가요?
            </span>
          </>
        )}
      </form>
      <form>
        <Button text={'Sign in with Google'} name={'google'} onClick={social} />
        <Button
          text={'Sign in with Twitter'}
          name={'twitter'}
          onClick={social}
        />
      </form>
    </>
  );
};

export default StartNonLogin;
