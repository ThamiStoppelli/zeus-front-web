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

  const [data, setData] = useState(newData);
  const [formTitle, setFormTitle] = useState("Cadastrar ração")
  const navigate = useNavigate()

//colocar os dados nos campos dos inputs
  // useEffect(() => {
  //   if (id !== undefined) {
  //     setFormTitle("Editar ração");
      //mudar botão
      //mudar feedback
//     }
// }, [])

//verificacao
  // function getData(name) {
  //   setData(name.target.value)
  //   console.log(name.target.value)
  // }
//<input onChange={event => setTitle(event.target.value)} />


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

  function goBack () {
    navigate('/')
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
            <input type="number" name="price" value={data.price} placeholder='Preço em reais' min="0.1" onChange={handleChange} />
          </label>
          <label>
            Quantidade (kg):
            <input type="number" name="amount" value={data.amount} placeholder='Quantidade em quilogramas' min="0.1" onChange={handleChange} />
          </label>
          <label>
            Descrição:
            <input type="text" name="description" value={data.description} placeholder='' onChange={handleChange} />
          </label>

          <button className='registerButton' type="submit" value="Cadastrar">Cadastrar</button>

        </form>
        <button className='goBackButton' onClick={goBack}>Voltar</button> 
        {/* botao voltar para a pagina principal */}
      </Container>
    </>
  );
}

export default Form;