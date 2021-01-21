import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Wrapper, ConteinerForm, Input, Button } from './styles';

function SignIn() {
  return (
    <Wrapper>
      <ConteinerForm>
        <h1>Faça o Login</h1>
        <Input
          name="email"
          icon={FiMail}
          placeholder="E-mail"
        />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>
      </ConteinerForm>
    </Wrapper>
  );
}

export default SignIn;