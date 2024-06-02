import React, { useState } from 'react';
import './style.css';
import { motion } from "framer-motion"
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
        <div className='Titulos'>
        <h1>Cases de Sucesso</h1>
        <span>Conheça um pouco dos projetos que já realizamos.</span>
        </div>
       
        <motion.div className='container-items'
       initial={{opacity: 0 , x: -100}}
       whileInView={{opacity: 1 , x: 0}}
       exit={{opacity: 0}}
       transition={{duration: 0.5}}>
      <div className='container_portifolio'
       >
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

     
    </motion.div>

     <Orcamento_mapa />
    </div>
          
  );

}