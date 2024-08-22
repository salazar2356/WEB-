import React from 'react';
import ButtonB from './button-back';

const SecondQ = () => {
  const back = ButtonB()

  return (
    
    <div>
      
      <h1>2</h1>

      <h1>¿Qué tipo de desafíos te atraen más?</h1>
      <select>
        <option>Resolver problemas complejos y académicos.</option>
        <option>Superar obstáculos físicos y demostrar valentía.</option>
        <option>Trabajar en proyectos que me permitan avanzar en mi carrera.</option>
        <option>Ayudar a los demás y defender lo correcto.</option>
      </select>      
      <button className='volver'><a onClick={back}>Volver</a></button>
        <button className='enviar'><a href="/third">Enviar</a></button>



    </div>
  );
};

export default SecondQ;