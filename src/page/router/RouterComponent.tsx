import Footer from 'component/footer/Footer';
import Header from 'component/header/Header';
import Collection from 'page/collection/Collection';
import SeedGame from 'page/seedGame/SeedGame';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootState } from 'state';
import DefaultMain from '../default/DefaultMain';
import StartNonLogin from '../start/StartNonLogin';

const RouterComponent = () => {
  const passState = useSelector((state: RootState) => state.loginReducer.pass);
  const userState = useSelector((state: RootState) => state.userReducer.user);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={isLogin ? <Start /> : <StartNonLogin />} /> */}
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
      </Routes>
      {Object.keys(userState).length !== undefined && <Footer />}
    </BrowserRouter>
  );
};

export default RouterComponent;
