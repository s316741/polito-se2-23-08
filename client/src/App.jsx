import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<></>}></Route>
        <Route path={'/portal'}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
