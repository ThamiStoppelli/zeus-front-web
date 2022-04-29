import "./global.js";
import { BrowserRouter } from "react-router-dom"; //{ } para pegar um elemento do "react-router-dom"

import Paths from "./routes";

import GlobalStyle from './global.js';

function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      
      <Paths />
    </BrowserRouter>
    </>
  );
}

//aaaaaa

export default App;

//filtro por mês

//ver sobre colocar gráfico