import React, { useCallback, useRef} from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Wrapper, ConteinerForm} from './styles';

function SignIn() {
  const formRef = useRef(null);

  const handleSubmit = useCallback(() => {
    console.log("deu")
  },[]);

  return (
    <Wrapper>
      <ConteinerForm>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>
      </ConteinerForm>
    </Wrapper>
  );
}

export default SignIn;