
import React from "react"
import  './styles.css'
import Menu_Superior from "../Menu_superior/Menu_superior"
import { IoIosArrowForward } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Protopipacao from './imagem/prototipacao.svg'
import Orcamento_mapa from "../Orcamento_mapa";
import Roda_pe from "../Roda_pe";
import '../Style_universal.css'
import processo from './imagem/Processo de criação 2.svg'
import Desenvolvimento from  './imagem/desenvolvimento.gif'
import prototipacao from  './imagem/prototipacao.gif'
import Container from 'react-bootstrap/Container';
export default function Nossos_servico (){
    return(
            <div className="Div_nossos_servico">
                    <Menu_Superior />
                    <div className="titulo_servico">
                    <h1>Nossos Serviços</h1>
                     <h2 className="sub_Titulo_h2">Entenda mais sobre nossos serviços <h2 className="Titulo_h2_azul">ofertados.</h2></h2>
                    </div>
                
          <Container className="Container_servicos">
                <Container className="servico_item">
                   <h1>Prototipação</h1> 
                   <lord-icon
                  src="https://cdn.lordicon.com/vvqcrgre.json"
                  trigger="hover"
                  style={{width: '150px' , height: '150px'}}>
                  </lord-icon> <br/>
                   <span>
                   A prototipagem é uma etapa crucial no nosso processo de criação,
                   permitindo testar e refinar conceitos antes da produção final.
                    Utilizamos ferramentas avançadas e técnicas modernas para criar
                   protótipos precisos e funcionais. 
                  Envolvemos os clientes no processo para garantir que suas visões e 
                  requisitos sejam plenamente incorporados.
                   </span>
                </Container>

                <Container  className="servico_item">
                  
                   <h1>Desenvolvimento</h1>
                   <lord-icon
                  src="https://cdn.lordicon.com/pqrtuvvq.json"
                     trigger="hover"
                   style={{width: '150px' , height: '150px'}}>
                  </lord-icon> <br/>
                   <span>
                   No nosso processo de desenvolvimento, combinamos criatividade e
                    tecnologia para transformar ideias em produtos viáveis.
                     Desde a concepção inicial até a fase de implementação, 
                     nossa equipe trabalha de forma colaborativa para garantir
                      que cada projeto atenda aos mais altos padrões de qualidade.
                      Com um foco contínuo na inovação, 
                      buscamos soluções eficientes e sustentáveis.
                   </span>
                </Container>
                 
          </Container>
          <Container>
                    <img  src={processo} className="processos"></img>
          </Container>
      <Orcamento_mapa />
      
            </div>
    )
}