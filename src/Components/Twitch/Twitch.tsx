import './Twitch.css';
import React from 'react';

interface TwtichProps {
	videoId: string;
}

const Twitch: React.FC<TwtichProps> = ({ videoId }) => {
	// Construct the URL of the embedded YouTube video
	// const youtubeUrl = `https://www.youtube.com/embed/${videoId}`; will use later with actual twtich data
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
