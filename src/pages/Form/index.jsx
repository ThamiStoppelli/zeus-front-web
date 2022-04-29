import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import { Container } from './style';
import axios from 'axios'

const url = "http://localhost:5000"

const Form = () => {

  function newData() {
    return {
      name: '',
      price: 0,
      amount: 0,
      description: ''
    }
  }

  // const [title, setTitle] = useState('')
  //<input onChange={event => setTitle(event.target.value)} />

  const [count, setCount] = useState(0);

  const [data, setData] = useState(newData);
  const [print, setPrint] = useState(false);


  function getData(name) {
    setData(name.target.value)
    setPrint(false)
    // console.warn(name.target.value)
    console.log(name.target.value)
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
    console.log(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post(`${url}/food/create`, data).then(function (response) { 
      setData(response.data)
    })
      .catch(function (error) {
        console.log(error); // Network Error
        console.log(error.status); // undefined
        console.log(error.code); // undefined
      });
  }


  return (
    <>

      <Container>
        <Header />
        <h2>Cadastrar ração</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Marca da ração:
            <input type="text" name="name" value={data.name} placeholder='Nome da marca' onChange={handleChange} />
          </label>
          <label>
            Preço (R$):
            <input type="number" name="price" value={data.price} placeholder='Preço em reais' onChange={handleChange} />
          </label>
          <label>
            Quantidade (kg):
            <input type="number" name="amount" value={data.amount} placeholder='Quantidade em quilogramas' onChange={handleChange} />
          </label>
          <label>
            Descrição:
            <input type="text" name="description" value={data.description} placeholder='' onChange={handleChange} />
          </label>

          {/* button */}
          <input type="submit" value="Cadastrar"></input>

        </form>

        <p>Você clicou {count / 2} vezes</p>
        <button onClick={() => setCount(count + 2)}>
          Clique aqui
        </button>
      </Container>
    </>
  );
}

export default Form;