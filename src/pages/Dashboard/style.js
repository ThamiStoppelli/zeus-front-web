import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid black; */
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    /* font-size: 30px;
    margin-top: 20px; */
    color: black;
    text-align: center;
    font-weight: 600;
  }

  .buttonAdd {
    background-color: #4CAFaa;
    border-radius: 8px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    //margin-left: auto;
    text-decoration: none;
  }

  lista {
    display: flex;
    flex-direction: column-reverse;
    gap: 12px;
  }

`;