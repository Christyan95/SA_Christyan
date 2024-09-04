import React from 'react';
import * as C from './style';

const Navbar = () => {
  return (
    <>
      <C.Nav>
        {/* <C.New>
          <C.Span></C.Span>
          <C.Span></C.Span>
          <C.Span></C.Span>
        </C.New> */}

        <C.Ul>
          <C.Li>
            <C.A href='#'>Home</C.A>
          </C.Li>

          <C.Li>
            <C.A href='#'>Portfólio</C.A>
          </C.Li>

          <C.Li>
            <C.A href='#'>Skills</C.A>
          </C.Li>

          <C.Li>
            <C.A href='#'>Sobre</C.A>
          </C.Li>

          <C.Li>
            <C.A href='#'>Contato</C.A>
          </C.Li>
        </C.Ul>
      </C.Nav>
    </>
  );
}

export default Navbar