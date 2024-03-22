import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Details from '../Details/Details';
import NotFound from '../NotFound/NotFound';

function App() {
  
  
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
