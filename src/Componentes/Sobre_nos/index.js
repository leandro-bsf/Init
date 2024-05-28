
import React from "react"
import  './styles.css'
import Menu_Superior from "../Menu_superior/Menu_superior"
import '../Style_universal.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
                <Tab eventKey="Missão" title="Missão"> Criação de sites mobiles e responsivos. Sites que se adaptam a qualquer resolução de tela, sem criar barra de rolagem. Em 2016, o acesso à internet via dispositivos móvel (ou mobile) ultrapassou os acessos via desktop. </Tab>
                <Tab eventKey="Valores" title="Valores">Criação de sites mobiles e responsivos. Sites que se adaptam a qualquer resolução de tela, sem criar barra de rolagem.Em 2016, o acesso à internet via dispositivos móvel (ou mobile) ultrapassou os acessos via desktop.</Tab>
                <Tab eventKey="Visão" title="Visão" > TCriação de sites mobiles e responsivos. Sites que se adaptam a qualquer resolução de tela, sem criar barra de rolagem. Em 2016, o acesso à internet via dispositivos móvel (ou mobile) ultrapassou os acessos via desktop.</Tab>
    </Tabs>
             </div>
             <div className="sub_text" >
             <span>
             nenhum problema pode ser resolvido pelo mesmo estado de consciência que o criou.
                nenhum problema pode ser resolvido pelo mesmo estado de consciência que o criou.
             </span>
             <h2 className="init">init. solutions</h2>
             </div>
       

        </div>
     )
}