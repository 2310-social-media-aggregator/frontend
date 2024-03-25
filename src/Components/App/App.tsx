import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Details from '../Details/Details';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import mockdata from '../../mock-data-dana';
import { Creator } from '../../types';

function App() {
  const [myCreators, setMyCreators] = useState<Creator[]>(mockdata.data);
  const [creator, setCreator] = useState<Creator | null>(null);

  const handleToggleSavedCreators = () => {
    console.log("Toggle saved creators");
  };

  const handleToggleAllCreators = () => {
    console.log("Toggle all creators");
  };

  // will eventually create a useEffect call here in order to setMyCreators() to the API call data
  
  return (
    <div className="App">
      <Header 
        onToggleSavedCreators={handleToggleSavedCreators} 
        onToggleAllCreators={handleToggleAllCreators} 
      />
      <Routes>
        <Route path="/" element={<Home myCreators={myCreators} />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

