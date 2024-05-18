import React, {useState, useRef} from 'react';
import { FiLogOut } from 'react-icons/fi';
import './styles.css';
import  logo from './images/init..svg'
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
             
             <Link to="/Home" > Home</Link>
             </li>
         
              <li>
             
                <Link to="/Sobre_nos" >Sobre </Link>
              </li>
              <li>
              
                <Link to="/Nossos_servico" > Serviços</Link>
              </li>
              <li>
                <Link to="/Sobre_nos" > Portfólio</Link>
              </li>
          
              <li>
              <Link to="/Contato" > Contato</Link>
              </li>
             
            </ul>
            
          </nav>

          </div>
        </div>

      </header>

      )
  }