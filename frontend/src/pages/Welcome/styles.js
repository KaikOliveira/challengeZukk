import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 500px;

  header {
    height: 85px;
    width: 100%;
    border-bottom: solid 0.5px #222;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 15px;
      color: #666;
      margin-top: 10px;
    }

    h2 {
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
`;