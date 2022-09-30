import { whoFirst } from 'component/common/commonFunction';
import Footer from 'component/footer/Footer';
import Header from 'component/header/Header';
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
import { first } from 'state/userAction';
import DefaultMain from '../default/DefaultMain';
import StartNonLogin from '../start/StartNonLogin';

const RouterComponent = () => {
  const userState = useSelector((state: RootState) => state.userReducer.user);

  return (
    <BrowserRouter>
      {Object.keys(userState).length > 0 && <Header />}
      <Routes>
        <Route path="/" element={<StartNonLogin />} />
        <Route path="/main" element={<DefaultMain />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/seedGame" element={<SeedGame />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/setting/change" element={<ChangeNickname />} />
        {/* <Route path="/test" element={<Test2 />} /> */}
      </Routes>
      {Object.keys(userState).length > 0 && <Footer />}
    </BrowserRouter>
  );
};

export default RouterComponent;
