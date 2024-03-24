import './Details.css';
import Youtube from '../Youtube/Youtube';
import Twitch from '../Twitch/Twitch';
import mockdata from '../../mock-data-dana';
import { useState } from 'react';

function Details() {

	const [selectedButton, setSelectedButton] = useState<string>('button1'); // Initially select the first button

	const handleButtonClick = (buttonId: string) => {
		setSelectedButton(buttonId);
	};

	return (
		<div className='details'>
			<h2>This is the details page</h2>
			<div className="header">
				<button
					className={selectedButton === 'button1' ? 'selected' : ''}
					onClick={() => handleButtonClick('button1')}
				>
					Button 1
				</button>
				<button
					className={selectedButton === 'button2' ? 'selected' : ''}
					onClick={() => handleButtonClick('button2')}
				>
					Button 2
				</button>
				<button
					className={selectedButton === 'button3' ? 'selected' : ''}
					onClick={() => handleButtonClick('button3')}
				>
					Button 3
				</button>
			</div>
			{mockdata.data[0].attributes.youtube_videos.map(video => (
        <Youtube key={video.id} videoId={video.id} />
      ))}


		</div>
	);
};

export default Details;