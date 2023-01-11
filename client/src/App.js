import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Voted from '../src/components/Voted';
import ContenderForm from './components/CandidateForm';
import Register from '../src/components/Register';
import ContenderList from './components/CandidateList';
import Login from '../src/components/Login';
import Navbar from '../src/components/Navbar';
import jsonServerProvider from 'ra-data-json-server';
import {
  Admin,
  Resource,
} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
src/App.js
import Admin from '../src/components/Admin';
import authProvider from './authProvider';
import AdminLogin from './AdminLogin';
import AdminLogout from './AdminLogout';




function App() {
  const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Admin
    dataProvider={dataProvider}
    authProvider={authProvider} adminLogin={AdminLogin} AdminLogout = {AdminLogout}>
    {permissions => (
        <>
            {/* Restrict access to the edit view to admin only */}
            <Resource
                name="candidates"
                delete={permissions === 'admin' ? Admin : null}
            />
        </>
    )}
</Admin>

        <Routes>
          <Route element={<Register/>} path="/api/register" default/>
          <Route element={<Login/>} path="/api/login"/>
          <Route element={<ContenderForm/>} path="/api/candidate" />
          <Route element={<ContenderList/>} path="/api/candidates" />
          <Route element={<Voted/>} path="/api/candidate/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
