import React, { useState } from 'react';
import './Header.css';

interface NavbarProps {
  onToggleSavedCreators: () => void;
  onToggleAllCreators: () => void;
}

const Header: React.FC<NavbarProps> = ({ onToggleSavedCreators, onToggleAllCreators }) => {
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
        <h1>Social Media App</h1>
        <h2>Welcome User</h2>
      </div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabChange('home')}>
            Home
          </li>
          <li className={`nav-item ${activeTab === 'all' ? 'active' : ''}`} onClick={() => handleTabChange('all')}>
            All Creators
          </li>
          <li className={`nav-item ${activeTab === 'saved' ? 'active' : ''}`} onClick={() => handleTabChange('saved')}>
            Saved Creators
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
