import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction:row;
  /* border: 1px solid black; */
  width: 50vw;
  height: 120px;
  background-color: #EFE6DD;
  border-radius: 8px;
  /* gap: 50px; */
  /* box-shadow: 0px 0px 15px -5px; */

  h3 {
    font-weight: 400;
    width: 48.5vw;
    word-break: break-all;
  }

  icons {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 0.5vw;
  }

  .button {
    height: 40px;
  }

  .button:hover {
    cursor: pointer;
  }

  info {
    width: 43vw;
    margin-left: 1vw;
    margin-top: 0.3vw;
  }

  .containerModal {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: lightgrey;
    width: 30%;
    height: 60%;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    cursor: default;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 16rem;
  }
//css do componente do modal

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
  .editButton {
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
  
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

`;