import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="question">?</div>
      <Link to="/collection">
        <div className="collection">컬렉션</div>
      </Link>
    </div>
  );
};

export default Footer;
