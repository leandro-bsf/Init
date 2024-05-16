import React from "react"
import Menu_Superior from "../Menu_superior/Menu_superior"
import './styles.css';
import Accordion from 'react-bootstrap/Accordion';
import foto_banner  from  './imagens/image_banner.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { TiEdit } from "react-icons/ti";
import { FaCode } from "react-icons/fa6";
import { motion } from "framer-motion"
import { IoIosArrowForward } from "react-icons/io";
import TypeIt from "typeit-react";
import banner2 from './imagens/banner2.png'
import banner3 from './imagens/banner3.png'
import Depoimentos from "../Depoimentos";
import Perguntas from "../Perguntas";
import Roda_pe from "../Roda_pe";

export default function Home(){
   console.log('chegou na home')
    return(
       <div>
         <Menu_Superior/>
         <div className="Div_capa">
             
                  <div className="Div_capa_1">
                     <h2 style={{fontWeight: 'bold'}}>Uma página web responsiva é  <span style={{ color: '#38b6ff' }}   >ESSENCIAL</span></h2>
                     <span>Garante uma experiência consistente em qualquer dispositivo Isso não apenas satisfaz os usuários, mas também impulsiona o alcance e o sucesso online do seu negócio.</span> 
                     <div className="div_buttons_web">
                       <Button variant="info">Vamos Conversar</Button>
                       <Button variant="info">Vamos Conversar</Button>
                     </div>
                 
                  </div>
                  <div className="Div_capa_2">
                     <img src={foto_banner}></img>

                     <div className="div_buttons_mobile">
                       <Button variant="info">Vamos Conversar</Button>
                       <Button variant="info">Vamos Conversar</Button>
                     </div>
                  </div>
             
         </div>
         <  div className="Servicos" >

          <h1>O que fazemos?</h1>
          <h2>Veja quais <span style={{ color: '#38b6ff' }} >serviços</span>  oferecemos e como posso ajudar você</h2>

           <motion.div className="Servicos_itens" 
              initial={{opacity: 0 , x: -50}}
              whileInView={{opacity: 1 , x: 0}}
              exit={{opacity: 0}}
              transition={{duration:  1.9}}>
               
          <Card  className="item_card">
             <TiEdit  className="icone_servicos"/>
                <Card.Body>
                   <Card.Title className="titulo_servicos">Prototipação</Card.Title>

                   <TypeIt
        options={{
          strings: ["  Arquitetamos seu produto e desenvolvemos o conceito e comunicação visual. Por fim, é feito o design de todas as telas!"],
          speed: 40,
          waitUntilVisible: true,
        }}
      />
                
             </Card.Body>
          </Card>

          <Card  className="item_card">
            <FaCode  className="icone_servicos" />
                <Card.Body>
                   <Card.Title className="titulo_servicos"  >Desenvolvimento</Card.Title>
                 <TypeIt className="Texto_car">
                  Com o design pronto, nosso time de programadores irá dar vida ao projeto. Usando tecnologias de ponta, sua ideia vira realidade.
                </TypeIt>
             </Card.Body>
          </Card>

        
           </motion.div >
          
           <Button variant="info" className="button_servicos">Vamos Conversar <IoIosArrowForward /> </Button>
          </div> 

          <div className="Div_Res_mob">
          <h2>Criação de Sites <span style={{ color: '#38b6ff' }} >Responsivos </span>    e <span style={{ color: '#38b6ff' }} >Mobiles</span>  </h2>
            
            <div className="Div_infe" >        
            <span>
            Criação de sites mobiles e responsivos. Sites que se adaptam a qualquer resolução de tela, sem criar barra de rolagem.
            Em 2016, o acesso à internet via dispositivos móvel (ou mobile) ultrapassou os acessos via desktop.      
            </span>

            <img src={banner2} className="imagem_banner"></img>
       
            </div>
            <h2>Nossos Projetos</h2>
            <span>Conheça nossos<span style={{ color: '#38b6ff' }} > projetos</span>       já finalizados para nossos clientes.</span>
            <div className="Div_infe" >        
            <span>
            Clique no botão abaixo para conhecer os projetos já efetuados pelo nosso time  <br/>
            <Button variant="info"  className="button_servicos">Portfólio <IoIosArrowForward /> </Button>   
            </span>
            <img src={banner3} className="imagem_banner"></img>
            </div>

          </div>
          <div className="depoimentos">

            
          <h1>Depoimentos </h1>
         
          <h2> O que nossos <span style={{ color: '#38b6ff' }} >clientes</span>    dizem sobre nós</h2>

         <Depoimentos/>

          </div>
          <div className="Sobre_nos">
            <h1>O que é  a Init.</h1>   
          <h3> Descubra um pouco mais sobre <h3 style={{ color: '#38b6ff' }} >nós.</h3> </h3>
          <span>
          Criação de sites mobiles e responsivos. Sites que se adaptam a qualquer resolução de tela, sem criar barra de rolagem.
         Em 2016, o acesso à internet via dispositivos móvel (ou mobile) ultrapassou os acessos via desktop.
         Em 2016, o acesso à internet via dispositivos móvel (ou mobile) ultrapassou os acessos via desktop.
         Em 2016, o acesso à internet via dispositivos móvel (ou mobile) ultrapassou os acessos via desktop.
          </span>
          </div>

          <div className="Perguntas">
          <h1>Perguntas Frequentes</h1>  
          <h4> Veja as dúvidas frequentes e suas  <h4 style={{ color: '#38b6ff' }} >respostas.</h4> </h4>
         
             <Perguntas/>
          </div>

          <div className="contato">
             <h1>Fale Conosco</h1>
             <h4>Envie sua mensagem para um de nossos especialistas</h4>
              <div className="form_contato">
              <input placeholder='Nome' type='text'></input>
             <input placeholder='Email' type='email'></input>
             <input placeholder='Telefone' type='phone'></input>
             <input placeholder='Mensagem' type='text'></input>
             <button> Enviar</button>
              </div>
           
          </div>
          <div className="Solici_orcamento"  >
             <h1>Solicite já seu orçamento!</h1>
             <h4>Solicite seu orçamento agora mesmo que nossos consultores entrarão em contato.</h4>
             <Button variant="info"  className="button_servicos">Orçamento <IoIosArrowForward /> </Button>  
          </div>
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7188.497017442679!2d-53.077024210012475!3d-25.729294244325963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f047d8e26e7057%3A0x8a642cc2991886d9!2sJardim%20da%20Colina%2C%20Dois%20Vizinhos%20-%20PR%2C%2085660-000!5e0!3m2!1spt-BR!2sbr!4v1715826299626!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="mapa"></iframe>
        
         <Roda_pe/>

       </div>
   
    )
}