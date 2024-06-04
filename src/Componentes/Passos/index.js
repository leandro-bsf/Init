import "./style.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import '../Style_universal.css'
export default function Passos() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="Processos">
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>

      < motion.h2 className="Titulo_h2"  initial={{opacity: 0 , x: -10}}
            whileInView={{opacity: 1 , x: 0}}
            exit={{opacity: 0}}
            transition={{duration:  1.7}} >Processo de criação <span className="Titulo_h2"   style={{color: '#38b6ff'}}  >Projetos</span> </ motion.h2>
            
    
      <span>Conheça um pouco do nosso processo de criação.</span>
      <ul ref={ref} className="Carrosel_Passos">
        <li>Contato</li>
        <li>Alinhamento Expectativas</li>
        <li>Requisitos</li>
        <li>Esboço Inicial</li>
        <li>Aprovação Design</li>
        <li>Desenvolvimento</li>
        <li>Avaliação Final</li>
      
      </ul>
    </div>
  );
}
