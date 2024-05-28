import React, { useState } from 'react';
import './style.css';
import { IoIosArrowForward } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import perfil from './imagen/foto_perfil.png'
import perfi2 from './imagen/perfil2.jpg'
import { GrFormPrevious } from "react-icons/gr";
const dadosCards = [
  {
    id: 1,
    imagem:perfil,
    titulo: 'Título do Card 1',
    avaliacao: '⭐⭐⭐⭐⭐', 
    descricao: 'Com o design pronto, nosso time de programadores irá dar vida ao projeto. Usando tecnologias de ponta, sua ideia vira realidade.',
  },
  {
    id: 2,
    imagem: perfi2,
    titulo: 'Nome do João',
    avaliacao: '⭐⭐⭐⭐⭐', 
    descricao: 'Com o design pronto, nosso time de programadores irá dar vida ao projeto. Usando tecnologias de ponta, sua ideia vira realidade.',
  },
  {
    id: 3,
    imagem: perfi2,
    titulo: 'Nome do João',
    avaliacao: '⭐⭐⭐⭐⭐', 
    descricao: 'Com o design pronto, nosso time de programadores irá dar vida ao projeto. Usando tecnologias de ponta, sua ideia vira realidade.',
  }
];

const NUMERO_CARDS_POR_PAGINA = 3;

function Depoimentos() {
  const [paginaAtual, setPaginaAtual] = useState(0);

  const handleProximo = () => {
    const novaPagina = paginaAtual + 1;
    if (novaPagina >= dadosCards.length / NUMERO_CARDS_POR_PAGINA) {
      setPaginaAtual(0);
    } else {
      setPaginaAtual(novaPagina);
    }
  };

  const handleAnterior = () => {
    const novaPagina = paginaAtual - 1;
    if (novaPagina < 0) {
      setPaginaAtual(Math.floor(dadosCards.length / NUMERO_CARDS_POR_PAGINA));
    } else {
      setPaginaAtual(novaPagina);
    }
  };

  const cardsNaPagina = dadosCards.slice(
    paginaAtual * NUMERO_CARDS_POR_PAGINA,
    (paginaAtual + 1) * NUMERO_CARDS_POR_PAGINA
  );

  return (
    <div className="carousel">

        
    <Button   className='botao_p' variant="link" onClick={handleAnterior} ><GrFormPrevious  size={35}/></Button>
      <div className="carousel-inner">
        
        {cardsNaPagina.map((card) => (
          <div className="card" key={card.id}>
           
             <img src={card.imagem}  className='image_card' alt={card.titulo} /> 
            <h1>{card.titulo}</h1>
            <span>Cliente</span>
             <span>{card.avaliacao}</span>

            <span>{card.descricao}</span>
          </div>
        ))}
      </div>

     

      <Button  className='botao_p' variant="link" onClick={handleProximo}>
      <IoIosArrowForward  size={30}/>
        </Button>
    </div>
  );
}

export default Depoimentos;