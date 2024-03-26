import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className='home-container'>
      <Link to='/main'>
        <button className='start-btn'>Get Started</button>
      </Link>
    </section>
  )
}

export default Home;