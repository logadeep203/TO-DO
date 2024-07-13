import React from 'react';
import './index.css'

const Footer = ({length}) => {
  const year = new Date();
  return (
    <footer className="footer">
      Copyright &copy; {year.getFullYear()}
      <p>total no of {length === 1 ? 'item' : 'items'} {length} </p>
    </footer>
  );
};

export default Footer;
