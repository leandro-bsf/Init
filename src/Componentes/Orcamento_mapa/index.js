import { IoIosArrowForward } from "react-icons/io";
import React from "react"
import Button from 'react-bootstrap/Button';
import './style.css'
import Roda_pe from "../Roda_pe";
import  '../Style_universal.css'
import { motion } from "framer-motion"
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
export default function Orcamento_mapa(){
    return(
        <div>
        <div className="Solici_orcamento"  >
        <motion.h1   whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.8 }}
  style={{ x: 40 }}>Solicite já seu orçamento!</motion.h1>
        <h3>Solicite seu orçamento agora mesmo que nossos consultores entrarão em contato.</h3>
        <Button variant="info"  className="botao_padrao">Orçamento <TbArrowBigRightLinesFilled  className="seta"  /> </Button>  
     </div>
     
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7188.497017442679!2d-53.077024210012475!3d-25.729294244325963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f047d8e26e7057%3A0x8a642cc2991886d9!2sJardim%20da%20Colina%2C%20Dois%20Vizinhos%20-%20PR%2C%2085660-000!5e0!3m2!1spt-BR!2sbr!4v1715826299626!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="mapa"></iframe>
     < Roda_pe/>
   
      </div>
    )
}