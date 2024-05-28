
import React from "react"
import  './styles.css'
import Menu_Superior from "../Menu_superior/Menu_superior"
import { IoIosArrowForward } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Protopipacao from './imagem/prototipacao.svg'
import Orcamento_mapa from "../Orcamento_mapa";
import Roda_pe from "../Roda_pe";
export default function Nossos_servico (){
    return(
            <div className="Div_nossos_servico">
                    <Menu_Superior />
                    <h1>Nossos Serviços</h1>
                     <h3>Entenda mais sobre nossos serviços ofertados.</h3>

                <div className="div_secundaria">
                    <div className="Img_Prototipagem">
                       <img src={Protopipacao} className="imagem_servico"/>

                    </div>
                   
                   <div className="Text_Prototipagem">
                   <h2>Prototipação</h2>
                     <span>
                     Arquitetamos seu produto e desenvolvemos o conceito e comunicação visual. Por fim, é feito o design de todas as telas!
                     </span> <br/>

                     <Button variant="info"  className="button_servicos">Portfólio <IoIosArrowForward /> </Button>   


                   </div>

                 
                </div>
              

 

                
           <div className="div_secundaria">
              <div className="Text_Prototipagem">
                <h2>Desenvolvimento</h2>
                <span>
                Arquitetamos seu produto e desenvolvemos o conceito e comunicação visual. Por fim, é feito o design de todas as telas!
                </span> <br/>
                <Button variant="info"  className="button_servicos">Portfólio <IoIosArrowForward /> </Button>   
              </div>
               <div className="Img_Prototipagem">
                 <img src={Protopipacao}  className="imagem_servico" />
               
               </div>
   

            </div>

    <div className="div_secundaria">
    <div className="Text_Prototipagem">
          <h2>Processo de criação</h2>
        <span>
          Conheça um pouco do nosso processo de criação.
        </span> <br/>
        
      
       </div>
    <div className="Img_Prototipagem">
       <img src={Protopipacao}  className="imagem_servico" />
            <Button variant="info"  className="button_servicos">Portfólio <IoIosArrowForward /> </Button>   
     </div> 
   
    
      </div>
      <Orcamento_mapa />
      
            </div>
    )
}