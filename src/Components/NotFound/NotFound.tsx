import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className='not-found-container'>
      <h2 className='not-found-title'>Page not found!</h2>
      <p className='not-found-msg'>Please return to the home page and try again.</p>
      <Link to='/'>
        <button className='return-btn'>Return Home</button>
      </Link>
    </section>
  );
};

export default NotFound;