import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';

export default () => {
    return (
        <Routes>
          <Route>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='*' element={<NotFound />} />
          <Route path='/signin' element={<SignIn/>} />
          </Route>
        </Routes>
      );  
}