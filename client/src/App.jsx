import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portal from './components/Portal';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import InsertProposal from './components/InsertProposal';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<></>}></Route>
        <Route path='/portal' element={<Portal></Portal>}></Route>
        <Route path='/insertproposal' element={<InsertProposal></InsertProposal>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
