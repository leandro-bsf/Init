
import React from "react"
import  './estilo.css'
import logo from  '../Menu_superior/images/Logo Fundo Transparente - Escrita Branca.png'
import { FaPhoneAlt } from "react-icons/fa";
import { RiMapPinFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";
export default function Roda_pe(){
    return(
        <div className="roda_pe">

<div class="container">
        <div class="box"> 
        <img src={logo} className="logo" alt="logo"/></div>
        <div class="box">
        <h3>Sobre</h3>
                    <span>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia

                    </span>
                  
        </div>
        <div class="box"> 
            <h3>Menu</h3>
            <ul className="menu-list">
        <li className="menu-item">Serviços</li>
        <li className="menu-item">Sobre</li>
        <li className="menu-item">Portfólio</li>
        <li className="menu-item">Contato</li>
      </ul>
                
              
        </div>
        <div class="box">
             <ul>
                    <h3>Contato</h3>
                    <div className="Contato_item">
                  <span style={{  color:  '#38b6ff'}}> <RiMapPinFill />  Francisco Beltrão - PR  </span> <br/>
                   <span style={{color:  '#38b6ff'}}> <FaPhoneAlt /> +554699170-4814</span>
                    </div>
                    <h3>Redes Sociais</h3>
                    <div className="social-media-container">
                    
                    <div className="div-social">
                         <FaFacebook className="social-icon" />
                         <LuInstagram className="social-icon" />
                        <FaTiktok className="social-icon" />
                    </div>
                    </div>
                  
            </ul>
        </div>
    </div>
    
        </div>
    )
}