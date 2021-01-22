import styled from 'styled-components';

export const ContainerMap = styled.div`
  height: 90vh;
  width: 110%;
  display: flex;

  background: #888;

  div {
    flex: 1;
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;

    a {
      text-decoration: none;
      color: #666;
      font-family: Roboto, sans-serif;
    }
  }
`;