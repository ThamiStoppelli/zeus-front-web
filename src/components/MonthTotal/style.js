import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction:row;
  border: 1px solid black;
  width: 20vw;
  height: 385px;
  background-color: #EFE6DD;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 40px;

  #texto {
    line-height: 32px;
    font-weight: 200;
    font-size: 20px;
  }

  h3 {
    line-height: 32px;
    font-weight: 200;
    font-size: 16px;
  }

  span {
    align-items: left;
  }

  span:nth-child(2) {
    margin-left: 20px;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    align-items: center;
  }
  .input {
    display: flex;
    flex-direction: row;
    gap: 20px
  }
  
  input {
    width: 8rem;
    height: 20px
  }
  button {
    margin-top: 20px;
    margin-bottom: 10px;
    background-color: tomato;
    border-radius: 8px;
    color: white;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    width: 200px;
  }
  button:hover {
    cursor: pointer;
  }
  .header {
    margin-bottom: 20px;
    font-weight: 200;
    text-align: center;
  }
`;
