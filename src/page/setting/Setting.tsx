import TitleHeader from 'component/title-header/TitleHeader';
import { authService, dbService } from 'etc/fbase';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './setting.scss';

const Setting = () => {
  const nav = useNavigate();
  // console.log(
  // dbService
  // .collection('userList')
  // .doc(authService.currentUser?.updateProfile({displayName}))
  // );
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
        <p>탈퇴하기</p>
        <p>문의하기</p>
        <p>제작자 : 볶밥</p>
      </div>
    </>
  );
};

export default Setting;
