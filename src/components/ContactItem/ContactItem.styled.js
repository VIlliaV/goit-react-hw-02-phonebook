import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: 24px;
  & p {
    margin: 0px 10px 5px;
  }
  & span {
    background-color: black;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
  }
`;
