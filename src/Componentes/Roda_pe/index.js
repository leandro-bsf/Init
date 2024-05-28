
import React from "react"
import  './estilo.css'
import logo from  './init..svg'
import { FaPhoneAlt } from "react-icons/fa";
import { RiMapPinFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function Roda_pe(){
    return(
   
<div class="container">
        <div class="box"> 
        <img src={logo} className="logo" alt="logo"/>
        </div>
        <div class="box">
        <h3>Sobre</h3>
                    <span>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia

                    </span>
                  
        </div>
        <div class="box"> 
            
            <ul className="menu-list"> 
            <h3>Menu</h3>
        <li><Link to="/Nossos_servico" className='style_link'> Serviços</Link></li>  
        <li><Link to="/Sobre_nos" className='style_link'> Sobre</Link> </li>
        <li><Link to="/Nossos_servico" className='style_link' >Portfólio</Link></li>
        <li> <Link to="/Contato" className='style_link'  > Contato</Link> </li>
      </ul>
                
    
        </div>
        <div class="box">
          
                    
                <div className="Contato_item">
                      <h3>Contato</h3>
                  <span style={{  color:  '#38b6ff'}}> <RiMapPinFill />  Francisco Beltrão - PR  </span> <br/>
                   <span style={{color:  '#38b6ff'}}> <FaPhoneAlt /> +554699170-4814</span>
                    </div>
                   
                    <div className="social-media-container">
                    <h3>Redes Sociais</h3>
                    <div className="div-social">
                         <FaFacebook className="social-icon"  />
                         <LuInstagram className="social-icon" />
                        <FaTiktok className="social-icon" />
                    </div>
                    </div>
                  
            
        </div>
    </div>
    
     
    )
}