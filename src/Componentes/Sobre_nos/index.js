
import React from "react"
import  './styles.css'
import Menu_Superior from "../Menu_superior/Menu_superior"
import '../Style_universal.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Orcamento_mapa from "../Orcamento_mapa";
import  foto from './imagens/5278.jpg'

export default function Sobre_nos(){
    return(
        <div className="Div_principal">
               < Menu_Superior />
        <div className="Div_sobre">
             

                <h2 className="Titulo">Sobre nós</h2>
                <h3>Somos uma empresa com foco em criação 
                  de sites</h3>
                  <img src={foto} className="foto_sobre"></img>
      
        </div>
         
             <div className="Div_cards">
            
             <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Missão</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Valores</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tri">Visão</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">    Criar soluções digitais excepcionais que impulsionam o sucesso dos nossos clientes, expandindo sua presença online, fortalecendo sua marca e alcançando novos mercados .</Tab.Pane>
            <Tab.Pane eventKey="second">   Cliente em primeiro lugar: Priorizamos a satisfação dos nossos clientes, construindo relacionamentos duradouros e de confiança, oferecendo um atendimento personalizado e ágil. Criatividade e Inovação: Buscamos constantemente novas ideias e soluções tecnológicas para superar as expectativas dos nossos clientes, mantendo-nos atualizados com as últimas tendências do mercado digital.
                  Qualidade e Excelência: Nos dedicamos a entregar projetos impecáveis, com alto nível de qualidade e dentro dos prazos acordados, garantindo a total satisfação dos nossos clientes.
               </Tab.Pane>
            <Tab.Pane eventKey="tri"> Ser a referência em desenvolvimento de sites e home pages, reconhecida pela excelência, inovação e impacto positivo nos negócios dos nossos clientes, tornando-se a escolha preferida de empresas que buscam crescimento e sucesso digital.</Tab.Pane>
          </Tab.Content>
        </Col>
        
      </Row>
    </Tab.Container>
             </div>
           
         <Orcamento_mapa/>

        </div>
     )
}