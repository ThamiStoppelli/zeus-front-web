import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid black; */
  margin-top: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 16px;

  section {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
    width: 50%;
    margin-left: 20rem;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    /* font-size: 30px;
    margin-top: 20px; */
    color: black;
    text-align: center;
    font-weight: 600;
  }

  .buttonAdd {
    background-color: tomato;
    border-radius: 8px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    //margin-left: auto;
    //border: none;
    width: 200px;
  }

  .buttonAdd:hover {
    cursor: pointer;
  }

  lista {
    display: flex;
    flex-direction: column-reverse;
    gap: 12px;
  }

  div {
    display: flex;
    flex-direction: row;
  }

`;