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
import foto from  './imagens/responsividade.gif'
import '../Style_universal.css'
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { PiBracketsCurly } from "react-icons/pi";
import Nosso_servico from  './imagens/Nossos_Projetos.gif'
export default function Home(){
   console.log('chegou na home')
    return(
       <div>
         <Menu_Superior/>
         <div className="Div_capa">
             
                  <div className="Div_capa_1">
                     
                    
                     <span className="Textos_secao">Transformamos suas ideias em realidades tangíveis com inovação, paixão e excelência. Nosso compromisso é construir um futuro brilhante ao seu lado, oferecendo soluções personalizadas que impulsionam o sucesso e superam expectativas.</span> 
                     <div className="div_buttons_web">
                     <Button variant="info" className="button_servicos">Contato<TbArrowBigRightLinesFilled /> </Button>
                     <Button variant="info" className="button_servicos">Serviços<TbArrowBigRightLinesFilled /> </Button>
                     </div>
                 
                  </div>
                  <div className="Div_capa_2">
                     <img src={foto_banner}></img>

                     <div className="div_buttons_mobile">
                     <Button variant="info" className="button_servicos">Contato<TbArrowBigRightLinesFilled /> </Button>
                     <Button variant="info" className="button_servicos">Serviços <TbArrowBigRightLinesFilled /> </Button>
                     </div>
                  </div>
             
         </div>
         <  div className="Servicos" >

          <h2 className="Titulo_h2">O que fazemos?</h2>
          <h2 className="sub_Titulo_h2">Veja quais <span className="Titulo_h2_azul" >serviços</span>  oferecemos e como podemos ajudar você.</h2>

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
          speed: 90,
          waitUntilVisible: true,
        }}
      />
                
             </Card.Body>
          </Card>

          <Card  className="item_card">
            <FaCode  className="icone_servicos" />
                <Card.Body>
                   <Card.Title className="titulo_servicos"  >Desenvolvimento</Card.Title>
                   <TypeIt
        options={{
          strings: ["  Com o design pronto, nosso time de programadores irá dar vida ao projeto. Usando tecnologias de ponta, sua ideia vira realidade."],
          speed: 90,
          
          waitUntilVisible: true,
        }} />

             </Card.Body>
          </Card>

        
           </motion.div >
          
           <Button variant="info" className="button_servicos">Veja mais <TbArrowBigRightLinesFilled /> </Button>
          </div> 

        
            
           
            <div className="Div_responsividade">
                  <div className="Div_text_resp"> 
                     <div className="divisao"></div>
                   <h2 className="Titulo_h2" style={{color: '#38b6ff'}} >Responsividade </h2>  
                        <span  className="Textos_secao">
                         Um site responsivo se adapta automaticamente a diferentes tamanhos de tela, como computadores, tablets e smartphones, reorganizando e redimensionando seu conteúdo para garantir legibilidade e fácil navegação em qualquer dispositivo.      
                   </span>  
                     <div className="divisao_1"></div>
                  </div>
                  <div className="respos_img">
                   <img src={foto} className="imagem_banner"></img> 
                  </div>
            
          
            </div> 
       
            
           
  
            <div className="Projetos" >      

             <h2 className="Titulo_h2">Nossos <span className="Titulo_h2"   style={{color: '#38b6ff'}}  >Projetos</span> </h2>
            
               <img src={Nosso_servico} className="img_projeto"/>

            <Button variant="info"  className="button_servicos">Portfólio   <TbArrowBigRightLinesFilled /> </Button> 
        
      
            </div>

         
          <div className="depoimentos">

            
          <h2 className="Titulo_h2" >Depoimentos </h2>
         
          <h2 className="sub_Titulo_h2" > O que nossos <span  className="sub_Titulo_h2" style={{color: '#38b6ff'}}  >clientes</span>    dizem sobre nós</h2>

          <Depoimentos/>

          </div>
          <div className="Sobre_nos">
            <h2 className="Titulo_h2" >O que é  a init<span   className="Titulo_h2_azul" >.</span></h2>   
            <h2 className="sub_Titulo_h2"> Descubra um pouco mais sobre <span className="sub_Titulo_h2"  style={{color: '#38b6ff'}} >nós.</span> </h2>
          
          <div className="sUb_div_sobre">

               <div className="div_sobre">
               <span  className="Textos_secao_2">
               Texto do LeandroTexto do LeandroTexto do LeandroTexto do LeandroTexto do LeandroTexto do LeandroTexto do LeandroTexto do LeandroTexto do LeandroTexto do LeandroTexto do LeandroTexto do LeandroTexto do Leandro.
                </span>
                <h3>Founder Init. Solutions</h3>
                <span  className="Textos_secao_2">
                Desde o início da graduação, identificamos uma necessidade significativa no mercado. Motivados pela disposição e pelo desejo constante de aprender e evoluir, unimos nossas forças. Com coragem e iniciativa, transformamos essa ideia em uma realidade concreta.
                </span>
                <h3>Co-Founder Init. Solutions</h3>
               </div>
               <div className="div_sobre_init">
          
                  <span className="Textos_secao_2">
                  A Init Solutions nasceu da idealização de dois jovens graduandos em Engenharia de Software, determinados a revolucionar o desenvolvimento web. 

                  Com uma visão clara e ambiciosa, eles se especializaram na criação de sites responsivos e designs inovadores. 

                  A Init. Solutions se compromete a oferecer soluções de alta qualidade, garantindo que cada projeto seja visualmente atraente, funcional em qualquer dispositivo e alinhado com as necessidades específicas de cada cliente. 
                  </span>
               </div>

          </div>
         
          </div>

          <div className="Perguntas">

          <h2  className="Titulo_h2">Perguntas Frequentes</h2>  
          <h2  className="sub_Titulo_h2"> Veja as dúvidas frequentes e suas  <span  className="sub_Titulo_h2" style={{color: '#38b6ff'}} >respostas.</span> </h2>
         
             <Perguntas/>
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