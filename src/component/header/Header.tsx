import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="top-header">
      <h1 className="title">닷-햄</h1>
      <div className="setting">
        <img src="./img/setting.png" />
      </div>
    </header>
  );
}

export default Header;
