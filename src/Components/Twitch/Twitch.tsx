import './Twitch.css';
import React from 'react';

interface TwtichProps {
	videoId: string;
}

const Twitch: React.FC<TwtichProps> = ({ videoId }) => {
	// Construct the URL of the embedded YouTube video
	// const youtubeUrl = `https://www.youtube.com/embed/${videoId}`; will use later with actual twtich data

	return (
		<div className='twitch_card'>
			<iframe src="https://player.twitch.tv/?channel=esl_dota2earth&parent=capstonefrontend-dun.vercel.app"
				allowFullScreen
				scrolling="no"
				height="378"
				width="620"></iframe>
		</div>
	);
};

export default Twitch;
