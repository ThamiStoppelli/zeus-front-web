import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { Container } from "./style";
import Card from '../../components/Cards';
import Header from '../../components/Header';
import Total from '../../components/Total';
import MonthTotal from '../../components/MonthTotal';


const Dashboard = () => {

  let navigate = useNavigate()

  
  return (
    <Container>

      <Header />
      <h2>Lista de rações</h2>
      {/* <Link class="buttonAdd" to="/cadastrar">Cadastrar ração</Link> */}
      <button class="buttonAdd" onClick={() => {navigate('/cadastrar')}}>Cadastrar ração</button> 

      <div>
        <Total/>
        <lista> 
          <Card />
        </lista>
      </div>

    </Container>

  );
}

export default Dashboard;