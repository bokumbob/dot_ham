import { imgLink } from 'etc/imgLink';
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="top-header">
      <Link to="/">
        <h1 className="title">닷-햄</h1>
      </Link>
      <div className="setting">
        <img src={`${imgLink}setting.png`} />
      </div>
    </header>
  );
}

export default Header;
