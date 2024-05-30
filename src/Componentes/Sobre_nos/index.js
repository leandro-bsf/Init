
import React from "react"
import  './styles.css'
import Menu_Superior from "../Menu_superior/Menu_superior"
import '../Style_universal.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Orcamento_mapa from "../Orcamento_mapa";
import { GiStairsGoal } from "react-icons/gi";

export default function Sobre_nos(){
    return(
        <div className="Div_principal">
               < Menu_Superior />
        <div className="Div_sobre">
             

                <h2 className="Titulo">Sobre nós</h2>
                <h3>Somos uma empresa com foco em criação de sites</h3>
        </div>
        
             <div className="Div_cards">
              
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="Missão"  title="Missão" className="item" >  
                Criar soluções digitais excepcionais que impulsionam o sucesso dos nossos clientes, expandindo sua presença online, fortalecendo sua marca e alcançando novos mercados 
              </Tab>

                <Tab eventKey="Valores" title="Valores" className="item">
              
                  Cliente em primeiro lugar: Priorizamos a satisfação dos nossos clientes, construindo relacionamentos duradouros e de confiança, oferecendo um atendimento personalizado e ágil. Criatividade e Inovação: Buscamos constantemente novas ideias e soluções tecnológicas para superar as expectativas dos nossos clientes, mantendo-nos atualizados com as últimas tendências do mercado digital.
                  Qualidade e Excelência: Nos dedicamos a entregar projetos impecáveis, com alto nível de qualidade e dentro dos prazos acordados, garantindo a total satisfação dos nossos clientes.
                </Tab>

                 
                <Tab eventKey="Visão" title="Visão" className="item" > Ser a referência em desenvolvimento de sites e home pages, reconhecida pela excelência, inovação e impacto positivo nos negócios dos nossos clientes, tornando-se a escolha preferida de empresas que buscam crescimento e sucesso digital.</Tab>
    </Tabs>
             </div>
           
         <Orcamento_mapa/>

        </div>
     )
}