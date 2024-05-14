import React, {useState, useRef} from 'react';
import { FiLogOut } from 'react-icons/fi';
import './styles.css';
import  logo from './images/Logo Fundo Transparente - Escrita Branca.png'

export  default function Menu_Superior ({ scrollToServicos, scrollToContato, scrollToSobreNos, scrollToGaleria }){ 



const [classOn, setClassOn] = useState(false);
    
  return (
    <header>
    <div className="container">
      <img src={logo} className='logo'></img>

      <div className = { classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
           <div className="menu-toggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
           </div>

           <nav>
            <ul>
              <li>
                <a href="/" onClick={scrollToServicos} >SERVIÇOS</a>
              </li>
              <li>
                <a href="/" onClick={scrollToSobreNos}  >SOBRE</a>
              </li>
              <li>
                <a href="/"onClick={scrollToGaleria} >GALERIA</a>
              </li>
          
              <li>
                <a href="/"onClick={scrollToContato} >CONTATO</a>  
              </li>
             
            </ul>
            
          </nav>

          </div>
        </div>

      </header>

      )
  }