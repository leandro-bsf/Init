import React, {useState, useRef} from 'react';
import { FiLogOut } from 'react-icons/fi';
import './styles.css';
import  logo from './images/Logo Fundo Transparente - Escrita Branca.png'
import { Link } from 'react-router-dom'; 
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
             
                <Link to="/Sobre_nos" > SERVIÇOS</Link>
              </li>
              <li>
              
                <Link to="/Sobre_nos" > SOBRE</Link>
              </li>
              <li>
                <Link to="/Sobre_nos" > GALERIA</Link>
              </li>
          
              <li>
              <Link to="/Sobre_nos" > Contato</Link>
              </li>
             
            </ul>
            
          </nav>

          </div>
        </div>

      </header>

      )
  }