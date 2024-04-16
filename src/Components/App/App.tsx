import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Home from '../Home/Home';
import Details from '../Details/Details';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import { Creator, User, CreatorInfo } from '../../types';
import { getUserInfo, getCreators, postCreator, deleteCreator } from '../../apiCalls';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [savedCreators, setSavedCreators] = useState<Creator[] | null>(null);
  const [allCreators, setAllCreators] = useState<Creator[] | null>(null);
  const [displayedCreators, setDisplayedCreators] = useState<Creator[] | null>(null);
  const [activeTab, setActiveTab] = useState<'saved' | 'all' | 'home'>('home');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCreators()
      .then(data => {
        setAllCreators(data.data.attributes.creators);
      })
      .catch(error => setError('Failed to get creators. Please try again later.'));
    getUserInfo()
      .then(data => {
        setUser(data.data.attributes);
        setSavedCreators(data.data.attributes.follows);
      })
      .catch(error => setError('Failed to display user info. Please try again later.'));
  }, []);

  const handlePageSwitch = (tab: string) => {
      if (tab === 'all') {
        setDisplayedCreators(allCreators);
      } else if (tab === 'saved') {
        setDisplayedCreators(savedCreators);
      } else {
        setDisplayedCreators(null);
      };
  };

  const favoriteCreator = (creatorInfo: CreatorInfo) => {
		const newFavorite = {'id': parseInt(creatorInfo.id), 'name': creatorInfo.attributes.name};
		if (savedCreators) {
			const updatedFavorites = [...savedCreators, newFavorite];
			setSavedCreators(updatedFavorites);
			postCreator({"creator_id": parseInt(creatorInfo.id)});
		};
  };

  const unfavoriteCreator = (id: number) => {
		if (savedCreators) {
			const updatedFavorites = savedCreators.filter(creator => creator.id !== id);
			setSavedCreators(updatedFavorites);
			deleteCreator(id);
		};
  };

  return (
    <div className="App">
      <Header 
        handlePageSwitch={handlePageSwitch} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
      />
      {error && <div className="error-message">{error}</div>}
      <Routes>
        <Route path='/' element={<Home setActiveTab={setActiveTab} handlePageSwitch={handlePageSwitch} />} />
        <Route path='/main' element={<Main displayedCreators={displayedCreators} />} />
        <Route path='/details/:id' element={<Details savedCreators={savedCreators} favoriteCreator={favoriteCreator} unfavoriteCreator={unfavoriteCreator} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
