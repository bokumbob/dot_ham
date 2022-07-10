import React from 'react';
import './layout.css';
import Header from './component/header/Header';
import RouterComponent from './page/router/RouterComponent';
import Footer from 'component/footer/Footer';
import { RootState } from 'state';
import { useSelector } from 'react-redux';

const App = () => {
  return (
    <div className="App">
      <RouterComponent />
    </div>
  );
};

export default App;
