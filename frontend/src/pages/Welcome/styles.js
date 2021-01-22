import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  max-height: 1200px;
  width: 100vw;
  max-width: 1300px;

  display: flex;
  align-items: stretch;
`;

export const Container = styled.div`
  width: 100%;
  min-width: 250px;
  max-width: 350px;

  header {
    height: 80px;
    width: 100%;
    border-bottom: solid 0.2px #999;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 12px;
      color: #777;
      margin-top: 10px;
    }

    h2 {
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
`;