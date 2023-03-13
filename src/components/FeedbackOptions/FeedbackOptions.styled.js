import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  & button {
    padding: 10px;
    margin: 10px;
    font-size: 24px;
    cursor: pointer;
    &:active {
      background-color: blue;
    }
  }
`;
