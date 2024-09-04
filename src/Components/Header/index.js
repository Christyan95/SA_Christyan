import React from 'react';
import Navbar from '../Navbar';
import * as C from './style';

const Header = () => {
  return (
    <>
      <C.Header>
          <C.Logo>
              <C.LogoTxt>Christyan Araujo</C.LogoTxt>
          </C.Logo>

          <Navbar />
      </C.Header>
    </>
  );
}

export default Header;