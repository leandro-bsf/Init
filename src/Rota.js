import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import Home from './Componentes/Home/Home';
import Contato from './Componentes/Contato/Contato'
import Sobre_nos from './Componentes/Sobre_nos';

const Rota = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route component = { Contato }  path="/Contato" />
      <Route component = { Sobre_nos }  path="/Sobre_nos" />
      </BrowserRouter>
  );
};

export default Rota;