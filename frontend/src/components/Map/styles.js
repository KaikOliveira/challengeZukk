import styled from 'styled-components';

export const ContainerMap = styled.div`
  height: 90%;
  width: 100%;
  display: flex;

  background: #eee;

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
      opacity: 0;
      text-decoration: none;
    }
  }
`;