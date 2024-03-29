import './Header.css';
import { Link } from 'react-router-dom';
import { User } from '../../types';

type HeaderProps = {
  handlePageSwitch: (tab: string) => void,
  activeTab: string,
  setActiveTab: (tab: 'saved' | 'all' | 'home') => void,
  user: User | null
}

function Header({ handlePageSwitch, activeTab, setActiveTab, user }: HeaderProps) {

  const handleTabChange = (tab: 'saved' | 'all' | 'home') => {
    setActiveTab(tab);
    handlePageSwitch(tab);
  };

  return (
    <header className="header">
      <div className="header-title">
        <h1>PLATFORM</h1>
        <h2>Welcome, {user && user.name}</h2>
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

