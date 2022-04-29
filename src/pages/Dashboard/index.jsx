import React from 'react';

import { Container } from "./style";
import Card from '../../components/Cards';
import Header from '../../components/Header';

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <h2>Lista de rações</h2>
      <Card />
    </Container>
  );
}

export default Dashboard;