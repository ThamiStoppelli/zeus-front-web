import React, { useState, useEffect } from 'react';

import { Container } from "./style";
import Card from '../../components/Cards';
import Header from '../../components/Header';

const Dashboard = () => {

  return (
    <Container>
      <Header />
      <h2>Lista de rações</h2>
      <lista>
        <Card />
      </lista>
    </Container>
  );
}

export default Dashboard;