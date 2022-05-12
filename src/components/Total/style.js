import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction:row;
  border: 1px solid black;
  width: 20vw;
  height: 120px;
  background-color: #cfcdc8;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 40px;

//ver da posição do título "Zeus" mudando entre tela home e cadastrar

  #texto {
    line-height: 32px;
    font-weight: 200;
  }

  h3 {
    line-height: 32px;
    font-weight: 200;
  }

  span {
    align-items: left;
  }

  span:nth-child(2) {
    margin-left: 20px;
  }
`;
