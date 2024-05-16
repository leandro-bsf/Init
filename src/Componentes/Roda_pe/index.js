
import React from "react"
import  './estilo.css'
import logo from  '../Menu_superior/images/Logo Fundo Transparente - Escrita Branca.png'
export default function Roda_pe(){
    return(
        <div className="roda_pe">

<div class="container">
        <div class="box"> <img src={logo} className="logo" alt="logo"/></div>
        <div class="box">
            <img src={logo}></img>
        </div>
        <div class="box"> 
            
                    <h3>Sobre</h3>
                    <span>
                    Ceconi Serviços Elétricos e Serviços de Munck. <br/>
                    CNPJ: 38.162.664/0001-20

                    </span>
                  
              
        </div>
        <div class="box">
             <ul>
                    <h3>Contato</h3>
                    <div className="Contato_item">
                  <span style={{ color: 'rgb(209, 140, 12)'}}>Dois Vizinhos  </span> <br/>
                   <span style={{ color: 'rgb(209, 140, 12)'}}>+554699170-4814</span>
                    </div>
                  
            </ul>
        </div>
    </div>
    
        </div>
    )
}