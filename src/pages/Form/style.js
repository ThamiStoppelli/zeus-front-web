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

`;
