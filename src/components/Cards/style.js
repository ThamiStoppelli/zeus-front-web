import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction:row;
  border: 1px solid black;
  width: 50vw;
  height: 100px;
  background-color: #cfcdc8;
  border-radius: 8px;
  /* gap: 50px; */
  /* box-shadow: 0px 0px 15px -5px; */
  
  h3 {
    font-weight: 400;
    width: 50vw;
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

`;