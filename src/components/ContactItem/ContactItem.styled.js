import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 16px;

  & p {
    margin: 0px 10px 5px;
    /* font-weight: 500; */
  }
  & .name {
    font-size: 18px;
    font-weight: 500;
  }
  & span {
    background-color: black;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
  }
  & button {
    padding: 5px 10px;
    border-radius: 8px;
    box-shadow: 5px 5px 10px rgb(101, 101, 101, 0.5);
    cursor: pointer;
    &:hover {
      background-color: rgb(101, 101, 101, 0.5);
    }
  }
`;
