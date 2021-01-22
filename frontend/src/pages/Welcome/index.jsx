import React from 'react';

import { Wrapper, Container } from './styles';

function Welcome() {
  return (
    <Wrapper>
      <Container>
        <header>
          <span>Usuario Autenticado</span>
        </header>
      </Container>
    </Wrapper>
  );
}

export default Welcome;