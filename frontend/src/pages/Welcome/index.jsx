import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import Map from '../../components/Map';

import { 
  Wrapper,
  Container, 
  ListClients,
  List,
  Name,
  Address,
  Contact
} from './styles';

function Welcome() {
  const [dataClient, setDataClient] = useState([]);

  useEffect(() => {
    api.get('clients').then(response => {
      setDataClient(response.data);
    });
  }, [dataClient]);

  return (
    <Wrapper>
      <Container>
        <header>
          <span>Usuario Autenticado</span>
          <h2>Lista de Clientes</h2>
        </header>

        <ListClients>
          
          {dataClient.map(client => (
            <List key={client.id}>
              <Name>{client.name}</Name>
              <Address>
                <p>{client.endereco}</p>
                <p>{client.bairro}</p>
                <p>{client.cidade}</p>
                <p>{client.uf}</p>
              </Address>
              <Contact>
                <p>{client.telefone}</p>
                <p>{client.email}</p>
              </Contact>
            </List>
          ))}
        
        </ListClients>
      </Container>

      <Map />

    </Wrapper>
  );
}

export default Welcome;