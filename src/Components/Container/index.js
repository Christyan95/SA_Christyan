import React from 'react';
import * as C from './style';
import perfilImg from '../../img/perfil.png'; 
import curriculo from '../../archive/curriculo.pdf'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Container = () => {
  return (
    <>
      <C.Container>

        <C.PerfilPic>
          <C.Img src={perfilImg} alt='perfil pic' />
        </C.PerfilPic>

        <C.HomeContent>

          <C.H5>
            Olá, eu souㅤ

            <C.Area>
              Desenvolvedor Web
            </C.Area>
          </C.H5>

          <C.H1>
            Christyan Araujo
          </C.H1>

          <C.P>
            Estudante de Engenharia de Computação, fascinado pela tecnologia e computação.
            Tenho facilidade em resolver problemas e solucionar melhorias.
          </C.P>

          <C.HomeSci>
            <C.A href='#'><C.Icon><FaFacebook /></C.Icon></C.A>
            <C.A href='#'><C.Icon><FaInstagram /></C.Icon></C.A>
            <C.A href='https://www.linkedin.com/in/sachristyan03/'><C.Icon><FaLinkedin /></C.Icon></C.A>
            <C.A href='https://github.com/Christyan95'><C.Icon><FaGithub /></C.Icon></C.A>

            <C.BtnGroup>
              <C.ABtnBox href={curriculo} download>Download CV</C.ABtnBox>
            </C.BtnGroup>
          </C.HomeSci>

        </C.HomeContent>

      </C.Container>
    </>
  );
}

export default Container;