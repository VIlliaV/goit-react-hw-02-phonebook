import styled from 'styled-components';

export const Form = styled.form`
  width: 200px;
  padding: 7px;
  margin-bottom: 25px;
  font-size: 18px;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgb(101, 101, 101, 0.5);
  & p {
    font-weight: 500;
    margin-bottom: 5px;
  }
  & input {
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 5px 5px 10px rgb(101, 101, 101, 0.5);
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
