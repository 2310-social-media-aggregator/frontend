import './Home.css';
import { Link } from 'react-router-dom';

type HomeProps = {
  setActiveTab: (tab: 'saved' | 'all' | 'home') => void,
  handlePageSwitch: (tab: 'saved' | 'all' | 'home') => void
}

function Home({ setActiveTab, handlePageSwitch }: HomeProps) {
  
  const pushGetStarted = () => {
    setActiveTab('all');
    handlePageSwitch('all');
  }
  
  return (
    <section className='home-container'>
      <Link to='/main'>
        <button className='start-btn' onClick={() => pushGetStarted()}>Get Started</button>
      </Link>
    </section>
  )
}

export default Home;