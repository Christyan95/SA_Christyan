import React from 'react';
import GlobalStyle from './styles/global';
import styled from 'styled-components';
import Header from './Components/Header';

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function App() {
  return (
    <>
      <Header />

      <GlobalStyle />
    </>
  );
}

export default App;