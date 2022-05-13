import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from "./style";
import Card from '../../components/Cards';
import Header from '../../components/Header';
import MonthTotal from '../../components/MonthTotal';


const Dashboard = () => {

  let navigate = useNavigate()

  
  return (
    <>
      <Header />
      <Container>
      <h2>Lista de rações</h2>
        <section>
          <button className="buttonAdd" onClick={() => {navigate('/cadastrar')}}>Cadastrar ração</button> 
        </section>

        <div>
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