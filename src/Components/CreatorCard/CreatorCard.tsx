import './CreatorCard.css';

type CreatorCardProps = {
  name: string,
  id: number,
  key: number
}

function CreatorCard( props: CreatorCardProps ) {
  return (
    <section className='card'>
      <p>{props.name}</p>
    </section>
  );
};

export default CreatorCard;