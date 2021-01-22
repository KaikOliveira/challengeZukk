import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #f4ede8;
  border-radius: 10px;
  padding: 16px;
  width: 90%;
  border: 2px solid #232129;
  color: #312e38;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 10px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #0091EA;
      border-color: #0091EA;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #0091EA;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #312e38;
    &::placeholder {
      color: #312e38;
    }
    & + input {
      margin-top: 8px;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
