import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import Map from '../../components/Map';

import { 
  Wrapper,
  Container, 
  ListClients,
  List,
  Name,
  AddressAndContact,
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
              <AddressAndContact>
                <p><strong>Endereço:</strong> {client.endereco}</p>
                <p><strong>Bairro: </strong> {client.bairro}</p>
                <p><strong>Cidade: </strong> {client.cidade}</p>
                <p><strong>UF: </strong> {client.uf}</p>
                <p><strong>Telefone: </strong> {client.telefone}</p>
                <p><strong>E-mail: </strong> {client.email}</p>
              </AddressAndContact>
            </List>
          ))}
        
        </ListClients>
      </Container>

      <Map />

    </Wrapper>
  );
}

export default Welcome;