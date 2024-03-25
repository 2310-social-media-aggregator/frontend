// Home.tsx
import './Home.css';
import CreatorCard from '../CreatorCard/CreatorCard';
import { Creator } from '../../types';
import { Link } from 'react-router-dom';

type HomeProps = {
  myCreators: Creator[];
}

function Home(props: HomeProps) {
  const creatorCards = props.myCreators.map(creator => {
    return (
      <Link to={`/details/${creator.id}`} key={creator.id}>
        <CreatorCard
          name={creator.attributes.name}
          id={creator.id}
          key={creator.id}
        />
      </Link>
    );
  });
  
  return (
    <section className='card-container'>
      {creatorCards}
    </section>
  );
}

export default Home;
