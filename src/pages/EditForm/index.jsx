import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import { Container } from './style';
import api from '../../services/api';



const Form = () => {

  function newData() {
    return {
      name: '',
      price: '',
      amount: '',
      description: ''
    }
  }

  // const [title, setTitle] = useState('')
  //<input onChange={event => setTitle(event.target.value)} />


  const [data, setData] = useState(newData);


  function getData(name) {
    setData(name.target.value)
    console.log(name.target.value)
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setData({ ...data, [name]: value })
    console.log(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    api.post("/food/update", data).then(function (response) { 
      setData(response.data)
    })
      .catch(function (error) {
        console.log(error); // Network Error
      });
  }


  return (
    <>

      <Container>
        <Header />
        <h2>Editar ração</h2>
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
          <input type="submit" value="Editar"></input>

        </form>
      </Container>
    </>
  );
}

export default Form;