import './Main.css';
import CreatorCard from '../CreatorCard/CreatorCard';
import { Creator } from '../../types';
import { Link } from 'react-router-dom';

type MainProps = {
  displayedCreators: Creator[] | null
};

function Main({ displayedCreators }: MainProps) {
  let creatorCards;
  if (displayedCreators) {
    creatorCards = displayedCreators.map(creator => {
      return (
        <Link to={`/details/${creator.id}`} key={creator.id}>
          <CreatorCard
            name={creator.name}
            id={creator.id}
            key={creator.id}
          />
        </Link>
      );
    });
  };
  
  return (
    <section className='main-page'>
      <div>
        <section className='overlay'>
          {creatorCards}
        </section>
      </div>
    </section>
  );
};

export default Main;
