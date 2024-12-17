import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Preview } from '../pages/Preview';
import { Home } from '../pages/Home';
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Preview />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export { App }
