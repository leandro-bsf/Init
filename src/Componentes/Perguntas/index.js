import Accordion from 'react-bootstrap/Accordion';
import './style.css';

function Perguntas() {
  const perguntas = [
    {
      id: 1,
      pergunta: 'Pergunta 1',
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
    } ,
    {
      id: 6,
      pergunta: 'Pergunta 5',
      resposta: 'Aqui já a resposta'
    }
    
  ];

  return (
    <Accordion defaultActiveKey="0" className="Div_card">
      {perguntas.map((pergunta) => (
        <Accordion.Item eventKey={pergunta.id} className="card_pergunta">
          <Accordion.Header>{pergunta.pergunta}</Accordion.Header>
          <Accordion.Body>{pergunta.resposta}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default Perguntas;