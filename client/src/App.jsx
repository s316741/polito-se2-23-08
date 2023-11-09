import { useState } from 'react';
import './App.css';
import Student from './components/Student';
import Professor from './components/Professor';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<></>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
