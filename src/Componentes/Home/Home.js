import React from "react"
import Menu_Superior from "../Menu_superior/Menu_superior"
import './styles.css';
import foto_banner  from  './image_banner.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { TiEdit } from "react-icons/ti";
import { FaCode } from "react-icons/fa6";
import { motion } from "framer-motion"
import { IoIosArrowForward } from "react-icons/io";
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
           <  div className="Servicos"
            >

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
                  <Card.Text className="Texto_car">
                  Arquitetamos seu produto e desenvolvemos o conceito e comunicação visual. Por fim, é feito o design de todas as telas!
                </Card.Text>
             </Card.Body>
          </Card>

          <Card  className="item_card">
            <FaCode  className="icone_servicos" />
                <Card.Body>
                   <Card.Title className="titulo_servicos"  >Desenvolvimento</Card.Title>
                  <Card.Text  className="Texto_car">
                  Com o design pronto, nosso time de programadores irá dar vida ao projeto. Usando tecnologias de ponta, sua ideia vira realidade.
                </Card.Text>
             </Card.Body>
          </Card>

        
           </motion.div >
          
           <Button variant="info" className="button_servicos">Vamos Conversar <IoIosArrowForward /> </Button>
          </div> 
       </div>
   
    )
}