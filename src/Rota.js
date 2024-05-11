import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import Home from './Componentes/Home/Home';
import Contato from './Componentes/Contato/Contato'

const Rota = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route component = { Contato }  path="/Contato" />
      </BrowserRouter>
  );
};

export default Rota;