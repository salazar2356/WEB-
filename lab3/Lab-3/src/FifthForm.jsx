import React from 'react';
import ButtonB from './button-back';

const FifthQ = () => {
  const back = ButtonB()

  return (
    <div>
      <h1>5</h1>
      <h1>¿Cuál es tu actividad favorita en tu tiempo libre?</h1>

 
      <label>
        <input type="checkbox" id="cbox1" value="first_checkbox" /> Leer y aprender cosas nuevas. </label>
        <br/>

      <input type="checkbox"  />
      <label for="cbox2">Participar en deportes o actividades físicas.</label>
      <br/>


      <input type="checkbox"  />
      <label for="cbox2">Trabajar en proyectos ambiciosos o liderar grupos.</label>
      <br/>


      <input type="checkbox"  />
      <label for="cbox2">Ayudar a otros y participar en actividades comunitarias.</label>

      <button className='volver'><a onClick={back}>Volver</a></button>
      <button className='enviar'><a href="/sixth">Enviar</a></button>
      


      </div>
  );
};

export default FifthQ;