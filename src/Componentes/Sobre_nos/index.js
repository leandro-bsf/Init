
import React from "react"
import  './styles.css'
import Menu_Superior from "../Menu_superior/Menu_superior"

export default function Sobre_nos(){
    return(
        <div className="Div_principal">
               < Menu_Superior />
        <div className="Div_sobre">
             

                <h1>Sobre nós</h1>
                <h4>Somos uma empresa com foco em criação de sites</h4>
        </div>
         <div className="div_text">
            <div className="sub_text" >
             <span>
             nenhum problema pode ser resolvido pelo mesmo estado de consciência que o criou.
                nenhum problema pode ser resolvido pelo mesmo estado de consciência que o criou.
             </span>
             <h1>init. solutions</h1>
             </div>
             <div className="Div_cards">
              
                  <div className="Div_1"> 
                  <span>valores</span> <br/>
                  <span>nenhum problema pode ser resolvido pelo mesmo estado de consciência que. </span>
                  </div>

                  <div className="Div_2"> 
                  <span>valores</span> <br></br>
                  <span>nenhum problema pode ser resolvido pelo mesmo estado de consciência que. </span>
                  </div>

                  <div className="Div_1"> 
                
                   <span>valores</span>  <br/>
                   <span>nenhum problema pode ser resolvido pelo mesmo estado de consciência que. </span>

                  </div>
             </div>

         </div>

        </div>
     )
}