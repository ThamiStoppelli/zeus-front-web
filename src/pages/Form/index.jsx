import React, { useState } from 'react';
import Header from "../../components/Header";
import { Container } from './style';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';


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
  const navigate = useNavigate()


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
    }).catch(function (error) {
        alert("Preencha os campos obrigatórios para cadastrar");
        console.log(error);
      });
  }

  function goBack () {
    navigate('/')
  }

  return (
    <>
      <Header />
      <Container>
        <h2>Cadastrar ração</h2>
        <form onSubmit={handleSubmit} >
          <label>
            Marca da ração:
            <input type="text" name="name" value={data.name} placeholder='Nome da marca' onChange={handleChange} />
          </label>
          <label>
            Preço (R$):
            <input type="number" name="price" value={data.price} placeholder='Preço em reais' step="0.01" min="0.01" onChange={handleChange} />
          </label>
          <label>
            Quantidade (kg):
            <input type="number" name="amount" value={data.amount} placeholder='Quantidade em quilogramas' step="0.1" min="0.1" onChange={handleChange} />
          </label>
          <label>
            Descrição:
            <input type="text" name="description" value={data.description} placeholder='' onChange={handleChange} />
          </label>

          <div>
            <button className='goBackButton' onClick={goBack}>Voltar</button>
            <button className='registerButton' type="submit" value="Cadastrar">Cadastrar</button>
          </div> 
        </form> 
      </Container>
    </>
  );
}

export default Form;