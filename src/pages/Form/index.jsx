import React, { useState, useEffect } from 'react';
import Header from "../../components/Header";
import { Container } from './style';
import api from '../../services/api';
import { Navigate, useNavigate } from 'react-router-dom';


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
  const [formTitle, setFormTitle] = useState("Cadastrar ração")
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (id !== undefined) {
  //     setFormTitle("Editar ração");
      //mudar botão
      //mudar feedback
//     }
// }, [])

//colocar os dados nos campos dos inputs

  function getData(name) {
    setData(name.target.value)
    console.log(name.target.value)
  }

  function handleChange(field) {
    const { name, value } = field.target;
    setData({ ...data, [name]: value })
    console.log(field.target.value)
  }

  function handleSubmit(field) {
    field.preventDefault()
    api.post("/food/create", data).then(function (response) { 
      
      setData(response.data)
      navigate('/')
      alert("Ração cadastrada com sucesso");

    })
      .catch(function (error) {
        alert("Preencha os campos obrigatórios para cadastrar");
        console.log(error); // Network Error
      });
  }


  return (
    <>

      <Container>
        <Header />
        <h2>{ formTitle }</h2>
        <form onSubmit={handleSubmit} >
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
      </Container>
    </>
  );
}

export default Form;