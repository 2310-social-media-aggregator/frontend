import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Home from '../Home/Home';
import Details from '../Details/Details';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import mockdata from '../../mock-data-dana';
import { Creator } from '../../types';
import mockUserData from '../../mock-data-user';
import { getUserInfo, getCreators, getCreatorInfo } from '../../apiCalls';

function App() {
  const [myCreators, setMyCreators] = useState<Creator[]>(mockdata.data);
  const [savedCreators, setSavedCreators] = useState<Creator[]>([]);
  const [allCreators, setAllCreators] = useState<Creator[]>(myCreators);
  const [activeTab, setActiveTab] = useState<'saved' | 'all' | 'home'>('home');

  useEffect(() => {
    getCreators()
      .then((data) => setAllCreators(data.attributes.creators))
      // .catch((error) => setError(error.message));
  }, []);

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
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Routes>
        <Route path='/' element={<Home setActiveTab={setActiveTab} onToggleAllCreators={handleToggleAllCreators} />}/>
        <Route path='/main' element={<Main myCreators={allCreators} />} />
        <Route path='/details/:id' element={<Details myCreators={allCreators} follows={follows} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
