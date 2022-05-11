import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction:row;
  border: 1px solid black;
  width: 20vw;
  height: 320px;
  background-color: #cfcdc8;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
//ver da posição do título "Zeus" mudando entre tela home e cadastrar

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
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }
  .input {
    display: flex;
    flex-direction: row;
    gap: 20px
  }
  
  input {
    width: 180px;
    height: 20px
  }
  button {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .header {
    margin-bottom: 20px;
    font-weight: 200;
    text-align: center;
  }
`;
