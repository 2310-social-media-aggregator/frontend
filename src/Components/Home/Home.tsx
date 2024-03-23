import './Home.css';
import CreatorCard from '../CreatorCard/CreatorCard';
import { Creator } from '../../types'

type HomeProps = {
  myCreators: Creator[];
}

function Home( props: HomeProps ) {

  const creatorCards = props.myCreators.map(creator => {
    return (
      <CreatorCard
      name={creator.attributes.name}
      id={creator.id}
      key={creator.id}
      />
    )
  })
  
  return (
    <section>
    {creatorCards}
    </section>
  );
};

export default Home;