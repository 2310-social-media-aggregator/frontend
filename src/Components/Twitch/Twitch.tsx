import './Twitch.css';

type TwitchProps =  {
	videoId: string
};

function Twitch({videoId}: TwitchProps) {
  const twitchURL = `https://player.twitch.tv/?video=v${videoId}&parent=capstonefrontend-dun.vercel.app&autoplay=false`
  return (
    <div className='twitch_card'>
      <iframe
        src={twitchURL}
        allowFullScreen
        scrolling="no"
        height="378"
        width="620"></iframe>
    </div>
  );
};

export default Twitch;

