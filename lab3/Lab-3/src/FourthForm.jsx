import React from 'react';
import ButtonB from './button-back';

const FourthQ = () => {
  const back = ButtonB()

  return (
    <div>
      <h1>4</h1>

      <h1>¿Cuál es tu mayor motivación en la vida?</h1>
      <select>
        <option>Conocimiento y sabiduría.</option>
        <option>Superar desafíos y demostrar coraje.</option>
        <option>Hacer el bien y ayudar a los demás.</option>
        <option>Alcanzar el éxito y ser reconocido por mis logros.</option>

      </select> 

      <button className='volver'><a onClick={back}>Volver</a></button>
      <button className='enviar'><a href="/fifth">Enviar</a></button>



    </div>
  );
};

export default FourthQ;