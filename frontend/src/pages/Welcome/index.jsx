import React from 'react';

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
    </Wrapper>
  );
}

export default Welcome;