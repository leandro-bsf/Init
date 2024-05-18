import React from "react"
import  './style.css'
import Menu_Superior from "../Menu_superior/Menu_superior"
import '../Style_universal.css'
import Button from 'react-bootstrap/Button';
import { IoIosArrowForward } from "react-icons/io";
export default function Contato(){
    return(

    <div className="Div_Contato_principal">
          <Menu_Superior />
          <h1>Fale Conosco</h1>
      <h2 className="Titulo_h2">Entre em  <span  className="Titulo_h2_azul">contato </span> para saber como conseguimos te ajudar</h2>
      <div className="contato">
   
       <div className="form_contato">
    
       <input placeholder='Nome' type='text'></input>
      <input placeholder='Email' type='email'></input>
      <input placeholder='Telefone' type='phone'></input>
      <input placeholder='Mensagem' type='text'></input>
      <Button   className="button_Contato">Enviar <IoIosArrowForward /> </Button>
       </div>
       <div className="div_texto">
       <h2 style={{ color:  '#38b6ff' , fontWeight: 'bold' }}>Contate-nos para sabermos mais sobre os problemas do seu negócio!</h2>
       <h3>Use o formulário ou qualquer uma de nossas redes sociais para falar com a gente. Muito em breve, um dos nossos membros entrará em contato com você.</h3>
         <h3 style={{ fontWeight: 'bold' }}>Horarios:</h3>
         <span>Seg - Sex 08:00 às 20:00</span> <br/>
         <span>Sab - Dom 08:00 às 13:00</span>

       </div>
    
   </div>
   </div>
   
    )
}