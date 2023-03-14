import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: baseline;
  margin-bottom: 5px;
  font-size: 16px;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  &.delete {
    opacity: 0;
    transform: translateX(-100%);
  }
  & p {
    margin: 0px 10px 5px;
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
