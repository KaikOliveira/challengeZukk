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
  width: 380px;
  height: 90%;

  border: 0.2px solid #808080 ;
  border-radius: 20px;

  h1 {
    font-weight: bold;
  }
`;

export const Input = styled.input`
  margin: 80px 0;
  width: 330px;
  text-align: center;
`;

export const Button = styled.button`
  color: #f4ede8;
  display: block;
  margin-top: 24px;
  text-decoration: none;
  transition: color 0.2s;
`;
