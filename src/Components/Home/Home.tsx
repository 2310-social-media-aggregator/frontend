import './Home.css';
import { Link } from 'react-router-dom';

interface HomeProps {
  setActiveTab: (tab: 'saved' | 'all' | 'home') => void;
  onToggleAllCreators: () => void;
}

function Home({ setActiveTab, onToggleAllCreators }: HomeProps) {
  
  const getStarted = () => {
    setActiveTab('all');
    onToggleAllCreators();
  }
  
  return (
    <section className='home-container'>
      <Link to='/main'>
        <button className='start-btn' onClick={() => getStarted()}>Get Started</button>
      </Link>
    </section>
  )
}

export default Home;