import React, { useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootState } from 'state';
import { loginInitialState, loginReducer } from 'state/loginAction';
import DefaultMain from '../default/DefaultMain';
import StartNonLogin from '../start/StartNonLogin';

const RouterComponent = () => {
  // const [state, dispatch] = useReducer(loginReducer, loginInitialState);
  const passState = useSelector((state: RootState) => state.loginReducer.pass);
  const userState = useSelector((state: RootState) => state.userReducer.user);
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
