import React from "react"
import Menu_Superior from "../Menu_superior/Menu_superior"
import './styles.css';
import foto_banner  from  './imagens/image_banner.png'
import Button from 'react-bootstrap/Button';
import { motion } from "framer-motion"
import Servicos from "../servicos/servicos";
import Depoimentos from "../Depoimentos";
import Perguntas from "../Perguntas";
import foto from  './imagens/responsividade.gif'
import '../Style_universal.css'
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import Nosso_servico from  './imagens/Nossos_Projetos.gif'
import Orcamento_mapa from "../Orcamento_mapa";
export default function Home(){
   console.log('chegou na home')
    return(
       <div  className="app">
         <Menu_Superior/>
         <div className="Div_capa">
             
                  <div className="Div_capa_1">
                     
                    
                     <span className="Textos_secao">Transformamos suas ideias em realidades tangíveis com inovação, paixão e excelência. Nosso compromisso é construir um futuro brilhante ao seu lado, oferecendo soluções personalizadas que impulsionam o sucesso e superam expectativas.</span> 
                     <div className="div_buttons_web">
                     <Button variant="info" className="botao_padrao">Contato <TbArrowBigRightLinesFilled  className="seta" /> </Button>
                     <Button variant="info" className="botao_padrao">Serviços<TbArrowBigRightLinesFilled  className="seta"/> </Button>
                     </div>
                 
                  </div>
                  <div className="Div_capa_2">
                     <img src={foto_banner}></img>

                     <div className="div_buttons_mobile">
                     <Button variant="info" className="botao_padrao">Contato<TbArrowBigRightLinesFilled  className="seta" /> </Button>
                     <Button variant="info" className="botao_padrao">Serviços <TbArrowBigRightLinesFilled   className="seta"/> </Button>
                     </div>
                  </div>
             
         </div>
         < motion.div className="Servicos" initial={{opacity: 0 , x: -10}}
            whileInView={{opacity: 1 , x: 0}}
             exit={{opacity: 0}}
               transition={{duration:  1.7}} >               
               < Servicos />
            <Button variant="info" className="botao_padrao">Veja mais <TbArrowBigRightLinesFilled  className="seta"/> </Button>
          </motion.div> 

        
            
           
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
                   <img src={foto} className="Img_respo"></img> 
                  </div>
            
          
            </div> 
       
            
           
  
            <div className="Projetos">      

             < motion.h2 className="Titulo_h2"  initial={{opacity: 0 , x: -10}}
            whileInView={{opacity: 1 , x: 0}}
            exit={{opacity: 0}}
            transition={{duration:  1.7}} >Nossos <span className="Titulo_h2"   style={{color: '#38b6ff'}}  >Projetos</span> </ motion.h2>
            
               <img src={Nosso_servico} className="img_projeto"/>

            <Button variant="info"  className="botao_padrao">Portfólio   <TbArrowBigRightLinesFilled  className="seta" />
             </Button>   

      
            </ div>
          
         
          <div className="depoimentos">

            
          <motion.h2 className="Titulo_h2" initial={{opacity: 0 , x: -10}}
            whileInView={{opacity: 1 , x: 0}}
            exit={{opacity: 0}}
            transition={{duration:  1.7}}>Depoimentos </motion.h2>
         
          <h2 className="sub_Titulo_h2" > O que nossos <span  className="sub_Titulo_h2" style={{color: '#38b6ff'}}  >clientes</span>    dizem sobre nós</h2>

          <Depoimentos/>

          </div>

          <div className="Sobre_nos">
            <motion.h2 className="Titulo_h2" animate={{ x:-15 }}
            transition={{ type: "spring", duration: 1.8 }} >O que é  a init<span   className="Titulo_h2_azul" >.</span></motion.h2>   
            <h2 className="sub_Titulo_h2"> Descubra um pouco mais sobre <span className="sub_Titulo_h2"  style={{color: '#38b6ff'}} >nós.</span> </h2>
          
          <div className="sUb_div_sobre">

            <div className="div_sobre">
               <span  className="Textos_secao_2">
               Desde o início da graduação, identificamos uma necessidade significativa no mercado. Motivados pela disposição e pelo desejo constante de aprender e evoluir, unimos nossas forças. 
                </span>
                <h3 className="text_founder">Founder Init. Solutions</h3>
                <span  className="Textos_secao_2">
                Desde o início da graduação, identificamos uma necessidade significativa no mercado. Motivados pela disposição e pelo desejo constante de aprender e evoluir, unimos nossas forças. Com coragem e iniciativa, transformamos essa ideia em uma realidade concreta.
                </span>
                <h3 className="text_founder">Co-Founder Init. Solutions</h3>
          </div>
               <motion.div className="div_sobre_init"  whileDrag={{ scale: 1.2 }} >
          
                  <p className="Textos_secao_2">
                  A Init Solutions nasceu da idealização de dois jovens graduandos em Engenharia de Software, determinados a revolucionar o desenvolvimento web. 
                  </p>
                  <br/>
                  <p  className="Textos_secao_2" >
                  Com uma visão clara e ambiciosa, eles se especializaram na criação de sites responsivos e designs inovadores. 
                  </p>
                  <br/>
                 <p  className="Textos_secao_2" >
                 A Init. Solutions se compromete a oferecer soluções de alta qualidade, garantindo que cada projeto seja visualmente atraente, funcional em qualquer dispositivo e alinhado com as necessidades específicas de cada cliente. 
                 </p>

               
               </motion.div>

          </div>
         
          </div>

          <div className="Perguntas">
             <Perguntas/>
          </div>

          <Orcamento_mapa/>
       </div>
   
    )
}