import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface NavbarProps {
  onToggleSavedCreators: () => void;
  onToggleAllCreators: () => void;
  name: string; 
  follows: number[]; 
}

const Header: React.FC<NavbarProps> = ({ onToggleSavedCreators, onToggleAllCreators, name, follows }) => {
  const [activeTab, setActiveTab] = useState<'saved' | 'all' | 'home'>('all');

  const handleTabChange = (tab: 'saved' | 'all' | 'home') => {
    setActiveTab(tab);
    if (tab === 'saved') {
      onToggleSavedCreators();
    } else if (tab === 'all') {
      onToggleAllCreators();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <header className="header">
      <div className="header-title">
        <h1>Platform</h1>
        <h2>Welcome, {name}</h2>
      </div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <Link to='/'>
            <li className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabChange('home')}>
              Home
            </li>
          </Link>
          <Link to='/main'>
            <li className={`nav-item ${activeTab === 'all' ? 'active' : ''}`} onClick={() => handleTabChange('all')}>
              All Creators
            </li>
          </Link>
          <Link to='/main'>
            <li className={`nav-item ${activeTab === 'saved' ? 'active' : ''}`} onClick={() => handleTabChange('saved')}>
              Saved Creators
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

