import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Details from '../Details/Details';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import mockdata from '../../mock-data-dana';
import { Creator } from '../../types';
import mockUserData from '../../mock-data-user'; 

function App() {
  const [myCreators, setMyCreators] = useState<Creator[]>(mockdata.data);
  const [savedCreators, setSavedCreators] = useState<Creator[]>([]);
  const [allCreators, setAllCreators] = useState<Creator[]>(myCreators);

  const handleToggleSavedCreators = () => {
    
    const saved = myCreators.filter(creator => {
     
      return follows.includes(creator.id);
    });
    setSavedCreators(saved);
    setAllCreators(saved); 
  };

  const handleToggleAllCreators = () => {
    setAllCreators(myCreators);
  };

  const userName = mockUserData.data.user.name;
  const follows = mockUserData.data.user.follows.map(follow => follow.creator_id); 

  return (
    <div className="App">
      <Header 
        onToggleSavedCreators={handleToggleSavedCreators} 
        onToggleAllCreators={handleToggleAllCreators} 
        name={userName} 
        follows={follows}
      />
      <Routes>
        <Route path="/" element={<Home myCreators={allCreators} />} />
        <Route path='/details/:id' element={<Details myCreators={allCreators} follows={follows} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
