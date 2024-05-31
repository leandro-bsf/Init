import React, { useState } from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import  projeto1 from  './imagem/projeto1.png'
import  projeto2 from  './imagem/projeto2.png'
import  projeto3 from  './imagem/projeto3.png'
import Menu_Superior from '../Menu_superior/Menu_superior';
import Orcamento_mapa from '../Orcamento_mapa';
export default function Portifolio(){
  return (
    <div className='Container_principal'>
        <Menu_Superior/>
        <h1>Cases de Sucesso</h1>
        <span>Conheça um pouco dos projetos que já realizamos.</span>
        <div className='container-items'>
      <div className='container_portifolio'>
        <span>Ceconi Instalações</span>
        <div className='image-container'>
          <img src={projeto1} alt="Projeto 1" />
        </div>
      </div>

      <div className='container_portifolio'>
        <span>Ceconi Instalações</span>
        <div className='image-container'>
          <img src={projeto1} alt="Projeto 1" />
        </div>
      </div>

      <div className='container_portifolio'>
        <span>Ceconi Instalações</span>
        <div className='image-container'>
          <img src={projeto1} alt="Projeto 1" />
        </div>
      </div>

      <div className='container_portifolio'>
        <span>Ceconi Instalações</span>
        <div className='image-container'>
          <img src={projeto1} alt="Projeto 1" />
        </div>
      </div>
    </div>

     <Orcamento_mapa />
    </div>
          
  );

}