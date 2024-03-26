import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <Link to='/main'>
      <button>Get Started</button>
      </Link>
    </section>
  )
}

export default Home;