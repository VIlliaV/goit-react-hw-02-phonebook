import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  padding: 7px;
  margin-bottom: 25px;
  font-size: 18px;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgb(101, 101, 101, 0.5);
  & h3 {
    font-weight: 500;
    margin-bottom: 5px;
  }
  & input {
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 5px 5px 10px rgb(101, 101, 101, 0.5);
  }
`;
