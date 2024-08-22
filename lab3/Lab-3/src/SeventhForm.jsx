import React from 'react';
import ButtonB from './button-back';

const SeventhQ = () => {
  const back = ButtonB()

  return (
    <div>

      <h1>¿Qué tipo de personajes o héroes te inspiran más?</h1>

      <select>
        <option>Héroes valientes y decididos que enfrentan grandes desafíos</option>
        <option>Innovadores y genios que cambian el mundo con sus ideas</option>
        <option>Líderes sabios y compasivos que ayudan a otros</option>
        <option>Estrategas y organizadores que logran éxito a través de la planificación </option>

      </select> 
      <button className='volver'><a onClick={back}>Volver</a></button>
      <button className='enviar'><a href="/resaults">Enviar</a></button>
    </div>
  );
};

export default SeventhQ;