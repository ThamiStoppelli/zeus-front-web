import React, { useState } from 'react';
import Header from "../../components/Header";
import { Container } from './style';

const Form = () => {

  function newData() {
    return{
       name:'',
       price: 0,
       quantity:0,
       description:''

    }
 }

  // const [title, setTitle] = useState('')
  //<input onChange={event => setTitle(event.target.value)} />

  const [count, setCount] = useState(0);

  const [data, setData] = useState(newData);
  const [print, setPrint] = useState(false);
  
  function getData(name)
  {
    setData(name.target.value)
    setPrint(false)
    console.warn(name.target.value)
  }

  return (
    <>

    <Container>
      <Header />
      <h2>Cadastrar ração</h2>
      <form>
        <label>
          Marca da ração:
 
          {
            print?
            <h2>{data}</h2>
            :null
          }
          <input placeholder='Digite o nome da marca da ração' onChange={event => getData(event.target.value)} />
          <button onClick={()=>setPrint(true)}>Imprimir</button>

        </label>
        <label>
          Preço (R$):
          <input placeholder='Digite o preço em reais' />
        </label>
        <label>
          Quantidade(kg):
          <input placeholder='Digite a quantidade em quilogramas' />
        </label>
        <label>
          Descrição:
          <input placeholder='' />
        </label>
        
        {/* button */}
        <input type="submit" value="Cadastrar"></input> 

      </form>

      <p>Você clicou {count} vezes</p>
        <button onClick={() => setCount(count + 1)}>
          Clique aqui
        </button>
    </Container>
    </>
  );
}

export default Form;