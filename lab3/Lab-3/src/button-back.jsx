import React from 'react';
import { useNavigate } from 'react-router-dom';


function ButtonB() {
           const boton = useNavigate () 
           return () => boton (-1)
}

export default ButtonB;