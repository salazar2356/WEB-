import React from 'react';
import ButtonB from './button-back';


function Home() {
  const back = ButtonB()
  return (
    <>

      <div>
        <h1 className='f-title'>¿A qué casa de hogwarts pertenezco?</h1>
        <h4 className='f-text'>
        Contesta las preguntas y descubre a qué casa perteneces 
        </h4>

        <div className='email'>
          <input type='email' className='input' placeholder='Tu correo electrónico' />
          <button className='enviar'><a href="/first">Enviar</a></button>
        </div>
        
      </div>
    </>
  );
}

export default Home;