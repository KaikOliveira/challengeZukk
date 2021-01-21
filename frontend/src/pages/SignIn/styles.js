import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConteinerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.2px solid #808080 ;
  border-radius: 20px;
  height: 70%;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    align-items: center;
    
    flex-direction: column;

    h1 {
      margin-bottom: 50px;
      font-weight: bold;
      
    }
  }
`;