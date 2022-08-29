import { whoFirst } from 'component/common/commonFunction';
import Footer from 'component/footer/Footer';
import Header from 'component/header/Header';
import { authService, firebaseInstance } from 'etc/fbase';
import Test2 from 'etc/test/Test2';
import Collection from 'page/collection/Collection';
import SeedGame from 'page/seedGame/SeedGame';
import ChangeNickname from 'page/setting/ChangeNickname';
import Setting from 'page/setting/Setting';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootState } from 'state';
import { first, user } from 'state/userAction';
import DefaultMain from '../default/DefaultMain';
import StartNonLogin from '../start/StartNonLogin';

const RouterComponent = () => {
  const passState = useSelector((state: RootState) => state.loginReducer.pass);
  const userState = useSelector((state: RootState) => state.userReducer.user);

  const dispatch = useDispatch();
  useEffect(() => {
    whoFirst().then(res => dispatch(first(res)));
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            Object.keys(userState).length !== 0 || passState ? (
              <DefaultMain />
            ) : (
              <StartNonLogin />
            )
          }
        />
        <Route path="/collection" element={<Collection />} />
        <Route path="/seedGame" element={<SeedGame />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/setting/change" element={<ChangeNickname />} />
        <Route path="/test" element={<Test2 />} />
      </Routes>
      {Object.keys(userState).length !== undefined && <Footer />}
    </BrowserRouter>
  );
};

export default RouterComponent;
