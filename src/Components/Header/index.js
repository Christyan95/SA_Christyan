import React from 'react';
import Navbar from '../Navbar';
import Container from '../Container';
import * as C from './style';

const Header = () => {
  return (
    <>
    <C.Header1>
      <C.Head>
        <C.Header>
            <C.Logo>
                <C.LogoTxt>Christyan Araujo</C.LogoTxt>
            </C.Logo>

            <Navbar />

            <Container />
        </C.Header>
      </C.Head>
    </C.Header1>
    </>
  );
}

export default Header;