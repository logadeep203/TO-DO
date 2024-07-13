import React from 'react';
import './index.css'; // Import your CSS file

const Header = ({title}) => {
  return (
    <header className="header">
      {title}
    </header>
  );
};

export default Header;
