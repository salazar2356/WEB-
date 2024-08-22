import React from 'react';
import ButtonB from './button-back';

const SixthQ = () => {
  const back = ButtonB()

  return (
    <div>
      <h1>6</h1>

      <h1>¿Qué tipo de literatura o medios prefieres?</h1>

 
<label>
  <input type="radio" id="radius" value="first_radio" /> Novelas de aventuras y acción </label>
  <br/>

<input type="radio" id="radius" value="second_radio" />
<label for="radius">Ciencia ficción o fantasía</label>
<br/>


<input type="radio" id="radius" value="second_radio" />
<label for="radius">Libros sobre desarrollo personal y autoayuda</label>
<br/>


<input type="radio" id="radius" value="second_radio" />
<label for="radius">nsayos históricos o académicos</label>

      <button className='volver'><a onClick={back}>Volver</a></button>
      <button className='enviar'><a href="/seventh">Enviar</a></button>
    </div>
  );
};

export default SixthQ;