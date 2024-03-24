import './Details.css';
import Youtube from '../Youtube/Youtube';
import Twitch from '../Twitch/Twitch';
import mockdata from '../../mock-data-dana';
import { useEffect, useState } from 'react';

function Details() {

	const [selectedButton, setSelectedButton] = useState<string>('youtube'); // Initially select the first button

	const handleButtonClick = (buttonId: string) => {
		setSelectedButton(buttonId);
	};

	useEffect(() => {
		console.log("button changed to: ", selectedButton)
	}, [selectedButton])

	return (
		<div className='details'>
			<h2>This is the details page</h2>
			<div className="header">
				<button
					className={selectedButton === 'youtube' ? 'selected' : ''}
					onClick={() => handleButtonClick('youtube')}
				>
					Youtube
				</button>
				<button
					className={selectedButton === 'twitch' ? 'selected' : ''}
					onClick={() => handleButtonClick('twitch')}
				>
					Twitch
				</button>
				<button
					className={selectedButton === 'button3' ? 'selected' : ''}
					onClick={() => handleButtonClick('button3')}
				>
					Etc.
				</button>
			</div>

			{selectedButton === 'youtube' && (
				<>
					{mockdata.data[0].attributes.youtube_videos.map(video => (
						<Youtube key={video.id} videoId={video.id} />
					))}
				</>
			)}
			{selectedButton === 'twitch' && (
				<>
					{mockdata.data[1].attributes.youtube_videos.map(video => (
						<Twitch key={video.id} videoId={video.id} />
					))}
				</>
			)}


		</div>
	);
};

export default Details;