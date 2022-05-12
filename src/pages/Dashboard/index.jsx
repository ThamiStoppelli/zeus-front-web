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
    <>
      <Header />
      <Container>
        <section>
          <h2>Lista de rações</h2>
          <button className="buttonAdd" onClick={() => {navigate('/cadastrar')}}>Cadastrar ração</button> 
        </section>

        <div>
          {/* <Total/> */}
          <MonthTotal/>
          <lista> 
            <Card />
          </lista>
        </div>
      </Container>
    </>
  );
}

export default Dashboard;