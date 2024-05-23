import React, { useState } from 'react';
import './style.css';
import { IoIosArrowDown } from "react-icons/io";
const perguntas = [
  {
    id: 1,
    pergunta: 'Por que minha empresa preisa',
    resposta: 'Aqui já a resposta'
  },
  {
    id: 2,
    pergunta: 'Pergunta 2',
    resposta: 'Aqui já a resposta'
  },
  {
    id: 3,
    pergunta: 'Pergunta 3',
    resposta: 'Aqui já a resposta'
  },
  {
    id: 4,
    pergunta: 'Pergunta 4',
    resposta: 'Aqui já a resposta'
  },
  {
    id: 5,
    pergunta: 'Pergunta 5',
    resposta: 'Aqui já a resposta'
  },
  {
    id: 6,
    pergunta: 'Pergunta 6',
    resposta: 'Aqui já a resposta'
  }
];

const Perguntas = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="div_card_perguntas">
      {perguntas.map((pergunta, index) => (
        <div className="card_pergunta" key={pergunta.id}>
          <div className="accordion_header" onClick={() => toggleAccordion(index)}>
            {pergunta.pergunta}
            <IoIosArrowDown  className='icone'/>
          </div>
          {activeIndex === index && <div className="accordion_body">{pergunta.resposta}</div>}
        </div>
      ))}
    </div>
  );
};

export default Perguntas;