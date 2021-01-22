import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 1300px;
  background: #f5f5f5;
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
      color: #01579B;
      margin-top: 10px;
    }

    h2 {
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
`;

export const ListClients = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 85vh;
  align-items: center;
`;

export const List = styled.li`
  margin-top: 5px;
  margin-bottom: 5px;
  list-style: none;
  width: 90%;
  background: #fff;
  border-radius: 20px;
  border: solid 0.3px #03A9F4;
`;

export const Name = styled.h3`
  text-align: center;
  font-weight: bold;
`;

export const Address = styled.div``;

export const Contact = styled.div``;
