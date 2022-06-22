import React from 'react';
import './layout.css';
import Header from './component/header/Header';
import RouterComponent from './page/router/RouterComponent';
import Footer from 'component/footer/Footer';
import { RootState } from 'state';
import { useSelector } from 'react-redux';

const App = () => {
  const userState = useSelector((state: RootState) => state.userReducer.user);
  return (
    <div className="App">
      <Header />
      <RouterComponent />
      {Object.keys(userState).length !== 0 && <Footer />}
    </div>
  );
};

export default App;
