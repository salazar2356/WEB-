import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SecondQ from './SecondForm';
import FirstQ from './FirstForm';
import ThirdQ from './ThridForm';
import FourthQ from './FourthForm';
import Home from './home';
import FifthQ from './FifthForm';
import SixthQ from './Sixth';
import SeventhQ from './SeventhForm';
import Resaults from './Resaults';

const AppRouter = () => {
  return ( 
  <Routes>

    <Route path='/'element={<Home/>}/>
    <Route path='/first'element={<FirstQ/>}/>
    <Route path='/second'element={<SecondQ/>}/>
    <Route path='/third'element={<ThirdQ/>}/>
    <Route path='/fourth'element={<FourthQ/>}/>
    <Route path='/fifth'element={<FifthQ/>}/>
    <Route path='/sixth'element={<SixthQ/>}/>
    <Route path='/seventh'element={<SeventhQ/>}/>
    <Route path='/resaults'element={<Resaults/>}/>

  </Routes>
  
  );
};

export default AppRouter;