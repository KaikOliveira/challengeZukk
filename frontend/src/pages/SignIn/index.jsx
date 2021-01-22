import React, { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { useHistory } from "react-router-dom";
import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Wrapper, ConteinerForm} from './styles';

function SignIn() {
  const history = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    
    if (!user || !password){
      alert("Preencha todos os campos");
    }else{
      const response = await api.post('logon', { user, password });
      const TOKEN_KEY = "token";
      
      const login = token => {
        localStorage.setItem(TOKEN_KEY, token);
      };

      login(response.data.token);
      history.push('/welcome');
    }
  };

  return (
    <Wrapper>
      <ConteinerForm>
        <form onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <Input 
            name="user" 
            icon={FiMail} 
            placeholder="Usuario" 
            value={user}
            onChange={event => setUser(event.target.value)}
          />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <Button type="submit">Entrar</Button>
        </form>
      </ConteinerForm>
    </Wrapper>
  );
}

export default SignIn;