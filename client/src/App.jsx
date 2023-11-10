import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portal from './components/Portal';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<></>}></Route>
        <Route path='/portal' element={<Portal></Portal>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
