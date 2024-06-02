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
        <h2 className="Titulo_h2">Cases de Sucesso</h2>
        <h2 className="sub_Titulo_h2">Conheça um pouco dos <span className="Titulo_h2_azul">projetos</span>  que já realizamos.</h2>
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