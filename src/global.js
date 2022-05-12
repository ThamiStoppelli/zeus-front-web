import { createGlobalStyle } from "styled-components";
import Piranya from "./assets/fonts/PiranyaRegular-Ea2R4.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Piranya";
  src: url(
    ${Piranya}
  );
}

:root {
  --light-blue: #9BD1E5;
}

* {
  margin: 0;
  padding: 0;
  /* font-family: 'Piranya'; */
  /* background: var(--light-blue); */
}
`;

export default GlobalStyle;
