// Home.tsx
import './Main.css';
import CreatorCard from '../CreatorCard/CreatorCard';
import { Creator } from '../../types';
import { Link } from 'react-router-dom';

type MainProps = {
  myCreators: Creator[];
}

function Main(props: MainProps) {
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

export default Main;
