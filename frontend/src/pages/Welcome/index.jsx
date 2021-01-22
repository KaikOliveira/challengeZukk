import React from 'react';

import Map from '../../components/Map';

import { Wrapper, Container } from './styles';


function Welcome() {

  return (
    <Wrapper>
      <Container>
        <header>
          <span>Usuario Autenticado</span>
          <h2>Lista de Clientes</h2>
        </header>

        
      </Container>

      <Map />

    </Wrapper>
  );
}

export default Welcome;