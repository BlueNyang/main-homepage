import React from 'react';
import headercss from './Header.module.css';
import Theme from '../../modules/change-theme/Theme';

const Header = () => {
  return (
    <header className="no-margin no-padding container ">
      <div className="row">
        <div className={`${headercss.menu} col`}>
          <Theme />
        </div>
        <h1 className={`${headercss.logo} no-margin no-padding font-big col`}>
          <a href="/">BlueNyang</a>
        </h1>
      </div>
    </header>
  );
};

export default Header;
