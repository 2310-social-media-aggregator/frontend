import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Home from '../Home/Home';
import Details from '../Details/Details';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import { Creator, User } from '../../types';
import { getUserInfo, getCreators } from '../../apiCalls';

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [savedCreators, setSavedCreators] = useState<[] >([]);
  const [allCreators, setAllCreators] = useState<Creator[] | null>(null);
  const [displayedCreators, setDisplayedCreators] = useState<Creator[] | null>(null);
  const [activeTab, setActiveTab] = useState<'saved' | 'all' | 'home'>('home');

  useEffect(() => {
    getCreators()
      .then(data => setAllCreators(data.data.attributes.creators))
    getUserInfo()
      .then(data => {
        setUser(data.data.attributes)
        setSavedCreators(data.data.attributes.follows)
      })
  }, []);

  const handlePageSwitch = (tab: string) => {
    if (tab === 'all') {
      setDisplayedCreators(allCreators)
    }
    if (tab === 'saved') {
      setDisplayedCreators(savedCreators)
    }
  }

  return (
    <div className="App">
      <Header 
        handlePageSwitch={handlePageSwitch} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
      />
      <Routes>
        <Route path='/' element={<Home setActiveTab={setActiveTab} handlePageSwitch={handlePageSwitch} />} />
        <Route path='/main' element={<Main displayedCreators={displayedCreators} />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
