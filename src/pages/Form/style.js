import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid black; */
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  label {
    display: flex;
    flex-direction: column;
  }
  h2 {
    color: black;
    text-align: center;
    font-weight: 600;
  }
  .registerButton {
    background-color: tomato;
    border-radius: 4px;
    color: white;
    text-align: center;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
  }
  .goBackButton {
    background-color: #cfcdc8;
    border-radius: 4px;
    color: black;
    text-align: center;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    width: 161px;
  }
`;
