import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Voted from '../src/components/Voted';
import ContenderForm from '../src/components/ContenderForm';
import Register from '../src/components/Register';
import ContenderList from './components/ContenderList';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Register/>} path="/api/register" default/>
          <Route element={<ContenderForm/>} path="/api/contender" />
          <Route element={<ContenderList/>} path="/api/contender" />
          <Route element={<Voted/>} path="/api/selected/contender/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
