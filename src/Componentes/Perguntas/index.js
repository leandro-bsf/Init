import React, { useState } from 'react';
import './style.css';
import { motion } from "framer-motion"
import { IoIosArrowForward } from "react-icons/io";
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const perguntas = [
    {
      id: 1,
      pergunta: 'Quais são os passos para iniciar a criação do meu site?',
      resposta: 'O primeiro passo envolve uma conversa inicial entre nós, que pode ocorrer pelo WhatsApp ou, se preferir, em uma reunião online. Durante essa conversa, vou entender melhor o seu negócio e identificar como posso ajudar  Em seguida, você preencherá um briefing com todas as informações necessárias para que possamos desenvolver nossas soluções. O terceiro passo é a implementação das soluções propostas e o acompanhamento contínuo da sua jornada.'
    },
    {
      id: 2,
      pergunta: 'Quanto tempo leva para fazer um aplicativo ou site?',
      resposta: 'Essa é uma pergunta cuja resposta é "depende". Alguns projetos podem durar semanas, enquanto outros podem se estender por meses. O tempo necessário varia conforme diversos fatores, como as funcionalidades exigidas, a disponibilidade do cliente, o tamanho da equipe, entre outros aspectos.'
    },
    {
      id: 3,
      pergunta: 'Qual é o prazo de entrega?',
      resposta: 'O prazo de entrega varia de acordo com a complexidade e a dimensão do projeto, além da cooperação do cliente. No entanto, em geral, após recebermos todo o material necessário para a construção da solução, realizamos a entrega em até 7 dias úteis e iniciamos o acompanhamento.'
    },
    {
      id: 4,
      pergunta: 'Você oferece manutenção de sites após a criação?',
      resposta: 'Sim, oferecemos esse serviço. Todos os nossos planos incluem acompanhamento mensal do seu site. Se você precisar de qualquer alteração, contará com nosso total suporte.'
    },
    {
      id: 5,
      pergunta: 'Quais gastos extras que vou ter com o site?',
      resposta: 'Você terá gastos com a aquisição do site, que inclui a taxa de hospedagem, além da compra do domínio.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
       
           
             <motion.div className="titulo"  animate={{ x:-15 }}
  transition={{ type: "spring", duration: 1.8 }}>
             <IoIosArrowForward   size={22}  className='seta_fixa'/>
             <h2> Perguntas Frequentes</h2>
           
              <span> Veja as dúvidas frequentes e suas<span style={{color:'#38b6ff'}}> respostas.</span> </span>
             </motion.div>
      {perguntas.map((item, index) => (
        <div key={item.id} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            {item.pergunta}
           
            <IoIosArrowForward     className={`arrow ${activeIndex === index ? 'open' : ''}`}/>
          </div>
          {activeIndex === index && (
            <div className="accordion-body">
              {item.resposta}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
