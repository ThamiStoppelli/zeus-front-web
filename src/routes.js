import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Dashboard from "./pages/Dashboard"
import Form from "./pages/Form"

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/cadastrar" element={<Form />} />
    </Routes>
  );
}

export default Paths;