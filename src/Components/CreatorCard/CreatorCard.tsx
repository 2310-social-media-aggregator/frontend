import './CreatorCard.css';

type CreatorCardProps = {
  name: string,
  id: number,
  key: number
}

function CreatorCard( { name, id, key }: CreatorCardProps ) {
  return (
    <section className='card'>
      <p>{name}</p>
    </section>
  );
};

export default CreatorCard;