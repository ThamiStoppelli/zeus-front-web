import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid black; */
  margin-top: 26px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  form {
    margin-top: 10px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 16rem;
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

  button {
    border-radius: 4px;
    font-weight: bold;
    font-size: 14px;
    width: 120px;
    height: 30px;
    margin-top: 20px;
  }
  button:hover {
    cursor: pointer;
  }
  .registerButton {
    background-color: tomato;
    color: white;
    text-align: center;
    display: inline-block;
  }
  .goBackButton {
    background-color: #EFE6DD;
    color: black;
    text-align: center;
    display: inline-block;
  }
  
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

`;
