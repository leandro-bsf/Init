import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import Home from './Componentes/Home/Home';
import Contato from './Componentes/Contato/Contato'
import Sobre_nos from './Componentes/Sobre_nos';
import Nossos_servico from './Componentes/Nossos_servicos/Nossos_servicos';
const Rota = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route component = { Contato }  path="/Contato" />
      <Route component = { Sobre_nos }  path="/Sobre_nos" />
      <Route component = { Nossos_servico }  path="/Nossos_servico" />
      </BrowserRouter>
  );
};

export default Rota;