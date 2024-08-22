import React from 'react';
import ButtonB from './button-back';


const FirstQ = () => {
  const back = ButtonB()

  return (
    <div>
            <h1>1</h1>

      <h1>¿Cuál de las siguientes cualidades valoras más en un amigo?</h1>
      <select>
        <option>Lealtad</option>
        <option>Inteligencia</option>
        <option>Valentía</option>
        <option>Ambición</option>
      </select>
      <button className='volver'><a onClick={back}>Volver</a></button>
      <button className='enviar'><a href="/second">Enviar</a></button>


    </div>
  );
};

export default FirstQ;