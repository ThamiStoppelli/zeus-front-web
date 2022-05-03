import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction:row;
  border: 1px solid black;
  width: 50vw;
  height: 100px;
  background-color: #cfcdc8;
  border-radius: 8px;
  gap: 300px;
  /* box-shadow: 0px 0px 15px -5px; */
  
  h3 {
    font-weight: 400;
    width: 300px;
  }

  icons {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

`;