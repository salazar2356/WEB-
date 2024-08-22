import React from 'react';
import ButtonB from './button-back';

const ThirdQ = () => {
  const back = ButtonB()

  return (
    
    <div>
      <h1>3</h1>
      <h1>Busco una solución que beneficie a todas las partes involucradas.</h1>
      <select>
        <option>Enfrento el problema directamente y no tengo miedo de tomar riesgos.</option>
        <option>Planeo cuidadosamente mi estrategia y actúo con determinación.</option>
        <option>Considero el impacto de mis acciones en mi futuro y en mi posición.</option>
      </select> 

      <button className='volver'><a onClick={back}>Volver</a></button>
      <button className='enviar'><a href="/fourth">Enviar</a></button>



    </div>
  );
};

export default ThirdQ;